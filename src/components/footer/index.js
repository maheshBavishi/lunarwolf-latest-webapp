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
              <img src={LogoIcon} alt="LogoIcon" />
              <h2>LUNAR WOLF</h2>
            </div>
            <p>With Lunar Wolf’s EA-Powered support, you don’t just trade, you hunt for profits with strategy, speed, and a pack-driven advantage.</p>
          </div>
          <div className={styles.rightAlignment}>
            <div>
              <h3>About</h3>
              {[
                { label: "About Us", href: "/about-us" },
                {
                  label: "Profit Sharing Model",
                  href: "/referral-program?model=profit",
                },
                {
                  label: "Brokerage Sharing Model",
                  href: "/referral-program?model=brokerage",
                },
              ].map((item, index) => (
                <a href={item.href} rel="noopener noreferrer" key={index}>
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
              ].map((item, index) => (
                <a href={item.href} rel="noopener noreferrer" key={index}>
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <h3>Contact Us</h3>
              <a href="mailto:contact@lunarwolf.com">contact@lunarwolf.com</a>
            </div>
          </div>
        </div>
        <div className={styles.copyrightAlignment}>
          <p>EA Software Service Provider</p>
          <span>©2026 All Rights Reserved</span>
        </div>
        <div className={styles.socialIconAlignment}>
          <a href="https://www.facebook.com/lunarwolfai" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/lunarwolf.ai/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://x.com/Lunarwolf_ai" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.youtube.com/@Lunarwolf_ai" target="_blank" rel="noopener noreferrer">
            <YoutubeIcon />
          </a>
          <a href="https://t.me/lunarwolfai" target="_blank" rel="noopener noreferrer">
            <TelegramIcon />
          </a>
        </div>
      </div>
      <div className={styles.footerTextAlignment}>
        <p>
          Forex trading involves substantial risk, and it is important to recognize that even experienced traders may face significant losses. Studies
          suggest that 85%–95% of manual traders lose their entire capital. Engaging in Forex trading—whether manually or through an automated
          system—requires a thorough understanding of the risks involved.
        </p>
        <p>
          Our automated trading solution is designed to optimize strategies and enhance trading efficiency, but it does not eliminate the inherent
          risks of the Forex market. Market volatility, execution delays, liquidity fluctuations, and technical failures can all lead to unexpected
          losses. While our system employs risk management strategies, there are no guarantees of consistent profits, and it is possible to lose your
          entire investment.
        </p>
        <p>
          By using this trading system, you acknowledge and accept that trades are executed automatically based on pre-set parameters, which may
          become less effective due to unpredictable market changes. The platform does not provide personalized financial advice, and all trading
          decisions are made at your own discretion and risk. The platform is not liable for any resulting financial losses.
        </p>
        <p>
          Forex trading may not be suitable for all investors. Only trade with funds you can afford to lose, and seek independent financial advice if
          you are uncertain about engaging in automated trading. Past performance does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}
