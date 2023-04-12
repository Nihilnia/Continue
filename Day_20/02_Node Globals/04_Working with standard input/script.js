console.log("Heya");

const questionz = ["What's ur name? ", "Idk what to ask more", "And more"];

function ask(f) {
  process.stdout.write(`\n\n${questionz[f]}`);
  process.stdout.write(`\n>>>`);
}

let answerz = [];

process.stdin.on("data", function (data) {
  process.stdout.write(data.toString().trim());
});

ask(answerz.length);
