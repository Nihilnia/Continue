/**
 * The var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

console.log(color);

function headingColor() {
  let xcolor = "blue";
  document.querySelector(".title").style.color = xcolor;
  console.log(color);
}
headingColor();
console.log(xcolor);

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
