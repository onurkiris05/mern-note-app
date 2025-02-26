import { useState } from "react";
import Button from "../Button/Button";
import styles from "./SignUp.module.css";
import SignUpModal from "./SignUpModal";
import { useNavbarStore } from "../../stores/navbarStore";

function SignUp() {
  const [isModalActive, setIsModalActive] = useState(false);
  const setNoPositionNavbar = useNavbarStore((state) => state.setNoPositionNavbar);

  function toggleModal() {
    setIsModalActive(!isModalActive);
    setNoPositionNavbar(!isModalActive);
  }

  return (
    <>
      <Button className={styles.btn} onClick={toggleModal}>
        <i className="bi bi-pencil-square"></i> Signup
      </Button>
      {isModalActive && <SignUpModal onClose={toggleModal} />}
    </>
  );
}

export default SignUp;
