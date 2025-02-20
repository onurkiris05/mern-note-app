import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.body}>
        <h1 className={styles.title}>My Notes</h1>
      </div>
    </header>
  );
}

export default Header;
