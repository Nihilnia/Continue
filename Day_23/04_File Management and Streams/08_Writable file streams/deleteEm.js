const fs = require("fs");
const util = require("util");

fs.readdirSync("./").forEach((file) => {
  if (file.endsWith(".md")) {
    fs.unlinkSync(file);
    util.log(`DELETED FILE: ${file}`);
  }
});
