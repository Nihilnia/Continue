import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [something, setSomething] = useState("abc");
  console.log(something);
  return (
    <div className="App">
      <header className="App-header">
        <h2>{something}</h2>
        <button
          onClick={() => {
            setSomething("Button_0");
          }}
        >
          Button_0
        </button>
        <button
          onClick={() => {
            setSomething("Button_1");
          }}
        >
          Button_1
        </button>
        <button
          onClick={() => {
            setSomething("Button_2");
          }}
        >
          Button_2
        </button>
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
      </header>
    </div>
  );
}

export default App;
