import styles from "./card.module.css";
function Card({ pokemon, num }) {
  const urlparts = pokemon.url.split("/");
  const pokeid = urlparts[urlparts.length - 2];
  const imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeid}.png`;
  return (
    <div className={styles.card}>
      <img src={imgurl} alt="pokemon" />
      <div className={styles.text}>
        <h4 className="name">
          <span>{num}.</span>
          {pokemon.name}
        </h4>
      </div>
    </div>
  );
}

export default Card;
