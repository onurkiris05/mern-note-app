import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.body}>
        <p>
          &copy; 2023 My Notes, a project by{" "}
          <a href="https://github.com/onurkiris05" target="_blank" rel="noopener noreferrer">
            Onur Kiris
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
