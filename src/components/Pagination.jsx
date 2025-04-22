import Button from "./Button";
import styles from "./Pagination.module.css";
function Pagination({ handlenext, handleprevious }) {
  return (
    <div className={styles.pagination}>
      <Button onclick={handleprevious}>Previous</Button>
      <Button onclick={handlenext}>Next</Button>
    </div>
  );
}

export default Pagination;
