'use client'
import React from "react";
import styles from "./automatedProfit.module.scss";
import Link from "next/link";
const Dollar = "/assets/images/dollar.webp";
export default function AutomatedProfit() {
  return (
    <div className={styles.automatedProfit}>
      <div className={styles.box}>
        <h2>Ready to Start with Lunar Wolf EA?</h2>
        <div className={styles.buttonCenter}>
          <Link href="https://eauser.lunarwolf.ai/signup" target="_blank">
            <button>Get Started Today</button>
          </Link>
        </div>
        <div className={styles.iconTopAlignment}>
          <img src={Dollar} alt="Dollar" />
        </div>
      </div>
    </div>
  );
}
