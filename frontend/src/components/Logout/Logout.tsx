import Button from "../Button/Button";
import styles from "./Logout.module.css";
import * as UsersApi from "../../network/users_api";
import { useAuthStore } from "../../stores/authStore";

function Logout() {
  const setUser = useAuthStore((state) => state.setUser);

  async function handleLogout() {
    try {
      await UsersApi.logout();
      setUser(null);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <Button className={styles.btn} onClick={handleLogout}>
      <i className="bi bi-door-closed"></i> Logout
    </Button>
  );
}

export default Logout;
