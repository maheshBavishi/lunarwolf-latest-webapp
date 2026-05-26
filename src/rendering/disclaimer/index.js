import React from "react";
import styles from "./disclaimer.module.scss";

const disclaimerSections = [
  {
    title: "Trading Risk Disclosure",
    description:
      "Foreign exchange trading involves substantial risk and may not be suitable for all users. Before participating, carefully evaluate your objectives, experience level, financial situation, and risk tolerance.<br/><br/>Please understand:<br/>• No trading system can guarantee profits<br/>• Drawdowns and losing periods are possible<br/>• Market volatility can become extreme<br/>• Past performance does not guarantee future results<br/>• Historical testing may differ from live conditions<br/>• Proper capital management remains essential",
  },
  {
    title: "No Performance Guarantee",
    description:
      "LUNAR WOLF is designed as a structured and adaptive trading framework not a guaranteed income product or risk-free trading system.<br/><br/>Public performance records, historical analysis, and transparency reports should not be interpreted as expectations of future performance.",
  },
  {
    title: "Market & Execution Risk",
    description:
      "Actual trading outcomes may vary depending on real-world market and broker conditions.<br/><br/>Performance may be affected by:<br/>• Broker execution quality<br/>• Slippage and spread changes<br/>• Liquidity conditions<br/>• Server latency<br/>• Market volatility<br/>• Technical interruptions",
  },
  {
    title: "Platform Purpose",
    description:
      "Lunar Wolf provides algorithmic trading software and related support services.<br/><br/>Information presented on this website is intended for informational and educational purposes only and should not be considered financial, investment, or legal advice.",
  },
  {
    title: "Broker & Fund Responsibility",
    description:
      "Users trade exclusively through their own broker accounts.<br/><br/>Lunar Wolf does not hold, manage, deposit, withdraw, or control client funds and is not responsible for broker operations, execution conditions, or broker-related service interruptions.",
  },
  {
    title: "User Responsibility",
    description:
      "By using this platform, users acknowledge and accept the risks associated with trading activity and remain responsible for their own trading decisions, broker selection, and capital management.",
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
          If you do not agree with these terms, please do not use the website or services.
          <br /><br />
          <span style={{ fontStyle: "italic" }}>
            Past performance does not guarantee future results. Trade responsibly and only use capital you can afford to risk.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;
