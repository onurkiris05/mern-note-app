import { Route, Routes } from "react-router-dom";
import styles from "./Main.module.css";
import NotesPage from "../../pages/NotesPage";
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage";
import NotFoundPage from "../../pages/NotFoundPage";
import AboutPage from "../../pages/AboutPage";

function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default Main;
