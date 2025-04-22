import Stat from "./Stat";
import styles from "./Stats.module.css";
function Stats({ stats }) {
  const {
    height,
    weight,
    exp,
    hp,
    attack,
    defence,
    splAttack,
    splDefence,
    speed,
  } = stats;
  return (
    <div className={styles.stats}>
      <Stat parameter={"Height"} value={height} units={"ft"} />
      <Stat parameter={"Weight"} value={weight} units={"kg"} />
      <Stat parameter={"Base Exp"} value={exp} />
      <Stat parameter={"Hp"} value={hp} />
      <Stat parameter={"Attack"} value={attack} />
      <Stat parameter={"Defence"} value={defence} />
      <Stat parameter={"spl Attack"} value={splAttack} />
      <Stat parameter={"spl Defence"} value={splDefence} />
      <Stat parameter={"Speed"} value={speed} />
    </div>
  );
}

export default Stats;
