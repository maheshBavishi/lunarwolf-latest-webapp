"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./contentSection.module.scss";
import ProfitSharing from "../profitSharing";
import BrokerageSharing from "../brokerageSharing";
// import { useSearchParams } from "next/navigation";

export default function ContentSection({ model }) {
  const [activeTab, setActiveTab] = useState("profit");
  // const searchParams = useSearchParams();
  // const model = searchParams.get("model");

  const tabs = [
    { id: "profit", label: "Profit Sharing" },
    { id: "brokerage", label: "Brokerage Sharing" },
  ];

  useEffect(() => {
    if (model) {
      setActiveTab(model);
    }
  }, [model]);
  const [showButtons, setShowButtons] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowButtons(entry.isIntersecting),
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className={styles.contentSection} ref={sectionRef}>
      <div className={styles.relative}>
        <div className={styles.tabCenter}>
          <div className={styles.tabGroup}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.tabLabel}>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabPill"
                    className={styles.activePill}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.contentArea}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {activeTab === "profit" && <ProfitSharing />}
              {activeTab === "brokerage" && <BrokerageSharing />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {showButtons && (
        <div className={styles.floatingNav}>
          <a
            className={styles.headwolfBtn}
            href="https://app.lunarwolf.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.labelDesktop}>Become a Headwolf</span>
            <span className={styles.labelMobile}>Join</span>
          </a>
        </div>
      )
      }
    </div>
  );
}
