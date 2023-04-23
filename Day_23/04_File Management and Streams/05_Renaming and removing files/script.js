const fs = require("fs");
const util = require("util");

// fs.mkdir("./exampleFolder", () => {
//   util.log("Directory created.");
// });

// fs.writeFile(
//   "./exampleFolder/exampleFile.md",
//   "console.log('Hello world.')",
//   () => {
//     util.log("Wrote.");
//   }
// );

//To rename
// fs.renameSync(
//   "./exampleFolder/exampleFile.md",
//   "./exampleFolder/oldExampleFile.js"
// );

// fs.existsSync("./exampleFolder/oldExampleFile.js", () => {
//   util.log("file name changed.");
// });

//To move

// fs.rename("./exampleFolder/oldExampleFile.js", "./oldExampleFile.js", (err) => {
//   if (err) throw err;
//   util.log("File succesfuly moved.");
// });

// //To remove
// fs.unlinkSync("./oldExampleFile.js");

// fs.renameSync(
//   "./something/newAnotherSomethings.js",
//   "./newAnotherSomethings.js"
// );

// fs.rename(
//   "./newAnotherSomethings.js",
//   "./something/newAnotherSomethings.js",
//   (err) => {
//     if (err) throw err;
//     util.log("File name succesfuly changed");
//   }
// );

// fs.unlinkSync("./something/deletdis.html");

fs.unlink("./something/deletdis.html", (err) => {
  if (err) throw err;
  util.log("File deleted.");
});
