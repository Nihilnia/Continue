console.log("R");



//startsWith
//- returns true or false, case sensitive
//endsWith


var Glr = "Gloria";
//startsWith
console.log(Glr.startsWith("Gl")); //true
console.log(Glr.startsWith("gl")); //false



//endsWith
console.log(Glr.endsWith("ria")); //true
console.log(Glr.startsWith("Ria")); //false


//includes
console.log(Glr.includes("ia")); //true
console.log(Glr.includes("iA")); //false


//search
//gives the index of the 'argument given'
//even if the argument is more than one in the string it still gives the first index

console.log(Glr.search("ia")); //4


var Glr_02 = "Gloriaiaiaiaia";
console.log(Glr_02.search("ia")); //still 4

//what is argument is not found in the string?
console.log(Glr.search("n")); //-1 ?