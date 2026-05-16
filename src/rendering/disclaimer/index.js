import React from "react";
import styles from "./disclaimer.module.scss";

const disclaimerSections = [
  {
    title: "Trading Risk Disclaimer",
    description:
      "Forex trading involves a high level of risk and may not be suitable for all investors. Before deciding to trade in the Forex market, you should carefully consider your investment objectives, level of experience, and risk appetite.",
  },
  {
    title: "No Profit Guarantee",
    description:
      "Lunar Wolf does not guarantee any profits or specific performance results. Past performance is not indicative of future results.",
  },
  {
    title: "Market Risk",
    description:
      "Trading in financial markets can result in partial or total loss of invested capital. <br/>Maximum drawdowns of 20–40% can occur depending on market conditions.",
  },
  {
    title: "Educational Purpose",
    description:
      "Any information provided on this website is for informational and educational purposes only and should not be considered financial or investment advice.",
  },
  {
    title: "Third-Party Brokers",
    description:
      "Users may be required to open trading accounts with third-party brokers. Lunar Wolf is not responsible for broker operations, execution issues, or platform errors.",
  },
  {
    title: "User Responsibility",
    description:
      "By using this website or services, users acknowledge and accept all risks associated with trading and investment activities.",
  },
];

const Disclaimer = () => {
  return (
    <section className={styles.disclaimerWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Disclaimer</h1>

        <div className={styles.sectionsList}>
          {disclaimerSections.map((section) => (
            <article key={section.title} className={styles.sectionItem}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p
                className={styles.sectionDesc}
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            </article>
          ))}
        </div>

        <p className={styles.footerText}>
          If you do not agree with this disclaimer, you should not use the
          website or services.
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;
