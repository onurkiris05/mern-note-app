import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import * as UsersApi from "./network/users_api";
import { useAuthStore } from "./stores/authStore";

function App() {
  const setUser = useAuthStore((state) => state.setUser);

  async function fetchUser() {
    try {
      const loggedInUser = await UsersApi.getLoggedInUser();
      setUser(loggedInUser);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
