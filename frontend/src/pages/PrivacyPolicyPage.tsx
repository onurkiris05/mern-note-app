import styles from "./PrivacyPolicyPage.module.css";

function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Last updated: February 25, 2022</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to our website. Your privacy is important to us, and this Privacy Policy explains
          how we collect, use, and protect your personal information.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal details such as name and email address.</li>
          <li>Usage data, including pages visited and time spent on the site.</li>
          <li>Cookies to enhance user experience.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>Your data may be used for:</p>
        <ul>
          <li>Providing and maintaining our services.</li>
          <li>Improving user experience.</li>
          <li>Sending updates or promotional emails (if consent is given).</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Protection</h2>
        <p>
          We take appropriate security measures to protect your personal data from unauthorized
          access, disclosure, or alteration.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal data.</li>
          <li>Withdraw consent for data usage.</li>
          <li>Request a copy of the data we hold about you.</li>
        </ul>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <a href="mailto:support@example.com"> support@example.com</a>
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicyPage;
