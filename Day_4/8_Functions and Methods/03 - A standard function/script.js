import GreenPack from "./backpack.js";

const extractBackpack = function (givenPack) {
  const newElement = document.createElement("article");
  newElement.innerHTML = `
    <h2>Backpack things..</h2>
    Color: ${givenPack.color}<br/>
    Idk: ${givenPack.idk}`;

  return newElement;
};

let divMain = document.querySelector("#main");
divMain.append(extractBackpack(GreenPack));
