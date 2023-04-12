import "./App.css";
import { useState, useReducer, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Homepage</Link> | <Link to="/About">About</Link> |
      <Link to="/RandomPage">RandomPage</Link>
    </nav>
  );
}

export function History() {
  return (
    <div>
      <h2>What a history.</h2>
    </div>
  );
}

export function About() {
  return (
    <div>
      <NavBar />
      <h2>It' s da About page</h2>
      <Link to="/About/History">Click to see da history</Link>
      <Outlet />
    </div>
  );
}

export function RandomPage({ minNumber, maxNumber }) {
  const [cbValue, setCbValue] = useReducer((cbValue) => !cbValue, false);
  const [pW, setPW] = useState("");

  useEffect(() => {
    console.log("Paw' s value changed to " + pW);
  }, [pW]);

  // console.log(pW);

  function controlForm(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <>
      <div>
        <form onSubmit={controlForm}>
          <input
            type="password"
            placeholder="Pass"
            onChange={(e) => setPW(e.target.value)}
          />
          <input type="checkbox" onChange={setCbValue} />
          <label>{cbValue === false ? "Not checked" : "Checked"}</label>
          <button type="submit">asdasd</button>
        </form>
      </div>
      <div>
        <NavBar />
        <h2>{Math.random(minNumber, maxNumber)}_a</h2>
        <h2>It's random page.</h2>
      </div>
    </>
  );
}

function App(props) {
  return (
    <div>
      <nav>
        {props.linkz.map((item) => (
          <Link to={item.link}>{item.name} | </Link>
        ))}
        <h2>It' s the homepage.</h2>
      </nav>
    </div>
  );
}
export default App;
