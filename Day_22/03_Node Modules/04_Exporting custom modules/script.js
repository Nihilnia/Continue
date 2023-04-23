const myModule = require("./myModule.js");

console.log(myModule.key);
console.log(myModule.inc());

console.log(myModule.continueNihil);
console.log(myModule.never);

//or, spesific

const { inc, dec, continueNihil, never, getKey } = require("./myModule.js");
inc();
inc();
inc();
dec();
console.log(getKey());
