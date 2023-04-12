console.log("Heya");

const questionz = ["What's ur name? ", "Idk what to ask more", "And more"];

function ask(f = 0) {
  process.stdout.write(`\n\n${questionz[f]}`);
  process.stdout.write(`\n>>>`);
}

let answerz = [];

ask();

process.stdin.on("data", function (data) {
  answerz.push(data.toString().trim());
  if (answerz.length < questionz.length) {
    ask(answerz.length);
  } else {
    process.exit();
  }
});

process.on("exit", function () {
  process.stdout.write(`Hi ${answerz[0]}`);
});
