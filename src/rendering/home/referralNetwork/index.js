"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./referralNetwork.module.scss";

const ReferralNetwork = () => {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const handleRedirect = (Path) => {
    router.push(Path);
  };

  return (
    <section className={styles.container}>
      <div className={styles.bgImage}>
        <Image src="/assets/images/pricing-hover-effect.png" alt="bg" fill style={{ objectFit: 'cover' }} />
      </div>

      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>
          Earn More As your Referral Network Earns
        </h1>
        <p className={styles.description}>
          Build. Share. Earn.
          Get the best from your network with Lunar Wolf EA. Choose from the below earning
          options to participate in our exclusive reward streams.

        </p>

        <div className={styles.cardsContainer}>
          {tooltip.visible && typeof window !== "undefined"
            ? createPortal(
              <div
                className={styles.tooltip}
                style={{
                  left: tooltip.x + 20,
                  top: tooltip.y + 20,
                  opacity: tooltip.visible ? 1 : 0,
                }}
              >
                Click Here
              </div>,
              document.body
            )
            : null}

          {/* Left Option */}
          <div
            className={`${styles.card} ${styles.leftCard} ${isMobile && activeCard === 0 ? styles.active : ""}`}
            onMouseMove={(e) => setTooltip({ visible: true, x: e.clientX, y: e.clientY })}
            onMouseEnter={() => setTooltip((t) => ({ ...t, visible: true }))}
            onMouseLeave={() => setTooltip((t) => ({ ...t, visible: false }))}
            onClick={() => handleRedirect("/referral-program?model=profit")}
          >
            <div className={styles.blackOverlayBottom} />
            <div className={styles.blackOverlayTop} />
            <span>Join Profit Sharing</span>
          </div>

          <div className={styles.divider} />

          {/* Right Option */}
          <div
            className={`${styles.card} ${styles.rightCard} ${isMobile && activeCard === 1 ? styles.active : ""}`}
            onMouseMove={(e) => setTooltip({ visible: true, x: e.clientX, y: e.clientY })}
            onMouseEnter={() => setTooltip((t) => ({ ...t, visible: true }))}
            onMouseLeave={() => setTooltip((t) => ({ ...t, visible: false }))}
            onClick={() => handleRedirect("/referral-program?model=brokerage")}
          >
            <div className={styles.blackOverlayBottom} />
            <div className={styles.blackOverlayTop} />
            <span>Become an IB Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralNetwork;
