const fs = require("fs");
const util = require("util");

const files = fs.readdirSync("./");
util.log(files);

let dir = "./";

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  util.log(files);
});

util.log("Reading.....");
