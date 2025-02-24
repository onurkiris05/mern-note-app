import { useState } from "react";
import Button from "../Button/Button";
import styles from "./SignUp.module.css";
import SignUpModal from "./SignUpModal";

function SignUp() {
  const [isModalActive, setIsModalActive] = useState(false);

  function toggleModal() {
    setIsModalActive(!isModalActive);
  }

  return (
    <>
      <Button className={styles.btn} onClick={toggleModal}>
        <i className="bi bi-pencil-square"></i> Sign Up
      </Button>
      {isModalActive && <SignUpModal onClose={toggleModal} />}
    </>
  );
}

export default SignUp;
