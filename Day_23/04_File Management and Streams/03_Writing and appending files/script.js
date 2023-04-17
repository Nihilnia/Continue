const util = require("util");
const fs = require("fs");
const v8 = require("v8");

process.stdin.on("data", (icData) => {
  let userInput = icData.toString().trim();
  let fileName = "makeYouScream.md";

  switch (userInput.toLowerCase()) {
    case "read":
      fs.readFile(fileName, "UTF-8", (err, data) => {
        if (err) throw err;
        util.log(`File succesfuly readed:\n\n${data}`);
      });
      break;
    case "exit":
      util.log("Goddbye!");
      process.exit();
      break;

    default:
      let format = "";

      if (userInput === "getheapcode") {
        format = v8.getHeapCodeStatistics().toString();
      } else {
        format = `\n\n------\n\n${userInput}-----`;
      }

      fs.appendFile(fileName, format, (err) => {
        if (err) throw err;
      });
      util.log("Succesfuly wrote.");
      break;
  }
});

util.log(v8.getHeapCodeStatistics());
