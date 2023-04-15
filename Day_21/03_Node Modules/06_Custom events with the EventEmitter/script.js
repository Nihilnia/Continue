const getTheAnswerz = require("./lib/collectAnswerz.js");

const daQuestionz = ["Whats ur name", "Age", "Purpose"];

getTheAnswerz(daQuestionz, (f) => {
  console.log("[X]");
  console.log(f);
  process.exit();
});
