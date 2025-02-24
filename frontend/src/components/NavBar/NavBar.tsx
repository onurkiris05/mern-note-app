import styles from "./NavBar.module.css";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import SignUp from "../SignUp/SignUp";
import { useAuthStore } from "../../stores/authStore";

function NavBar() {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.username}</p>
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

export default NavBar;
