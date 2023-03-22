/*

Create two functions that are dependent on the other to
output some data from a custom object


*/

import Something from "./something.js";

const func01 = function (givenObj) {
  let newElement = document.createElement("article");
  newElement.innerHTML = `
    <ul>
        <li>${givenObj.name}</li>
        <li>${givenObj.length}</li>
    </ul>    
    `;

  console.log(newElement);
  return newElement;
};

const func02 = () => {
  let newElement_2 = document.createElement("figure");
  var newImgElement = document.createElement("img");
  newImgElement.setAttribute("src", `${Something.imgUrl}`);

  newElement_2.append(newImgElement);
  console.log(newElement_2);
  return newElement_2;
};

document.querySelector("#main").append(func01(Something));
document.querySelector("#main").append(func02(Something));
