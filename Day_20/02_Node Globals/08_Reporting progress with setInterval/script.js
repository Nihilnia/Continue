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
  const p = Math.floor((start / 500) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Loading..: ${p}..\n`);
};

const f = setInterval(clockwork, 500);
