import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";
import styles from "./Header.module.css";
import { useState } from "react";
function Header() {
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/${query}`);
    }
  };
  return (
    <header className={`${styles.header} `}>
      <nav className="maxWidth">
        <Link to="/">
          <img src={logo} alt="pokedex" />
        </Link>
        <div className={styles.srchcontainer}>
          <input
            type="text"
            placeholder="search by name or id"
            value={query}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setquery(e.target.value);
            }}
          />
          <Link to={`/${query}`}>
            <Button>Search</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
