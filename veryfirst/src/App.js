import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useReducer } from "react";

function App(props) {
  // console.log(props.Glr);

  const [txt, setTxt] = useState("");
  const [hex, setHex] = useState("#000000");

  function resetStates() {
    setTxt("");
    setHex("#000000");
  }

  function fCatch(e) {
    e.preventDefault();

    alert(`Text: ${txt}, hex: ${hex}`);
    resetStates();
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={fCatch}>
          <input
            type="text"
            placeholder="Give a color.."
            value={txt}
            onChange={(event) => setTxt(event.target.value)}
          />
          <input
            type="color"
            value={hex}
            onChange={(event) => setHex(event.target.value)}
          />
          <button>Add</button>
        </form>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => {
            console.clear();
          }}
        >
          console.clear()
        </button>
      </header>
    </div>
  );
}

export default App;
