console.log(process.argv);

function grab(flag) {
  let index = process.argv.indexOf(flag) + 1;
  return process.argv[index];
}

let pass = grab("--pass");
let who = grab("--who");

console.log(pass);
console.log(who);
