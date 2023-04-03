let elementUL = React.createElement(
  "ul",
  { style: { color: "blue" } },
  React.createElement("li", null, "elemenet_0"),
  React.createElement("li", null, "elemenet_1"),
  React.createElement("li", null, "elemenet_2")
);

let divMain = document.querySelector("#main");

ReactDOM.render(elementUL, divMain);
