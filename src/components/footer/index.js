import React from "react";
import styles from "./footer.module.scss";
import FacebookIcon from "@/icons/facebookIcon";
import InstagramIcon from "@/icons/instagramIcon";
import TwitterIcon from "@/icons/twitterIcon";
import YoutubeIcon from "@/icons/youtubeIcon";
import TelegramIcon from "@/icons/telegramIcon";
const LogoIcon = "/assets/logo/loader-logo.png";
const FooterWolf = "/assets/images/FooterWolf.webp";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWolf}>
        <img src={FooterWolf} alt="FooterWolf" />
      </div>
      <div className={styles.footerBox}>
        <div className={styles.footerAlignment}>
          <div className={styles.leftAlignment}>
            <div className={styles.logo}>
              <img src={LogoIcon} alt=" Lunar Wolf EA Logo" />
              <h2>LUNAR WOLF</h2>
            </div>
            <p>LUNAR WOLF provides algorithmic trading software designed to operate on supported broker environments.</p>
          </div>
          <div className={styles.rightAlignment}>
            <div>
              <h3>About</h3>
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Our EA", href: "/ourea" },
                { label: "Blog", href: "/blog" },
                {
                  label: "Profit Sharing Model",
                  href: "/referral-program?model=profit",
                },
                {
                  label: "Brokerage Sharing Model",
                  href: "/referral-program?model=brokerage",
                },
              ].map((item, index) => (
                <a href={item.href} rel="noopener noreferrer" key={index} aria-label={item.label}>
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <h3>Policies</h3>
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                {
                  label: "Terms & Conditions",
                  href: "/terms-and-conditions",
                },
                { label: "Disclaimer", href: "/disclaimer" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Jurisdiction & Eligibility Notice", href: "/jurisdiction-eligibility-notice" },
              ].map((item, index) => (
                <a href={item.href} rel="noopener noreferrer" key={index} aria-label={item.label}>
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <h3>Contact Us</h3>
              <a href="mailto:contact@lunarwolf.ai" aria-label="Contact Lunar Wolf via email">contact@lunarwolf.ai</a>
              <div className={styles.socialIconAlignment}>
                <a href="https://www.facebook.com/lunarwolfai" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/lunarwolf.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://x.com/Lunarwolf_ai" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <TwitterIcon />
                </a>
                <a href="https://www.youtube.com/@Lunarwolf_ai" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YoutubeIcon />
                </a>
                <a href="https://t.me/lunarwolfai" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyrightAlignment}>
          <p>EA Software Service Provider</p>
          <span>©2026 All Rights Reserved</span>
        </div>

      </div>
      <div className={styles.footerTextAlignment}>
        <h3>
          **Forex Risk Disclaimer**
        </h3>
        <p>
          Forex trading and automated trading involve substantial risk, including the possible loss of part or all of your invested capital. Due to market volatility, liquidity changes, price fluctuations, execution delays, and technical factors,
          trading results may vary significantly, and losses can occur.
        </p>
        <p>
          Lunar Wolf provides automated Forex EA software and technical support only. The software executes trades based on predefined strategies and user-configured settings. No automated system can eliminate market risk or guarantee profitable outcomes under
          all market conditions.
        </p>
        <p>
          Lunar Wolf does not hold, manage, control, deposit, withdraw, or custody client funds. All trading activities are conducted exclusively through user-controlled broker accounts, and users remain solely responsible for their trading decisions, account configuration, capital management, deposits, withdrawals, and compliance with their broker's terms
          and applicable regulations.
        </p>
        <p>
          The information provided on this website is for informational purposes only and should not be considered financial, investment, legal, or tax advice. Users should carefully evaluate the risks involved and seek independent professional advice if
          necessary before engaging in Forex or automated trading.
        </p>
        <p>
          Past performance, historical backtests, simulations, or live trading results are provided for transparency only and do not guarantee or predict future performance. By using Lunar Wolf EA, you acknowledge and accept the risks associated with
          Forex trading and automated execution.
        </p>
      </div>
    </footer>
  );
}
