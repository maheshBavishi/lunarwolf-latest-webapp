import React from "react";
import styles from "./termsAndConditions.module.scss";

const termsPoints = [
  {
    title: "Acceptance of Terms",
    description:
      "By accessing this website, you agree to comply with these Terms and Conditions.",
  },
  {
    title: "Services",
    description:
      "Lunar Wolf provides information related to automated trading strategies and account management services. All strategies remain the intellectual property of Lunar Wolf.",
  },
  {
    title: "Account Access",
    description:
      "Users who participate in account management services may voluntarily provide trading account access for the purpose of executing trades through automated systems.",
  },
  {
    title: "Intellectual Property",
    description:
      "All software, strategies, algorithms, and content on this website are the exclusive property of Lunar Wolf. Users may not copy, distribute, or replicate any part of the system.",
  },
  {
    title: "Minimum Investment",
    description:
      "Participation in the trading strategy may require a minimum investment as stated on the website.",
  },
  {
    title: "Performance Fees",
    description:
      "Performance fees may apply based on profits generated through trading services as agreed between the client and Lunar Wolf.",
  },
  {
    title: "User Responsibility",
    description:
      "Users are responsible for ensuring that trading and investment activities are permitted under the laws of their jurisdiction.",
  },
  {
    title: "Modification of Services",
    description:
      "Lunar Wolf reserves the right to modify, suspend, or discontinue any part of the service without prior notice.",
  },
  {
    title: "Limitation of Liability",
    description:
      "Lunar Wolf will not be responsible for trading losses, technical issues, or any financial damages arising from the use of the website or services.",
  },
  {
    title: "Governing Law",
    description:
      "These Terms shall be governed by applicable laws of the jurisdiction where the business operates.",
  },
];

const TermsAndConditions = () => {
  return (
    <section className={styles.termsWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms & Conditions</h1>

        {/* <p className={styles.effectiveDate}>
            Effective Date: __________
          </p> */}

        <p className={styles.introText}>
          These Terms & Conditions govern the use of the Lunar Wolf website and
          services.
        </p>

        <ul className={styles.termsList}>
          {termsPoints.map((point) => (
            <li key={point.title}>
              <p className={styles.sectionTitle}>{point.title}</p>
              <p className={styles.sectionDesc}>{point.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TermsAndConditions;
