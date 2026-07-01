import React from "react";
import styles from "./refundPolicy.module.scss";

const policies = [
  {
    title: "1. REFUND POLICY",
    items: [
      "Lunar Wolf EA is not sold as a product, but provided as a service/access to a trading system.",
      "Once access to the EA is granted, no refunds will be issued under any circumstances.",
      "Fees (if any) are charged for technology access, setup, and strategy usage, not for ownership of the EA."
    ]
  },
  {
    title: "2. NO FUND HANDLING",
    items: [
      "We do not collect, hold, or manage client funds.",
      "All trading is executed directly in the client’s own trading account.",
      "Clients have full control over deposits, withdrawals, and account access at all times."
    ]
  },
  {
    title: "3. PROFIT SHARING POLICY",
    items: [
      "Profit-sharing (performance fee) is charged only on generated profits.",
      "Once a performance fee has been charged on eligible net profits for a completed settlement period, it is non-refundable regardless of future trading performance or market conditions.",
    ]
  },
  {
    title: "4. SERVICE NATURE DISCLAIMER",
    items: [
      "This is a technology/service offering, not an investment product or fund management service.",
      "We do not guarantee profits, and past performance does not assure future results."
    ]
  }
];

const RefundPolicy = () => {
  return (
    <section className={styles.refundWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Refund Policy</h1>

        <div className={styles.policyList}>
          {policies.map((policy, index) => (
            <div key={index} className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>{policy.title}</h2>
              <ul className={styles.itemList}>
                {policy.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
