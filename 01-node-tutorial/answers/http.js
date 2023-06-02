const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("These are the droids you're looking for.");
  } else if (req.url === "/about") {
    res.end("I am C-3PO, Human-Cyborg Relations.");
  } else {
    res.end(`<h1>Oops!</h1>
  <p>I guess these aren't the droids we were looking for.</p>
  <a href="/">back home</a>`);
  }
});

server.listen(3000);
