/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);

collection.forEach((f, index) => {
  console.log(f, index);
});

//Basic assignment, change etc.
collection[0] = "Dog";
collection.forEach((f, index) => {
  console.log(f, index);
});

console.log();

//Instead of using append
collection[collection.length] = "The last item";
collection.forEach((f, index) => {
  console.log(f, index);
});

console.log(typeof collection);

//Even if you can assign an item to index that expands the array
// idk how to explain

collection[99] = "98. index";
console.log(collection[99]);

console.log("%c97. index", "color: orange", collection[98]);
console.log();
