import styles from "./Stat.module.css";
function Stat({ parameter, value, units }) {
  return (
    <div className={styles.stat}>
      <div className={styles.parameter}>{parameter}</div>
      <div className={styles.value}>
        {value}
        <span className={styles.units}>{units}</span>
      </div>
    </div>
  );
}

export default Stat;
