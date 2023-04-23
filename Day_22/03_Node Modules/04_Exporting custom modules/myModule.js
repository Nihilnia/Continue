let key = 0;

const inc = () => ++key;
const dec = () => key--;

const getKey = () => key;

module.exports = {
  continueNihil: true,
  never: "giveUp",
  key,
  inc,
  dec,
  getKey,
};
