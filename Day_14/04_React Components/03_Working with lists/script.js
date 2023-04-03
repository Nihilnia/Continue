let divMain = document.querySelector("#main");

let elementUL = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Element_0"),
  React.createElement("li", null, "Element_1"),
  React.createElement("li", null, "Element_2"),
  React.createElement("li", null, "Element_3")
);

ReactDOM.render(elementUL, divMain);

const elementz = ["something_0", "something_1", "something_2"];
elementz.map((f) => f);
