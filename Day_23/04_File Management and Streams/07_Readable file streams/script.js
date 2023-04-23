const fs = require("fs");
const util = require("util");

let stream = fs.createReadStream("./readme.md", "UTF-8");

let data;

stream.once("data", (chunk) => {
  util.log("Data reading is started..");
  console.log("- - - - -");
  util.log(chunk);
});

stream.on("data", (chunk) => {
  util.log(`Chunk length: ${chunk.length}`);
  data += chunk;
});

stream.on("end", () => {
  util.log(`Reading is finished. Length: ${data.length}`);
});

console.log("Welcome to the streams.");
