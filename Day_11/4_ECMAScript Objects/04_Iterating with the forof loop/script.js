
//String
for(let f of "Rammstein"){
    console.log(f);
};

//Array

for(let f of ["abc", "def", "ghl"]){
    console.log(f)
};

// //for- in
// for(let f in ["abc", "def", "ghl"]){
//     console.log(f)
// };


//Map
let things = new Map();
things.set("JavaScript", "/topics/js");
things.set("CSS", "/topics/cs");
things.set("Node", "/topics/node");

for(let f of things){
    console.log(f);
}

//Keys
for(let f of things.keys()){
    console.log(f);
}

//Values
for(let f of things.values()){
    console.log(f);
}


//Entries
for(let f of things.entries()){
    console.log(f);
}


