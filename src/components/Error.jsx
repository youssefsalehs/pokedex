import Button from "./Button";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";
function Error() {
  return (
    <div className={styles.back}>
      <Link to={"/"}>
        <Button>Back</Button>
      </Link>
      <div className={styles.error}>Error occurred !!!🧨🧨 </div>
    </div>
  );
}

export default Error;
