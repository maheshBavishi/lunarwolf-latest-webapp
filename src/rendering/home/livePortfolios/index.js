"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./livePortfolios.module.scss";
import Link from "next/link";
const DollorSign = "/assets/images/dollor-sign.webp";
const RobotName = "/assets/images/RobotName.svg";
const Platform = "/assets/images/Platform.svg";
const Server = "/assets/images/Server.svg";
const Myfxbook = "/assets/images/myfxbook.png";
const LeftImage = "/assets/images/leftImage.png";
const RightImage = "/assets/images/rightImage.png";
export default function LivePortfolios() {
  const accounts = [
    {
      accountNo: "500186",
      robotName: "Lunarwolf EA - EUR/USD",
      platform: "MT5",
      server: "MultiBank-Server",
      fxBookUrl: "https://www.myfxbook.com/members/LunarWolfEA/lunar-wolf-ea/11998177",
      image: LeftImage,
    },
    {
      accountNo: "500183",
      robotName: "Lunarwolf EA - EUR/USD",
      platform: "MT5",
      server: "VT Markets-Server",
      fxBookUrl: "https://www.myfxbook.com/members/LunarWolfEA/lunarwolf-ea/11998223",
      image: RightImage,
    },
  ];
  return (
    <div className={styles.livePortfolios}>
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
          className={styles.headerAlignment}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <img src={DollorSign} alt="DollorSign" />
          <div>
            <h2>Watch Live Portfolios Make Real Profits</h2>
            <p>
              Watch Lunar Wolf analyze, execute, and dominate the forex market in real time. Follow active trades, proven strategies, and real profits
              as they happen.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.grid}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {accounts.map((account, index) => {
            return (
              <motion.div
                className={styles.items}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                <div className={styles.cardheader}>
                  <div className={styles.contentAlignment}>
                    <div className={styles.line}></div>
                    <div>
                      <div className={styles.icontext}>
                        <img src={RobotName} alt="RobotName" />
                        <span>Robot Name</span>
                      </div>
                      <p>{account.robotName}</p>
                    </div>
                  </div>
                  <div className={styles.contentAlignment}>
                    <div className={styles.line}></div>
                    <div>
                      <div className={styles.icontext}>
                        <img src={Platform} alt="Platform" />
                        <span>Platform</span>
                      </div>
                      <p>{account.platform}</p>
                    </div>
                  </div>
                  <div className={styles.contentAlignment}>
                    <div className={styles.line}></div>
                    <div>
                      <div className={styles.icontext}>
                        <img src={Server} alt="Server" />
                        <span>Server</span>
                      </div>
                      <p>{account.server}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.imagegrid}>
                  <img src={Myfxbook} alt="Myfxbook" />
                  <div className={styles.line}></div>
                </div>
                <div className={styles.image}>
                  <img src={account.image} alt="AccountImage" />
                </div>
                <div className={styles.buttonCenterAlignment}>
                  <Link href={account.fxBookUrl} target="_blank" rel="noopener noreferrer">
                    <button>View Verified Results on Myfxbook</button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
