const fs = require("fs");
const util = require("util");

if (fs.existsSync("our4_files")) {
  util.log("Already have that one.");
} else {
  fs.mkdir("our_files4", (err) => {
    if (err) throw err;
    util.log("our_files4 dir created.");
  });
}
