import { useState, useEffect } from "react";
import CharacterCard from "./Card";

function App() {
  const [numb, setNum] = useState(Math.floor(Math.random() * 826));
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  console.log(numb);

  useEffect(() => {
    setLoading(true);

    fetch(`https://rickandmortyapi.com/api/character/${numb}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((err) => setErr(err));
  }, [numb]);

  console.log(data);

  if (loading) return <h2>Loading data..</h2>;
  if (err) return <h2>Data cannot loaded</h2>;
  if (!data || data === null) return null;
  return (
    <>
      <CharacterCard
        chr={data}
        generateChar={() => setNum(Math.floor(Math.random() * 826))}
      />
    </>
  );
}

export default App;
