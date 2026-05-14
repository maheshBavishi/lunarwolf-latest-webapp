"use client";
import React, { useState, useEffect } from "react";
import styles from "./referralNetwork.module.scss";
import { useRouter } from "next/navigation";

export default function ReferralNetwork() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setActiveIndex(0);
    }

    const interval = setInterval(() => {
      if (window.innerWidth <= 768) {
        setActiveIndex((prev) => (prev === 0 ? 1 : 0));
      } else {
        setActiveIndex(-1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.referralNetwork}>
      <div className="container">
        <div className={styles.title}>
          <h2>Earn More As your Referral Network Earns</h2>
          <p>
            At Lunar Wolf, our exclusive networking-based referral program lets you earn beyond your trading returns by building your own network.
            Choose from two earning options: Profit Sharing & IB Network to maximize your income.
          </p>
        </div>
        <div className={styles.grid}>
          <div
            className={`${styles.items} ${activeIndex === 0 ? styles.active : ""}`}
            onClick={() => router.push("/referral-program?model=profit")}
          >
            <p>Join Profit Sharing</p>
          </div>
          <div className={styles.line}></div>
          <div
            className={`${styles.items} ${activeIndex === 1 ? styles.active : ""}`}
            onClick={() => router.push("/referral-program?model=brokerage")}
          >
            <p>Become an IB Partner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
