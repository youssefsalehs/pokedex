import Header from "./components/Header";
import Feed from "./components/feed";
import Pagination from "./components/Pagination";
import Loadingscreen from "./components/Loadingscreen";
import { useState } from "react";
import { useEffect } from "react";
function Home() {
  const [pokemons, setpokemons] = useState([]);
  const [offset, setoffset] = useState(() => {
    const storedoffset = sessionStorage.getItem("offset");
    return storedoffset ? parseInt(storedoffset, 10) : 0;
  });
  const [loading, setloading] = useState(true);
  useEffect(
    function () {
      async function fetchpokemon() {
        try {
          setloading(true);
          const apiurl = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`;
          const res = await fetch(apiurl);
          const data = await res.json();
          setpokemons(data.results);
          setTimeout(() => {
            setloading(false);
          }, 500);
        } catch {
          console.error("Error fetching pokemon");
        }
      }
      fetchpokemon();
    },
    [offset]
  );
  useEffect(() => {
    setloading(true);
  }, [offset]);
  function handlenext() {
    const newoffset = offset + 50;
    setoffset(newoffset);
    sessionStorage.setItem("offset", newoffset.toString());
  }
  function handleprevious() {
    const newoffset = offset <= 50 ? 0 : offset - 50;
    setoffset(newoffset);
    sessionStorage.setItem("offset", newoffset.toString());
  }

  return (
    <div className={`home`}>
      {loading && <Loadingscreen />}

      {!loading && (
        <>
          <Header />
          <Feed pokemons={pokemons} offset={offset} />
          <Pagination handlenext={handlenext} handleprevious={handleprevious} />
        </>
      )}
    </div>
  );
}

export default Home;
