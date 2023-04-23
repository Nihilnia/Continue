const util = require("util");
const fs = require("fs");
const { EventEmitter } = require("events");

let data = `
    -----------------------------------
    S O M E T H I N G H E R E
    S O M E T H I N G H E R E
    S O M E T H I N G H E R E
    S O M E T H I N G H E R E
    S O M E T H I N G H E R E
    S O M E T H I N G H E R E
    S O M E T H I N G H E R E
    -----------------------------------

`;

fs.writeFile("example.md", data.trim(), () => {
  util.log("Data is succesfuly written in the file..");
});

let emitter = new EventEmitter();

emitter.on("CommunicateWithDaUser", (data) => {
  util.log(data);
});

emitter.emit("CommunicateWithDaUser", "Some example data.");

process.stdin.on("data", (icData) => {
  let incData = icData.toString().trim();

  switch (incData) {
    case "read":
      fs.readFile("example.md", "UTF-8", (err, data) => {
        if (err) throw err;
        util.log(data);
      });
      break;

    case "write":

    case "exit":
      util.log("Goodbye then!");
      process.exit();
      break;

    default:
      util.log("Unknown command.");
      break;
  }
});
