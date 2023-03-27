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

const fncChangeLid = function(){

  console.log(this.parentElement);

  let elementLid = this.parentElement.querySelector(".backpack__lid span");
  elementLid.innerText === "Open" ? elementLid.innerText = "Closed": elementLid.innerText = "Open";

  let btnText =  elementLid.innerText === "Open" ? this.innerText = "Close lid": this.innerText = "Open lid";
  this.innerText = btnText;

}

//2- Create a function to output the strap length form.

const fncForm = function(incominElementz){


  //3- Iterate through each item with the .backpack__strap class.
  incominElementz.forEach((element) => {

    console.log(element);
    //4- Capture the value of the data-side attribute to indicate the strap side.
    let side = element.getAttribute("data-side");
    console.log(side);

    //5- Create a form element.
    let elementForm = document.createElement("form");

    //6- Populate the form with an input and a submit button.
    elementForm.innerHTML = `
    <input type = 'number' placeholder = 'New ${side} value..'/>
    <button>Change ${side}</button>
    `;

    console.log(elementForm);

    element.append(elementForm);

    //7- Add event listener to each of the strap length forms.
    let inpElement = element.querySelector("input");

    let btnStrap = element.querySelector("button");
    btnStrap.addEventListener('click', (e) => {
      e.preventDefault();
      
      console.log(inpElement);
      //8- Update strap length value with value submitted from form.
      element.querySelector("span").innerText = `${inpElement.value} inches`;

      inpElement.value = "";

    })
    
  })

}


const backpackArray = backpackObjectArray.map((obj) => {
  
  let elementArticle = document.createElement("article");
  elementArticle.classList.add('backpack');
  elementArticle.setAttribute("id", obj.id);

  let elementFigure = `
    <figure class="backpack__image">
      <img src="${obj.image}" alt="" loading="lazy">
    </figure>
    <h1 class="backpack__name">${obj.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${obj.volume}</span></li>
      <li class="feature backpack__color">Color:<span> ${obj.color}</span></li>
      <li class="feature backpack__age">Age:<span> ${obj.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${obj.pocketNum}</span></li>
      <li class="feature backpack__strap" data-side="left">Left strap length: <span>${obj.strapLength.left} inches</span></li>
      <li class="feature backpack__strap" data-side="right">Right strap length: <span>${obj.strapLength.right} inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${obj.lidOpen === false ? "Closed": "Open"}</span></li>
    </ul>
    <button class="lid-toggle">${obj.lidOpen === false ? "Open lid": "Close lid"}</button>
  `;


  elementArticle.innerHTML = elementFigure;

  let btnChangeLid = elementArticle.querySelector(".lid-toggle");

  btnChangeLid.addEventListener("click", fncChangeLid);

  //1- Find the two elements with the .backpack__strap class.
  let elementStrap = elementArticle.querySelectorAll(".backpack__strap");
  fncForm(elementStrap);





  return elementArticle;
})


let elementMainContent = document.querySelector(".maincontent");


backpackArray.forEach((f) => {
  elementMainContent.append(f);
})