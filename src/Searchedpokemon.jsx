import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loadingscreen from "./components/Loadingscreen";
import Error from "./components/Error";
import Button from "./components/Button";
import Stats from "./components/Stats";
import styles from "./Searchedpokemon.module.css";
const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
function Searchedpokemon() {
  const { pokemon } = useParams();
  const [selectedpokemon, setselectedpokemon] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [stats, setstats] = useState({
    height: 0,
    weight: 0,
    exp: 0,
    hp: 0,
    attack: 0,
    defence: 0,
    splAttack: 0,
    splDefence: 0,
    speed: 0,
  });
  useEffect(() => {
    const apiurl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    async function fetchpokemon() {
      setloading(true);
      try {
        const res = await fetch(apiurl);
        if (!res.ok) throw new Error("Error occurred!!");
        const data = await res.json();
        console.log(data);
        setselectedpokemon(data);
        setstats({
          height: (data.height / 3.048).toFixed(1),
          weight: (data.weight / 10).toFixed(1),
          exp: data.base_experience,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defence: data.stats[2].base_stat,
          splAttack: data.stats[3].base_stat,
          splDefence: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        });
        setTimeout(() => setloading(false), 500);
      } catch {
        setloading(false);
        seterror(true);
      }
    }
    fetchpokemon();
  }, [pokemon]);
  if (loading) return <Loadingscreen />;
  if (error) return <Error />;
  return (
    <div className={`${styles.srchdpokemone} maxWidth`}>
      <div className={styles.header}>
        <Link to={"/"}>
          <Button>Back</Button>
        </Link>
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
          <h4>{selectedpokemon.name}</h4>
          <div className={styles.type}>
            {selectedpokemon.types.map((type, i) => (
              <span
                key={i}
                style={{ backgroundColor: colours[type.type.name] }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <Stats stats={stats} />
        </div>
        <div className={styles.image}>
          <img
            src={selectedpokemon.sprites.other.home.front_default}
            alt={selectedpokemon.name}
          />
        </div>
      </div>
    </div>
  );
}

export default Searchedpokemon;
