const collectAnswers = require("./lib/collectAnswers.js");

const daQuestionz = ["Whats ur name", "Age", "Purpose"];

collectAnswers(daQuestionz, (f) => {
  console.log("[X]");
  console.log(f);
  process.exit();
});
