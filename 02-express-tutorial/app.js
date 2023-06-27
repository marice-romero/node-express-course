const express = require("express");
const app = express();

const logger = require("./logger.js");
const cookieParser = require("cookie-parser");

const peopleRouter = require("./routes/people.js");
const productsRouter = require("./routes/products.js");
const queryRouter = require("./routes/query.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static("./public"));

app.use(logger);

function auth(req, res, next) {
  if (!req.cookies.name) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
  req.user = req.cookies.name;
  next();
}

app.post("/logon", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: "Unauthorized" });
  }
  res
    .cookie("name", req.body.name)
    .status(201)
    .json({ success: true, message: `Hello, ${name}` });
});

app.delete("/logoff", (req, res) => {
  res
    .clearCookie("name")
    .status(200)
    .json({ message: "The user is logged off." });
});

app.get("/test", (req, res) => {
  app.use(auth);
  return res.status(200).json({ message: `Welcome ${req.user}` });
});

app.use("/api/v1/people", peopleRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/query", queryRouter);

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.all("*", (req, res) => {
  res.status(404).send("Sorry, that page doesn't exist");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
