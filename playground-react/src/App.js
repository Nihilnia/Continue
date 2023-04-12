import logo from "./logo.svg";
import "./App.css";

import { useReducer, useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);

  function reducerExample(e) {
    let action = e.target.textContent;

    console.log(value);

    switch (action) {
      case "+":
        setValue(value + 1);
        break;
      case "-":
        setValue(value - 1);
        break;
      default:
        setValue(0);
        break;
    }
  }

  return (
    <div className="App">
      <pre>{value}</pre>
      <br />
      <button onClick={reducerExample}>+</button>
      <button onClick={reducerExample}>-</button>
      <button onClick={reducerExample}>Reset</button>
    </div>
  );
}

export default App;
