import Backpack from "./backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

var daTemplate = "<h2>" + everydayPack["name"] + "</h2>";

document.body.innerHTML = daTemplate;
