let key = 0;
const second = setInterval(() => {
  key += 0.5;
  console.log(`${key} second passed..`);
}, 500);

let stop = clearInterval(second);

if (key >= 10) {
  stop();
}
