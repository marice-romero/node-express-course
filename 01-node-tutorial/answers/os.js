const os = require("os");

const user = os.userInfo();
console.log(user);

console.log(`You've been running for: ${os.uptime()} seconds`);

const currentSystem = {
  system: os.type(),
  releaseVersion: os.release(),
  memoryCap: os.totalmem(),
  freeSpace: os.freemem(),
};

console.log(currentSystem);
