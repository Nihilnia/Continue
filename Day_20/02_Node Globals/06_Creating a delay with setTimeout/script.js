function grab(flag) {
  let index = process.argv.indexOf(flag) + 1;
  return process.argv[index];
}

let givenTime = grab("--timer");

console.log(`Timer setting up to ${givenTime} seconds`);

const timerDone = () => console.log("Process is done.");

setTimeout(timerDone, givenTime * 1000);
