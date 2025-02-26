import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Login.module.css";
import LoginModal from "./LoginModal";
import { useNavbarStore } from "../../stores/navbarStore";

function Login() {
  const [isModalActive, setIsModalActive] = useState(false);
  const setNoPositionNavbar = useNavbarStore((state) => state.setNoPositionNavbar);

  function toggleModal() {
    setIsModalActive(!isModalActive);
    setNoPositionNavbar(!isModalActive);
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
