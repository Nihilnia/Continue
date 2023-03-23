/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";




const Booyah = backpackObjectArray.map((f) => {
  let newElement = document.createElement("article");
  newElement.classList.add("backpack");
  newElement.setAttribute("id", f.id);


  const content = `
    <figure class="backpack__image">
      <img src=${f.image} alt="" />
    </figure>
    <h1 class="backpack__name">${f.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        f.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        f.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${f.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        f.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        f.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        f.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        f.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  
`;


  newElement.innerHTML = content;

  return newElement;
});


const main = document.querySelector(".maincontent");


const addElements = (dArray, mother) => {
  dArray.forEach(element => {
    mother.append(element);
  });
}

addElements(Booyah, main);



//   const sayHi = (name) => {
//     console.log("Hi its, ", name);
//   }




// const cBExample = (x, callback) => {
//   console.log("Given name: ", x);

//   callback(x);
// }

// cBExample("f", sayHi);



//


// var randomNumbers = [1, 2, 3, 4, 5];

// var x2AllOfEm = randomNumbers.map((f) => {
//   return f * 2;
// })

// x2AllOfEm.forEach((f, x) => {
//   console.log(`${x}.Item: ${f}`);
// })