const collectAnswers = require("./lib/collectAnswers.js");
const util = require("util");

const daQuestionz = ["Whats ur name", "Age", "Purpose"];

const eventAnswers = collectAnswers(daQuestionz, (f) => {
  console.log("[X]");
  console.log(f);
  process.exit();
});

eventAnswers.on("answer", (answer) => {
  util.log(`Answer is: ${answer}`);
});
