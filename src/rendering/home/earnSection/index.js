"use client";
import React from "react";
import styles from "./earnSection.module.scss";
import { motion } from "framer-motion";
import RightIcon from "@/icons/rightIcon";
import LineAnimation from "@/components/lineAnimation";
import Link from "next/link";
const CownIcon = "/assets/images/cown.svg";
const WolfImage = "/assets/images/wolf3.png";
const WolfImage2 = "/assets/images/wolf-group.png";
const LineImage = "/assets/images/line.png";
const CownImage = "/assets/images/cown.svg";
const LineMobile = "/assets/images/line-mobile.png";
export default function EarnSection() {
  return (
    <div className={styles.earnSectionSection}>
      <div className={styles.mobileLine}>
        <img src={LineMobile} alt="LineMobile" />
      </div>
      <div className={styles.flexboxAlignment}>
        <div className={styles.textContainer}>
          <div className={styles.buttonstyle}>
            <button>
              <img src={CownIcon} alt="CownIcon" />
              <span>EURUSD-focused automated Forex EA</span>
            </button>
          </div>
          <h2>Growth Through EA Trading</h2>
          <div className={styles.detailsalignment}>
            <p>
              At Lunar Wolf EA, our objective is not to create unrealistic “high return” trading systems based
              on hype, aggressive overleveraging, or blind automation. It is to create long-term steady returns.

            </p>
          </div>
          <Link href="https://eauser.lunarwolf.ai/signup" target="_blank">
            <div className={styles.buttonDesign}>
              <button>
                Start EA Setup
                <RightIcon />
              </button>
            </div>
          </Link>
        </div>
        <div className={styles.imageAlignment}>
          <img src={WolfImage} alt="WolfImage" />
        </div>
        <div className={styles.lineAnimation}>
          <img src={LineImage} alt="LineImage" />
        </div>
      </div>
      <div className={styles.earnmoreAlignment}>
        <div className={styles.content}>
          <h2>
            Earn More As Your <br />
            Referral Network Earns
          </h2>
          <div className={styles.detailsalignment}>
            <p>
              Why trade alone when you can earn two ways? Lunar Wolf EA works for you 24/5 with tested
              automated strategies while helping you build a 5-level income network that can generate
              recurring commissions long after your referrals join.
            </p>
          </div>
        </div>
        <div className={styles.imageCenterAlignmet}>
          <img src={WolfImage2} alt="WolfImage2" />
          <div className={styles.textbox}>
            <p>
              Automated EURUSD Execution + Eligible Referral Rewards
            </p>
          </div>
          <div className={styles.cownAlignment}>
            <motion.img
              src={CownImage}
              alt="CownImage"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
