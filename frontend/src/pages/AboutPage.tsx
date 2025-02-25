import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About My Notes</h1>
      <p className={styles.description}>
        Welcome to <strong>My Notes</strong>, an easy-to-use and simple note-taking app designed to
        help you stay organized and productive. Whether you're jotting down quick thoughts, creating
        to-do lists, or storing important information, <strong>My Notes</strong> makes it easy to
        keep everything in one place.
      </p>
      <section className={styles.features}>
        <h2>Features</h2>
        <ul className={styles.featureList}>
          <li>📝 Create, edit, and delete notes with ease.</li>
          <li>📅 Stay organized with a clean and intuitive interface.</li>
          <li>🔒 Keep your data secure with local storage and encryption.</li>
          <li>🔎 Search your notes with powerful filters and keywords.</li>
        </ul>
      </section>
      <section className={styles.aboutApp}>
        <h2>How It Works</h2>
        <p>
          Simply sign up, log in, and start adding your notes. You can edit or delete them at any
          time, and everything is automatically saved.
        </p>
      </section>
      <section className={styles.contact}>
        <h2>Contact</h2>
        <p>
          If you have any questions, feedback, or feature requests, feel free to reach out to us at{" "}
          <a href="mailto:support@mynotes.com">support@mynotes.com</a>.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
