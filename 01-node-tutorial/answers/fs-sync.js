const { readFileSync, writeFileSync } = require("fs");

const firstLine = "Anakin, Chancellor Palpatine is evil!";
const secondLine = "From my point of view, the Jedi are evil!";
const thirdLine = "Well then you are lost!";

writeFileSync(
  "./temporary/fileA.txt",
  `${firstLine}
${secondLine} 
${thirdLine}`,
  { flag: "a" }
);

const readTxt = readFileSync("./temporary/fileA.txt", "utf8");
console.log(readTxt);
