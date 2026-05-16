"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./chooseBroker.module.scss";
import Link from "next/link";
const Multibankgroup = "/assets/images/multibankgroup.svg";
const GtcIcon = "/assets/images/gtc.png";
const StartraderIcon = "/assets/images/startrader1.svg";
const EcIcon = "/assets/images/ec-market.png";
const TcorpIcon = "/assets/images/vt.webp";
const TmgmIcon = "/assets/images/tmgm.png";
const UltimaIcon = "/assets/images/ulti-market.svg";
const SecurefxIcon = "/assets/images/securefx.png";

const brokerData = [
  {
    icon: Multibankgroup,
    alt: "Multibankgroup",
    buttonText: "Open Account with Multibank",
    topButtonLink: "/documents/MultiBank_SwapFree_Guide.pdf",
    link: "https://multibankfx.com/account/live-account/?type=trader&IBCode=8899349&CampaignName=8899349&BannerID=1357&OfferID=1235",
  },
  {
    icon: GtcIcon,
    alt: "GtcIcon",
    buttonText: "Open Account with GTC",
    link: "https://web.mygtc.app/login/register?ref=130025118",

    topButtonLink: "/documents/GTCFX_SwapFree_Guide.pdf",
  },
  {
    icon: EcIcon,
    alt: "EcIcon",
    buttonText: "Open Account with EC",
    link: "https://i.ecmarkets.com/api/client/pm/2/Z6W4D",

    topButtonLink: "/documents/ECMarkets_SwapFree_Guide.pdf",
  },
  {
    icon: StartraderIcon,
    alt: "StartraderIcon",
    buttonText: "Open Account with Star Trader",
    link: "https://www.startrader.com/live-account/?affid=MTcwOTg5Njk=&ibpRebateCode=MTcwOTg5NjlTVDEwMDc2",
  },
  {
    icon: TcorpIcon,
    alt: "TcorpIcon",
    buttonText: "Open Account with VT",
    link: "https://vtm.pro/MJ3YVf",
  },
  {
    icon: TmgmIcon,
    alt: "TmgmIcon",
    buttonText: "Open Account with TMGM",
    link: "#",
    comingSoon: true,
  },
  {
    icon: UltimaIcon,
    alt: "UltimaIcon",
    buttonText: "Open Account with Ultima",
    link: "#",
    comingSoon: true,
  },
  {
    icon: SecurefxIcon,
    alt: "SecurefxIcon",
    buttonText: "Open Account with Securefx",
    link: "#",
    comingSoon: true,
  },
];
export default function ChooseBroker() {
  return (
    <div className={styles.chooseBroker}>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          className={styles.title}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <h2>Choose Your Broker</h2>
          <p>Select a trusted broker to power your automated trades.</p>
        </motion.div>
        <motion.div
          className={styles.grid}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {brokerData.map((broker, index) => {
            return (
              <motion.div
                className={`${styles.items} ${broker.comingSoon ? styles.disabled : ""}`}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                {broker.comingSoon && (
                  <div className={styles.comingSoonOverlay}>
                    <span>Coming Soon</span>
                  </div>
                )}
                <div className={styles.image}>
                  <img src={broker.icon} alt={broker.alt} />
                </div>
                <Link href={broker.link} target={broker.comingSoon ? "_self" : "_blank"} className={broker.comingSoon ? styles.disabledLink : ""}>
                  <div className={styles.details}>
                    <button disabled={broker.comingSoon}>
                      {broker.buttonText}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4.66666 4.6665H11.3333V11.3332" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.66666 11.3332L11.3333 4.6665" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

