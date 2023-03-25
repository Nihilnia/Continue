/**
 * Events aplenty.
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */

const btnClick = document.querySelector(".cta-button");
const articleContainer = document.querySelector(".container");
const arena = document.querySelector(".mouse-data");
const dMain = document.querySelector("main");
const posX = document.querySelector(".posX");
const posY = document.querySelector(".posY");




btnClick.addEventListener('click', () => {
  console.log("Clicked.");

  articleContainer.classList.toggle("Gloria");
})
posX.classList.add("BLACK");
posY.classList.add("BLACK");

let count = 0;
const getPosition = (x) => {
  count++;
  console.log(`%c${count}.Mouse move, OFFSET_X: ${x.offsetX}`, "color: orange");
  console.log(`${count}.Mouse move, OFFSET_Y: ${x.offsetY}`);



  posX.innerHTML = `X: ${x.offsetX}`;
  posY.innerHTML = `Y: ${x.offsetY}`;

  if(count % 200 == 0){
    console.clear();
  }
}

dMain.addEventListener('mousemove', getPosition);