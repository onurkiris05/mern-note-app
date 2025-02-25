import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.body}>
      <Link to="/about">About</Link>
      <Link to="/privacy">Privacy</Link>
    </div>
  );
}

export default NavBar;
