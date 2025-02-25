import styles from "./Header.module.css";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";

function Header() {
  return (
    <header>
      <div className={styles.body}>
        <div className={styles.nav}>
          <Link to="/" className={styles.title}>
            My Notes
          </Link>
          <NavBar />
        </div>
        <Auth />
      </div>
    </header>
  );
}

export default Header;
