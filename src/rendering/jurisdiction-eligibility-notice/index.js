import React from 'react';
import styles from "./jurisdiction-eligibility-notice.module.scss";

export default function JurisdictionEligibilityNotice() {
  return (
    <section className={styles.notice}>
      <div className={styles.container}>
        <h1 className={styles.title}>Jurisdiction & Eligibility Notice</h1>

        <p className={styles.introText}>
          Lunar Wolf EA is an automated Forex EA software service. Availability of Lunar Wolf EA, broker access, automated trading, referral rewards, and IB-sharing features may vary by country, broker, regulation, and user eligibility.
        </p>

        <p className={styles.introText}>
          Users are solely responsible for confirming whether forex trading, automated trading, broker selection, deposits, withdrawals, referral rewards, and IB-sharing participation are permitted under the laws and regulations of their country of residence.
        </p>

        <p className={styles.introText}>
          Lunar Wolf does not provide legal, tax, investment, regulatory, or financial advice. Users should consult qualified professionals where required.
        </p>

        <h2 className={styles.subTitle}>Restricted or Limited Jurisdictions</h2>

        <p className={styles.introText}>
          Lunar Wolf services should not be used in any jurisdiction where forex trading, CFD trading, automated trading, referral rewards, IB arrangements, or offshore broker participation are prohibited or restricted by local law.
        </p>

        <p className={styles.introText}>
          Users from jurisdictions subject to sanctions, financial restrictions, or regulatory limitations may be restricted from using Lunar Wolf services. Sanctions and eligibility requirements can change without notice.
        </p>

        <p className={styles.introText}>
          <strong>United States:</strong><br />
          Retail forex and related services are subject to strict regulatory requirements. Users located in the United States should independently confirm whether their broker, platform, and trading activity are permitted under applicable CFTC/NFA rules.
        </p>

        <p className={styles.introText}>
          <strong>United Kingdom and European Union:</strong><br />
          Retail CFD/forex products may be subject to leverage limits, risk warnings, marketing restrictions, and other regulatory protections. Users should confirm whether their broker and trading activity comply with applicable FCA, ESMA, or local regulatory rules.
        </p>

        <p className={styles.introText}>
          <strong>India:</strong><br />
          Indian residents should independently verify whether their forex activity, broker, trading platform, remittance method, and electronic trading platform are permitted under applicable RBI/FEMA rules before participating.
        </p>

        <p className={styles.introText}>
          <strong>Other Countries:</strong><br />
          Users in any country where forex trading, automated trading, offshore broker access, or referral/IB rewards are restricted should not use Lunar Wolf unless they have confirmed that participation is lawful.
        </p>

        <p className={styles.introText}>
          Lunar Wolf may refuse, restrict, suspend, or terminate access where required by law, broker policy, internal risk controls, or compliance considerations.
        </p>
      </div>
    </section>
  );
}
