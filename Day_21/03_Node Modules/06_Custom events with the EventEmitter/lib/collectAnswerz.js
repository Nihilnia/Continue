const util = require("util");
const readLine = require("readline");

const daQuestionz = ["Whats ur name", "Age", "Purpose"];

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (questionz, done) => {
  const answerz = [];

  const questionAnswered = (answer) => {
    answerz.push(answer.trim());
    if (answerz.length < questionz.length) {
      rl.question(questionz[answerz.length], questionAnswered);
    } else {
      return done(answerz);
    }
  };
  rl.question(questionz[0], questionAnswered);
};
