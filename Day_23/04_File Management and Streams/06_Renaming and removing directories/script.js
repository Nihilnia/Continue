const fs = require("fs");
const util = require("util");

// //Moving
// fs.renameSync("./move", "./examplefolder/move");
// util.log("Folder moved.");

// //_async
// fs.rename("./move", "./examplefolder/move", (err) => {
//   if (err) throw err;
//   util.log("Folder moved");
// });

// //Renaming

// fs.renameSync("./move", "./oldMove");
// util.log("Folder moved.");

//_async
// fs.rename("./move", "./oldMove", (err) => {
//   if (err) throw err;
//   util.log("Folder moved.");
// });

//Removing
// fs.rmdirSync("./oldMove");
// util.log("Directory removed");

// //_async
// fs.rmdir("./accountz", (err) => {
//   if (err) throw err;
//   util.log("Directory removed");
// });

// fs.readdirSync("./oldMove").forEach((file) => {
//   fs.unlinkSync(`./oldMove/${file}`);
//   util.log(file + " deleted..");
// });

// fs.rmdirSync("./oldMove");
// util.log("Directory removed.");
