const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile("./temporary/await.txt", "I solemnly swear ");
    await writeFile("./temporary/await.txt", "I am up to no good\n", {
      flag: "a",
    });
    await writeFile("./temporary/await.txt", "Mischief managed!", {
      flag: "a",
    });
  } catch (error) {
    console.log(error);
  }
};

const reader = async () => {
  try {
    const readLines = await readFile("./temporary/await.txt", "utf8");
    console.log(readLines);
  } catch (error) {
    console.log(error);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch (error) {
    console.log(error);
  }
};

readWrite();
