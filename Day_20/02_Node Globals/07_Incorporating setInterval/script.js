const grab = (f) => {
  let index = process.argv.indexOf(f) + 1;
  return process.argv[index];
};

let delay = grab("--delay");
let start = 0;

const timer = () => {
  console.log("Done.");
  clearInterval(f);
};

setTimeout(timer, delay * 1000);

const clockwork = () => {
  start += 0.5;
  process.stdout.write(`Been ${start} seconds..\n`);
};

const f = setInterval(clockwork, 500);

//or

// let key = 0;
// const daInterval = setInterval(() => {
//   key += 0.5;
//   process.stdout.write(`Been ${key} seconds..\n`);
//   if (key >= 3) {
//     clearInterval(daInterval);
//   }
// }, 500);
