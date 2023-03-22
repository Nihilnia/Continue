/*

Create a basic function declaration
Make a change to an element in the DOM
(querySeIector, adding a class, and so on)
Call the function declaration
Create a basic function expression


*/

var divMain = document.querySelector("#main");

const basicFunction = function (givenElement) {
  console.log("w.");

  givenElement.innerText = "aaaaabbbbbccc";
  givenElement.style.color = "yellow";
  givenElement.classList.add("new-class");
  divMain.append(givenElement);

  console.log(givenElement);
  console.log("givenElement applied.");
};

var newElement = document.createElement("h2");

basicFunction(newElement);
