import React from "react";
import styles from "./refundPolicy.module.scss";

const policyPoints = [
  {
    type: "section",
    title: "1. Refund Policy",
    description:
      "Lunar Wolf EA is not sold as a product, but provided as a service/access to a trading system.",
  },
  {
    type: "item",
    text: "Once access to the EA is granted, no refunds will be issued under any circumstances.",
  },
  {
    type: "item",
    text: "Fees (if any) are charged for technology access, setup, and strategy usage, not for ownership of the EA.",
  },
  {
    type: "section",
    title: "2. No Fund Handling",
    description: "We do not collect, hold, or manage client funds.",
  },
  {
    type: "item",
    text: "All trading is executed directly in the client’s own trading account.",
  },
  {
    type: "item",
    text: "Clients have full control over deposits, withdrawals, and account access at all times.",
  },
  {
    type: "section",
    title: "3. Profit Sharing Policy",
    description:
      "Profit-sharing (performance fee) is charged only on generated profits.",
  },
  {
    type: "item",
    text: "Once charged, profit-sharing fees are strictly non-refundable.",
  },
  {
    type: "item",
    text: "Fees are applicable regardless of future performance or market conditions.",
  },
  {
    type: "section",
    title: "4. Service Nature Disclaimer",
    description:
      "This is a technology/service offering, not an investment product or fund management service.",
  },
  {
    type: "item",
    text: "We do not guarantee profits, and past performance does not assure future results.",
  },
];

const RefundPolicy = () => {
  return (
    <section className={styles.refundWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Refund Policy</h1>

        <ul className={styles.policyList}>
          {policyPoints.map((point, index) => (
            <li key={`${point.type}-${index}`} className={styles.listItem}>
              {point.type === "section" ? (
                <div className={styles.sectionContent}>
                  <p className={styles.sectionTitle}>{point.title}</p>
                  <p className={styles.sectionDesc}>{point.description}</p>
                </div>
              ) : (
                <p className={styles.itemText}>{point.text}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RefundPolicy;
