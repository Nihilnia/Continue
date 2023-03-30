let exampleArray = ["A", "B", "C", "D", "E"];

//In old way to reach any element
console.log(exampleArray[0]) //A

//Instead of this we can name every item we want

let [g, l, r] =  ["A", "B", "C", "D", "E"];

console.log(g); //A
console.log(l); //B
console.log(r); //C

//Names can be anything ofc.
//And;


let [oneA, , , , fifthE]  =  ["A", "B", "C", "D", "E"];

console.log(oneA); //A
console.log(fifthE); //E