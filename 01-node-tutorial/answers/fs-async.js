const { readFile, writeFile } = require("fs");

const line1 = "Obi-Wan never told you what happened to your father.\n";
const line2 = "He told me enough! He told me you killed him!\n";
const line3 = "No, I am your father!";

console.log("start!");

writeFile("./temporary/fileB.txt", line1, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("wrote first line");
  writeFile("./temporary/fileB.txt", line2, { flag: "a" }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("wrote second line");
    writeFile("./temporary/fileB.txt", line3, { flag: "a" }, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
});

console.log("done!");
