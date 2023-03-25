//1_import
import backPackData from "./components/data.js";





//3_callback function
const toggleLid = function(){
  let findBackpack = backPackData.find(({id}) => id === this.parentElement.id);
  findBackpack.lidOpen === true ? findBackpack.lidOpen = false: findBackpack.lidOpen = true;


  //Button text
  this.innerText === "Open lid" ?  this.innerText = "Close lid": this.innerText = "Open lid";

  //Lid open text
  let lidStatus = this.parentElement.querySelector(".backpack__lid span");
  lidStatus.innerText === "open" ? lidStatus.innerText = "closed": lidStatus.innerText = "open";
}


//2_create
const backpackElements = backPackData.map((backpack) => {

  //article element
  let elementArticle = document.createElement("article");

  //figure element
  let elementFigure = `
  <article class="backpack" id="pack01">
  <figure class="backpack__image">
    <img src="${backpack.image}" alt="" loading="lazy">
  </figure>
  <h1 class="backpack__name">${backpack.name}</h1>
  <ul class="backpack__features">
    <li class="feature backpack__volume">Volume:<span> ${backpack.volume}</span></li>
    <li class="feature backpack__color">Color:<span> ${backpack.color}</span></li>
    <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
    <li class="feature backpack__pockets">Number of pockets:<span> ${backpack.pocketNum}</span></li>
    <li class="feature backpack__strap">Left strap length:<span> ${backpack.strapLength.left} inches</span></li>
    <li class="feature backpack__strap">Right strap length:<span> ${backpack.strapLength.right} inches</span></li>
    <li class="feature backpack__lid">Lid status: <span>${backpack.lidOpen === false ? "closed" : "open"}</span></li>
  </ul>
  <button class="lid-toggle">Open lid</button>
</article>`;

elementArticle.innerHTML = elementFigure;


//apply the callback funtion with the event
let btnLid = elementArticle.querySelector(".lid-toggle");
btnLid.addEventListener('click', toggleLid);

return elementArticle;

})



//4_placement

let elementMain = document.querySelector(".maincontent");

backpackElements.forEach((f) => {
  elementMain.append(f);
})