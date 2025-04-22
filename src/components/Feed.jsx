import { Link } from "react-router-dom";
import Card from "./card";
import styles from "./feed.module.css";
function Feed({ pokemons, offset }) {
  console.log(pokemons);
  return (
    <section className={`${styles.feed} maxWidth`}>
      {pokemons.map((pokemon, i) => (
        <Link to={`/${pokemon.name}`} key={i}>
          <Card pokemon={pokemon} num={i + offset + 1} key={i} />
        </Link>
      ))}
    </section>
  );
}

export default Feed;
