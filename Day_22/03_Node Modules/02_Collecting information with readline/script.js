const readLine = require("readline");
const util = require("util");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Are you there?\n", (answer) => {
  util.log("The answer is: " + answer.toUpperCase());
});
