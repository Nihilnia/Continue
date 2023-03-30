console.log("R");


const id = Symbol();


const movie = {
    title: "IDK",
    soundtracks: ["St_1", "St_2", "St_3"],
    id: "Something",
}


//Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.

console.log(movie);
console.log(movie.Symbol);


movie[id] = 12312;
movie[id] = 2;
console.log(movie);

//also
