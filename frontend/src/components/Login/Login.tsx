import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Login.module.css";
import LoginModal from "./LoginModal";

function Login() {
  const [isModalActive, setIsModalActive] = useState(false);

  function toggleModal() {
    setIsModalActive(!isModalActive);
  }

  return (
    <>
      <Button className={styles.btn} onClick={toggleModal}>
        <i className="bi bi-box-arrow-in-right"></i> Login
      </Button>
      {isModalActive && <LoginModal onClose={toggleModal} />}
    </>
  );
}

export default Login;
