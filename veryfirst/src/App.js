import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App(props) {
  console.log(props.userName);

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${props.userName}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  function checkUser() {
    if (data) {
      return (
        <div id="gitHubUser">
          <p>
            Username: {data.login}
            <br />
            Blog: {data.blog}
            <br />
            Type: {data.type}
            <br />
            Folowers: {data.followers} Following: {data.following}
            <br />
            Account created: {data.created_at}
            <br />
            Updated: {data.updated_at}
          </p>
          <img src={data.avatar_url} alt={data.avatar_url} width={200} />
        </div>
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {checkUser()}
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
