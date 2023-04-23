const util = require("util");
const fs = require("fs");

var syncData = fs.readFileSync("./data/lorem.md", "UTF-8");
util.log(syncData);

//ASYNC

fs.readFile("./data/lorem.md", "UTF-8", (err, icData) => {
  if (err) throw err;
  util.log(icData);
});

util.log("Reading the data...");
