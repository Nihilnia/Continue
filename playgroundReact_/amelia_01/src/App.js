import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import CharacterCard from "./Card";

function GetCharacters() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(null);
  const [err, setErr] = useState(null);
  const [numb, setNumb] = useState(Math.floor(Math.random() * 826));

  useEffect(() => {
    setLoading(true);

    console.log(numb);
    fetch(`https://rickandmortyapi.com/api/character/${numb}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .then(() => setLoading(false))
      .catch((err) => setErr(err));
  }, [numb]);

  if (loading) return <h3>Loading..</h3>;
  if (err) return <h3>Something went wrong..</h3>;
  if (!character || character === null) return null;
  return (
    <>
      <CharacterCard
        chr={character}
        generateChar={() => setNumb(Math.floor(Math.random() * 826))}
      />
    </>
  );
}

function App() {
  return (
    <>
      <GetCharacters />
    </>
  );
}

export default App;
