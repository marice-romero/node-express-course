const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", { highWaterMark: 200 });

let counter = 0;

stream.on("data", (result) => {
  counter += 1;
  console.log(result);
});

stream.on("end", () => {
  console.log(`Number of chunks: ${counter}`);
});

stream.on("error", (err) => {
  console.log(err);
});
