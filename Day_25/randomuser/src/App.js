import { useState, useEffect } from "react";
import CharacterCard from "./Card";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [link, setLink] = useState(
    "https://randomuser.me/api/?password=upper,1-8"
  );

  useEffect(() => {
    setLoading(true);

    fetch(`${link}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((err) => setErr(err));
  }, [link]);

  console.log(data);
  //gender
  //name-> title, first, last
  //location -> street, number, name
  //location -> city
  //location -> state
  //location -> country
  //location -> postcode
  //location -> coordinates -> latitude, longitude
  //email

  if (loading) return <h2>Loading..</h2>;
  if (err) return <h2>Something went wrong..</h2>;
  if (!data || data === null) return null;
  return (
    <>
      {/* <h2>{JSON.stringify(data.results[0].name.title)}</h2> */}
      <CharacterCard
        chr={data.results[0]}
        generateChar={() =>
          setLink(
            `https://randomuser.me/api/?password=upper,1-${Math.floor(
              Math.random() * 10
            )}`
          )
        }
      />
    </>
  );
}

export default App;
