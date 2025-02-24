import styles from "./Header.module.css";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header>
      <div className={styles.body}>
        <h1 className={styles.title}>My Notes</h1>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
