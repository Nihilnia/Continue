console.log("R");


let library = new Map();

//Set, keys and values
library.set("Book_01", {name: "Fight Club"});
library.set("Book_02", {name: "Fight Club_2"});


console.log(library);

//We cannot reach the values with dot
console.log(library.Book_01);

//Instead of this we need to use get() Method
console.log(library.get("Book_01"));


let details = new Map([
    [new Date(), "today"],
    ["Thingys", {javaScript : ["a", "b", "c"]}],
    ["someOtherItems", [1, 2]]
]);

console.log(details);


//Size, gives how many entries in this map
console.log(details.size);


//And OFC: Foreach
details.forEach((f) => {
    console.log(f);
})