/**
 * Challenge: Create an event listener
 * 1- Find the two elements with the .backpack__strap class.
 * 2- Create a function to output the strap length form.
 * 3- Iterate through each item with the .backpack__strap class.
 * 4- Capture the value of the data-side attribute to indicate the strap side.
 * 5- Create a form element.
 * 6- Populate the form with an input and a submit button.
 * 7- Add event listener to each of the strap length forms.
 * 8- Update strap length value with value submitted from form.
 */
import backpackObjectArray from "./components/data.js";


//2- Create a function to output the strap length form.
const fncForm = (incominNode) => {
console.log("asdasd");
  //3- Iterate through each item with the .backpack__strap class.
  incominNode.forEach((element) => {

    //4- Capture the value of the data-side attribute to indicate the strap side.
    let side = element.getAttribute("data-side").value;

    //5- Create a form element.
    let newForm = document.createElement("form");

    //6- Populate the form with an input and a submit button.
    newForm.innerHTML = 
    `<input type = 'number' name = '${side}Strap' placeholder = 'new ${side} value' >
    <button>Change</button>
    `;

    //7- Add event listener to each of the strap length forms.
    newForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let inpValue = element.querySelector("input").value;
      element.querySelector("span").innerText = inpValue + " inches";
    })

    element.append(newForm);


  })
}


/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function (event, button, newArg) {
  console.log(event);
  console.log(newArg);

  // Find the current backpack object in backpackObjectArray
  let backpackObject = backpackObjectArray.find(
    ({ id }) => id === button.parentElement.id
  );

  // Toggle lidOpen status
  backpackObject.lidOpen == true
    ? (backpackObject.lidOpen = false)
    : (backpackObject.lidOpen = true);

  // Toggle button text
  button.innerText == "Open lid"
    ? (button.innerText = "Close lid")
    : (button.innerText = "Open lid");

  // Set visible property status text
  let status = button.parentElement.querySelector(".backpack__lid span");
  status.innerText == "closed"
    ? (status.innerText = "open")
    : (status.innerText = "closed");
};

const backpackList = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="feature backpack__strap" data-side="left">Left strap length: <span>${
        backpack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap" data-side="right">Right strap length: <span>${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>
  `;

  let button = backpackArticle.querySelector(".lid-toggle");
  let newArg = "The argument I want to pass to the callback function!";

  // Add event listener
  button.addEventListener("click", (event) => {
    lidToggle(event, button, newArg);
  });

  //1- Find the two elements with the .backpack__strap class.
  let elementLi = backpackArticle.querySelectorAll(".backpack__strap");
  fncForm(elementLi);






  return backpackArticle;
});

// Append each backpack item to the main
const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});
