const { readFile, writeFile } = require("fs").promises;

writeFile("./temporary/then.txt", "Bears, ")
  .then(() => {
    return writeFile("./temporary/then.txt", "beets, ", { flag: "a" });
  })
  .then(() => {
    return writeFile("./temporary/then.txt", "Battlestar Galactica", {
      flag: "a",
    });
  })
  .then(() => {
    return readFile("./temporary/then.txt", "utf8");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
