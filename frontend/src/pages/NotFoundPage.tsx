import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import Button from "../components/Button/Button";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>

      <Button className={styles.homeButton}>
        <Link to="/">Go back to homepage</Link>
      </Button>
    </div>
  );
}

export default NotFoundPage;
