import React from "react";
import styles from "./privacyPolicy.module.scss";

const policyPoints = [
  {
    type: "section",
    title: "Information We Collect",
    description: "We may collect the following information from users:",
  },
  { type: "item", text: "Name" },
  { type: "item", text: "Email address" },
  { type: "item", text: "Phone number" },
  { type: "item", text: "Trading account information" },
  {
    type: "item",
    text: "Any other information voluntarily provided through forms on the website.",
  },
  {
    type: "section",
    title: "How We Use Your Information",
    description: "The information we collect may be used for:",
  },
  { type: "item", text: "Providing our trading or investment services" },
  { type: "item", text: "Contacting users regarding their inquiries" },
  {
    type: "item",
    text: "Improving website functionality and user experience",
  },
  { type: "item", text: "Compliance with legal obligations." },
  {
    type: "section",
    title: "Data Protection",
    description:
      "We take reasonable steps to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.",
  },
  {
    type: "section",
    title: "Sharing of Information",
    description:
      "We do not sell or rent your personal information. Your information may only be shared with trusted partners or service providers when necessary to operate our services.",
  },
  {
    type: "section",
    title: "Cookies",
    description:
      "Our website may use cookies to improve the user experience and analyze website traffic.",
  },
  {
    type: "section",
    title: "Third-Party Links",
    description:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.",
  },
  {
    type: "section",
    title: "Changes to This Policy",
    description:
      "We may update this Privacy Policy at any time. Updated versions will be posted on this page.",
  },
  {
    type: "section",
    title: "Contact",
    description:
      "If you have any questions regarding this Privacy Policy, please contact us through the website contact form.",
  },
];

const PrivacyPolicy = () => {
  return (
    <section className={styles.privacyPolicy}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>

        {/* <p className={styles.effectiveDate}>
            Effective Date: __________
          </p> */}

        <p className={styles.introText}>
          This Privacy Policy describes how Lunar Wolf ("we", "our", or "us")
          collects, uses, and protects your information when you visit our
          website or use our services.
        </p>

        <ul className={styles.policyList}>
          {policyPoints.map((point, index) => (
            <li key={`${point.type}-${index}`}>
              {point.type === "section" ? (
                <>
                  <p className={styles.sectionTitle}>{point.title}</p>
                  <p className={styles.sectionDesc}>{point.description}</p>
                </>
              ) : (
                <p>{point.text}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
