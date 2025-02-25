import styles from "./Auth.module.css";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import SignUp from "../SignUp/SignUp";
import { useAuthStore } from "../../stores/authStore";

function Auth() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className={styles.body}>
      {user ? (
        <>
          <p>
            Welcome, <strong>{user.username}</strong>
          </p>
          <Logout />
        </>
      ) : (
        <>
          <Login />
          <SignUp />
        </>
      )}
    </div>
  );
}

export default Auth;
