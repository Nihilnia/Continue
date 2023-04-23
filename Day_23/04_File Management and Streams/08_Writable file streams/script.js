const fs = require("fs");

let answerStream;

let questionz = ["Name: ", "Age: ", "Profession: "];
let answerz = [];

const askQuestionz = function (index) {
  process.stdout.write(`\n\n${questionz[index]}`);
  process.stdout.write(">>>");
};

process.stdin.once("data", (data) => {
  let userInput = data.toString().trim();

  if (fs.existsSync(`./${userInput}.md`)) {
    fs.unlinkSync(`./${userInput}.md`);
  }

  answerStream = fs.createWriteStream(`./${userInput}.md`);
  answerStream.write(
    `Answer for question ${questionz[answerz.length]}: ${userInput}\n\n`
  );
});

process.stdin.on("data", (data) => {
  let answer = data.toString().trim();
  answerStream.write(
    `Answer for question ${questionz[answerz.length]}: ${answer}\n\n`,
    () => {
      if (answerz.length < questionz.length) {
        askQuestionz(answerz.length);
        console.log("ON, index: " + answerz.length);
      } else {
        process.exit();
      }
    }
  );
  answerz.push(answer);
});

process.on("exit", () => {
  console.log(answerz);
  answerStream.close();
  process.exit();
});

askQuestionz(answerz.length); //0
