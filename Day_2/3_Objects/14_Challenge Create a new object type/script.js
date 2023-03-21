import Book from "./book.js";

console.log("A book created without any information given:");
var bookDefault = new Book();
console.log(bookDefault.showTheData());
console.log(bookDefault.calculateTheAge());

console.log();

console.log("A book created with given infos: ");
var book01 = new Book("Book_01", "Author XYZ", 1985, "Horror");
console.log(book01.showTheData());
console.log(book01.calculateTheAge());

console.log();

console.log("Another book created with given infos: ");
var book02 = new Book("Book_03", "Author ABC", 1881, "History");
console.log(book02.showTheData());
console.log(book02.calculateTheAge());
