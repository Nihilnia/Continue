let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", function (e) {
  console.log(this.textContent);
});

inp.addEventListener("click", function (e) {
  console.log(this.value);
});
