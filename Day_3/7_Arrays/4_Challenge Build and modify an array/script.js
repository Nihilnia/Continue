/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

// Create an array with several items
// Remove the last item
// Move the last item to the first position
// Sort the items alphabetically
// Find a specific item in the array

let exArray = ["b", "a", "c", "d", "e", "f"];

console.log("Remove the last item:");
exArray.pop();
console.log(exArray);

console.log("Move the last item to the first position:");
// exArray.unshift(exArray[exArray.length - 1]);
// exArray.pop();
//Better solution
exArray.unshift(exArray.pop());
console.log(exArray);

console.log("Sort the items alphabetically:");
exArray.sort();
console.log(exArray);

console.log("Find a specific item in the array:");

let result = exArray.find((f) => {
  if (f == "c") {
    return f;
  }
});

console.log(result);
