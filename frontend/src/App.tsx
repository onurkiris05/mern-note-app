import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import * as UsersApi from "./network/users_api";
import { useAuthStore } from "./stores/authStore";
import { BrowserRouter } from "react-router-dom";

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
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
