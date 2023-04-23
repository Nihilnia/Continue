import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const list = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];
const ages = [10, 20, 30, 40, 50];

function App() {
  const [data, setData] = useState(null);

  const getUser = (username) => {
    console.log(username);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => err);
  };

  console.log(data);

  function Result() {
    if (data) return <h5>{JSON.stringify(data)}</h5>;
  }

  return (
    <>
      <input type="text" placeholder="Username" />
      <br />
      <button
        onClick={() => {
          let inpUserName = document.querySelector("input").value;
          getUser(inpUserName);
        }}
      >
        Search
      </button>
      <Result />
    </>
  );
}

export default App;
