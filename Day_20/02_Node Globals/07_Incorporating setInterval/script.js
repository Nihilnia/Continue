const grab = (f) => {
  let index = process.argv.indexOf(f) + 1;
  return process.argv[index];
};

let delay = grab("--delay");
let key = 0;

const timerFinished = () => {
  clearInterval(interval);
  console.log("Timer is done. Been: " + delay + "seconds");
};

setTimeout(timerFinished, delay * 1000);

const myInterval = () => {
  key += 0.5;
  console.log(`${key} seconds passed..`);
};

const interval = setInterval(myInterval, 500);

// or, shorter

// let key = 0;
// const xInterval = setInterval(() => {
//   key += 0.5;
//   console.log(`${key} seconds passed..`);
//   if (key === 5) {
//     clearInterval(xInterval);
//   }
// }, 500);
