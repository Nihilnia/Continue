let director = function*(){
    yield "Three";
    yield "Two";
    yield "One";
    yield "And action!";
}

let abc = director();


console.log(abc.next());
console.log(abc.next());
console.log(abc.next());
console.log(abc.next());
console.log(abc.next());
//Note: console.log(abc.next().value === "Three" ? "Its 3" : "It's not 3");
console.log(abc.next().done === true ? "All yields are used." : "All yields are not used yet.");