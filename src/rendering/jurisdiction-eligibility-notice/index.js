import React from 'react';
import styles from "./jurisdiction-eligibility-notice.module.scss";

export default function JurisdictionEligibilityNotice() {
  return (
    <section className={styles.notice}>
      <div className={styles.container}>
        <h1 className={styles.title}>Jurisdiction & Eligibility Notice</h1>

        <p className={styles.introText}>
          Lunar Wolf provides EA software access and technical support. Users are solely responsible for confirming whether forex trading, automated trading, broker selection, deposits, withdrawals, and referral rewards are permitted under the laws and regulations of their country of residence.
        </p>
        
        <p className={styles.introText}>
          Indian residents should independently verify whether their forex activity, broker, trading platform, and remittance method are permitted under applicable Indian laws and RBI/FEMA guidelines before participating.
        </p>
      </div>
    </section>
  );
}
