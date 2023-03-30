console.log("R");


//Set' s are basically collections of items
//Every item must be unique tho

let salmaHayek = new Set();

salmaHayek.add("ABC");
salmaHayek.add("DEF").add("QWE");

console.log(salmaHayek);

//Size
console.log("Size: " + salmaHayek.size);


//Has
console.log("Is our set has XYZ: " + salmaHayek.has("XYZ"));


//Delete
salmaHayek.delete("DEF");


//forEach
console.log("All items in the set: ");
salmaHayek.forEach((f) => {
    console.log(f);
})