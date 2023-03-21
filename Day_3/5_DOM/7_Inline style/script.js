// element.style
// gives you all the applied (even the ones has no value) css properties
// little note: with this way you can check which properties applied and
// you can change them with this way.

// element.style.property = 'newValue';

// element.style.color = 'newValue';

// element.style.cssText = 'color: black; border: 1px solid red;';

var h3 = document.querySelector("h3");
console.log(h3.style.cssText);

h3.style.cssText += "color: black";
console.log(h3.style.cssText);
