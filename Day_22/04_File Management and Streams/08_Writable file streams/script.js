const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log("Dir name: " + __dirname);
console.log("File name: " + __filename);

console.log("Dir name (base): " + path.basename(__dirname));
console.log("File name (base): " + path.basename(__filename));

for (let f in global) console.log(f);

//path.join

const rootFolder = path.join(__dirname, "www", "root");
console.log("ROOOOOOOT:" + rootFolder);
console.log(path.basename(rootFolder));

//util
util.log("Diiiiiiiiiiiir:" + __dirname);
util.log(__filename);
util.log(rootFolder);

util.log(path.basename(__dirname));
util.log(path.basename(__filename));
util.log(path.basename(rootFolder));

//v8
util.log(v8.getHeapCodeStatistics());
