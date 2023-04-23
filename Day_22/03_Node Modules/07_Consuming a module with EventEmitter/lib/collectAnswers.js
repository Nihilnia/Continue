const util = require("util");
const readLine = require("readline");
const { EventEmitter } = require("events");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (questionz, done) => {
  const answerz = [];

  let emitter = new EventEmitter();

  const questionAnswered = (answer) => {
    emitter.emit("answer", answer);

    answerz.push(answer.trim());
    if (answerz.length < questionz.length) {
      rl.question(questionz[answerz.length], questionAnswered);
    } else {
      return done(answerz);
    }
  };
  rl.question(questionz[0], questionAnswered);
  return emitter;
};
