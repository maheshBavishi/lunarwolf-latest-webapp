"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const wolf1 = "/assets/images/wolf-1.webp";
const wolf2 = "/assets/images/wolf-2.webp";
const wolf3 = "/assets/images/wolf-3.webp";
import TopRightShadow from "@/assets/svgIcons/topRight";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const coinFlipVariants = {
    initial: {
      rotateY: 0,
      scale: 1,
    },
    animate: (index) => ({
      rotateY: [0, 180, 360, 540, 720, 900, 1080],
      scale: [1, 1.05, 0.95, 1.02, 1],
      transition: {
        duration: 12 + index * 2,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 2,
      },
    }),
  };

  const glowVariants = {
    initial: {
      scale: 1,
      opacity: 0.3,
      rotateZ: 0,
    },
    animate: (index) => ({
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      rotateZ: [0, 180, 360],
      transition: {
        duration: 4 + index * 0.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.5,
      },
    }),
  };

  const floatVariants = {
    initial: {
      y: 0,
      x: 0,
      rotateZ: 0,
      scale: 1,
    },
    animate: (index) => ({
      y: [-20, 20, -15, 15, -20],
      x: [-8, 8, -5, 5, -8],
      rotateZ: [-5, 5, -3, 3, -5],
      scale: [1, 1.05, 1, 1.03, 1],
      transition: {
        duration: 5 + index * 0.8,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
        delay: index * 0.9,
      },
    }),
  };

  const centerFloatVariants = {
    initial: {
      y: "-50%",
      x: "-50%",
      rotateZ: 0,
      scale: 1,
    },
    animate: {
      y: ["-54%", "-46%", "-52%", "-48%", "-54%"],
      x: ["-51%", "-49%", "-50.5%", "-49.5%", "-51%"],
      rotateZ: [-5, 5, -3, 3, -5],
      scale: [1, 1.05, 1, 1.03, 1],
      transition: {
        duration: 5 + 2 * 0.8,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
        delay: 2 * 0.9,
      },
    },
  };

  // Subtle coin edge shimmer animation
  const edgeShimmerVariants = {
    initial: {
      rotateZ: 0,
      opacity: 0.2,
    },
    animate: (index) => ({
      rotateZ: [0, 360],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 6 + index * 1,
        repeat: Infinity,
        ease: "linear",
        delay: index * 0.8,
      },
    }),
  };

  // Ring rotation animation
  const ringVariants = {
    initial: {
      rotateZ: 0,
      scale: 1,
    },
    animate: (index) => ({
      rotateZ: [0, 360],
      scale: [1, 1.05, 1],
      transition: {
        duration: 8 + index * 1.2,
        repeat: Infinity,
        ease: "linear",
        delay: index * 0.5,
      },
    }),
  };

  // Pulsing dots animation
  const dotsVariants = {
    initial: {
      scale: 1,
      opacity: 0.8,
    },
    animate: (index) => ({
      scale: [1, 1.5, 1],
      opacity: [0.8, 1, 0.6, 0.8],
      transition: {
        duration: 2 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.1,
      },
    }),
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dominate the
              <br />
              Network,
              <br />
              Claim Your
              <br />
              Rewards
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stop leaving money on the table. Build your pack, expand your
              reach, and let the profits flow. The deeper your network, the
              greater your earning power.
            </motion.p>
          </motion.div>

          {/* Right Side - Animated Wolf Emblems */}
          <motion.div
            className={styles.emblemContainer}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Top Right - Large Emblem */}
            <motion.div
              className={`${styles.emblem} ${styles.emblemLarge}`}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              custom={0}
            >
              <motion.div
                className={styles.coin}
                variants={coinFlipVariants}
                initial="initial"
                animate="animate"
                custom={0}
              >
                {/* Coin Edge Shimmer */}
                <motion.div
                  className={styles.coinEdge}
                  variants={edgeShimmerVariants}
                  initial="initial"
                  animate="animate"
                  custom={0}
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(255, 215, 0, 0.6), transparent, rgba(255, 215, 0, 0.6), transparent)",
                  }}
                ></motion.div>

                {/* Outer Glow Ring */}
                <motion.div
                  className={styles.outerGlow}
                  style={{
                    inset: "-4px",
                    background:
                      "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(34, 211, 238, 0.15), rgba(59, 130, 246, 0.1))",
                  }}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={0}
                ></motion.div>

                {/* Metallic Ring */}
                <motion.div
                  className={styles.metallicRing}
                  variants={ringVariants}
                  initial="initial"
                  animate="animate"
                  custom={0}
                  style={{
                    boxShadow:
                      "inset 0 0 10px rgba(0,0,0,0.3), 0 0 15px rgba(83, 177, 217, 0.2), inset 0 0 2px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className={styles.compassV}></div>
                  <div className={styles.compassH}></div>
                </motion.div>

                {/* Blue Glow Circle */}
                <motion.div
                  className={styles.blueGlow}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={0}
                  style={{
                    boxShadow:
                      "inset 0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)",
                  }}
                ></motion.div>

                {/* Inner glow layer */}
                <motion.div
                  className={styles.innerGlow}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={0}
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 50%), linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.4))",
                  }}
                ></motion.div>

                {/* Coin Front Side */}
                <motion.div
                  className={styles.coinFace}
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "calc(100% - 2rem)",
                    height: "calc(100% - 2rem)",
                    transform: "translate(-50%, -50%) translateZ(10px)",
                    boxShadow:
                      "inset 0 0 15px rgba(0,0,0,0.2), inset 0 0 3px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Image
                    src={wolf1}
                    alt="Wolf Front"
                    fill
                    className="object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1) saturate(1.2)",
                      transform: "scale(1.05)",
                    }}
                  />
                </motion.div>

                {/* Coin Back Side */}
                <motion.div
                  className={styles.coinFace}
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "calc(100% - 2rem)",
                    height: "calc(100% - 2rem)",
                    transform:
                      "translate(-50%, -50%) translateZ(-10px) rotateY(180deg)",
                    boxShadow:
                      "inset 0 0 15px rgba(0,0,0,0.2), inset 0 0 3px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Image
                    src={wolf2}
                    alt="Wolf Back"
                    fill
                    className="object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1) saturate(1.2)",
                      transform: "scale(1.05)",
                    }}
                  />
                </motion.div>

                {/* Coin shine highlight */}
                <motion.div
                  className={styles.shine}
                  style={{
                    inset: "1rem", // inset-4
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)",
                    transform: "translateZ(15px)",
                  }}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={0}
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Mid-Top Left - Medium Emblem */}
            <motion.div
              className={`${styles.emblem} ${styles.emblemMidTopLeft}`}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              custom={1}
            >
              <motion.div
                className={styles.coin}
                variants={coinFlipVariants}
                initial="initial"
                animate="animate"
                custom={1}
              >
                {/* Coin Edge Shimmer */}
                <motion.div
                  className={styles.coinEdge}
                  variants={edgeShimmerVariants}
                  initial="initial"
                  animate="animate"
                  custom={1}
                  style={{
                    inset: "-1px",
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(255, 215, 0, 0.6), transparent, rgba(255, 215, 0, 0.6), transparent)",
                  }}
                ></motion.div>

                {/* Outer Glow Ring */}
                <motion.div
                  className={styles.outerGlow}
                  style={{
                    inset: "-6px",
                    background:
                      "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.3), rgba(59, 130, 246, 0.2))",
                  }}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={1}
                ></motion.div>

                {/* Metallic Ring */}
                <motion.div
                  className={styles.metallicRing}
                  variants={ringVariants}
                  initial="initial"
                  animate="animate"
                  custom={1}
                  style={{
                    borderWidth: "3px",
                    boxShadow:
                      "inset 0 0 15px rgba(0,0,0,0.5), 0 0 25px rgba(83, 177, 217, 0.3), inset 0 0 3px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={styles.dot}
                      variants={dotsVariants}
                      initial="initial"
                      animate="animate"
                      custom={i}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-40px)`,
                        boxShadow:
                          "0 0 10px rgba(59, 130, 246, 0.6), 0 0 5px rgba(255, 255, 255, 0.3)",
                      }}
                    ></motion.div>
                  ))}
                </motion.div>

                {/* Blue Glow Circle */}
                <motion.div
                  className={styles.blueGlow}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={1}
                  style={{
                    opacity: 0.6,
                    boxShadow:
                      "inset 0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)",
                  }}
                ></motion.div>

                {/* Inner glow layer */}
                <motion.div
                  className={styles.innerGlow}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={1}
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 50%), linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.4))",
                  }}
                ></motion.div>

                {/* Coin Front Side */}
                <motion.div
                  className={styles.coinFace}
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "calc(100% - 1.5rem)",
                    height: "calc(100% - 1.5rem)",
                    transform: "translate(-50%, -50%) translateZ(8px)",
                    boxShadow:
                      "inset 0 0 15px rgba(0,0,0,0.3), inset 0 0 3px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Image
                    src={wolf2}
                    alt="Wolf Front"
                    fill
                    className="object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1) saturate(1.2)",
                      transform: "scale(1.05)",
                    }}
                  />
                </motion.div>

                {/* Coin Back Side */}
                <motion.div
                  className={styles.coinFace}
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "calc(100% - 1.5rem)",
                    height: "calc(100% - 1.5rem)",
                    transform:
                      "translate(-50%, -50%) translateZ(-8px) rotateY(180deg)",
                    boxShadow:
                      "inset 0 0 15px rgba(0,0,0,0.3), inset 0 0 3px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Image
                    src={wolf3}
                    alt="Wolf Back"
                    fill
                    className="object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1) saturate(1.2)",
                      transform: "scale(1.05)",
                    }}
                  />
                </motion.div>

                {/* Coin shine highlight */}
                <motion.div
                  className={styles.shine}
                  style={{
                    inset: "0.75rem", // inset-3
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)",
                    transform: "translateZ(12px)",
                  }}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={1}
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Mid-Center - Medium Emblem */}
            <motion.div
              className={`${styles.emblem} ${styles.emblemMidCenter}`}
              variants={centerFloatVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className={styles.coin}
                variants={coinFlipVariants}
                initial="initial"
                animate="animate"
                custom={2}
              >
                {/* Coin Edge Shimmer */}
                <motion.div
                  className={styles.coinEdge}
                  variants={edgeShimmerVariants}
                  initial="initial"
                  animate="animate"
                  custom={2}
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(255, 215, 0, 0.6), transparent, rgba(255, 215, 0, 0.6), transparent)",
                  }}
                ></motion.div>

                {/* Outer Glow Ring */}
                <motion.div
                  className={styles.outerGlow}
                  style={{
                    inset: "-8px",
                    background:
                      "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.3), rgba(59, 130, 246, 0.2))",
                  }}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={2}
                ></motion.div>

                {/* Metallic Ring */}
                <motion.div
                  className={styles.metallicRing}
                  variants={ringVariants}
                  initial="initial"
                  animate="animate"
                  custom={2}
                  style={{
                    borderWidth: "4px",
                    boxShadow:
                      "inset 0 0 20px rgba(0,0,0,0.5), 0 0 30px rgba(83, 177, 217, 0.3)",
                  }}
                >
                  <div className={styles.compassV}></div>
                  <div className={styles.compassH}></div>
                </motion.div>

                {/* Blue Glow Circle */}
                <motion.div
                  className={styles.blueGlow}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={2}
                  style={{
                    opacity: 0.6,
                    boxShadow:
                      "inset 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
                  }}
                ></motion.div>

                {/* Inner glow layer */}
                <motion.div
                  className={styles.innerGlow}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={2}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.4))",
                  }}
                ></motion.div>

                {/* Coin Front Side */}
                <motion.div
                  className={styles.coinFace}
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "calc(100% - 1.5rem)",
                    height: "calc(100% - 1.5rem)",
                    transform: "translate(-50%, -50%) translateZ(10px)",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src={wolf3}
                    alt="Wolf Front"
                    fill
                    className="object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1) saturate(1.2)",
                    }}
                  />
                </motion.div>

                {/* Coin Back Side */}
                <motion.div
                  className={styles.coinFace}
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "calc(100% - 1.5rem)",
                    height: "calc(100% - 1.5rem)",
                    transform:
                      "translate(-50%, -50%) translateZ(-10px) rotateY(180deg)",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src={wolf1}
                    alt="Wolf Back"
                    fill
                    className="object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1) saturate(1.2)",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Left - Small Emblem */}
            <motion.div
              className={`${styles.emblem} ${styles.emblemBottomLeft}`}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              custom={3}
            >
              <motion.div
                className={styles.coin}
                variants={coinFlipVariants}
                initial="initial"
                animate="animate"
                custom={3}
              >
                {/* Outer Glow Ring */}
                <motion.div
                  className={styles.outerGlow}
                  style={{
                    inset: "-4px",
                    background:
                      "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.3), rgba(59, 130, 246, 0.2))",
                  }}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={3}
                ></motion.div>

                {/* Metallic Ring */}
                <motion.div
                  className={styles.metallicRing}
                  variants={ringVariants}
                  initial="initial"
                  animate="animate"
                  custom={3}
                  style={{
                    borderWidth: "3px",
                    boxShadow:
                      "inset 0 0 12px rgba(0,0,0,0.5), 0 0 20px rgba(83, 177, 217, 0.3)",
                  }}
                >
                  <div
                    className={styles.compassV}
                    style={{ height: "1.5rem", width: "0.25rem" }}
                  ></div>
                  <div
                    className={styles.compassH}
                    style={{ height: "0.25rem", width: "1.5rem" }}
                  ></div>
                </motion.div>

                {/* Blue Glow Circle */}
                <motion.div
                  className={styles.blueGlow}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={3}
                  style={{
                    opacity: 0.6,
                    boxShadow:
                      "inset 0 0 12px rgba(59, 130, 246, 0.5), 0 0 25px rgba(59, 130, 246, 0.3)",
                  }}
                ></motion.div>

                {/* Inner glow layer */}
                <motion.div
                  className={styles.innerGlow}
                  style={{
                    inset: "0.5rem",
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.4))",
                  }}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={3}
                ></motion.div>

                {/* Coin Front Side */}
                <motion.div
                  className={styles.coinFace}
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "calc(100% - 1rem)",
                    height: "calc(100% - 1rem)",
                    transform: "translate(-50%, -50%) translateZ(6px)",
                    boxShadow: "inset 0 0 12px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src={wolf1}
                    alt="Wolf Front"
                    fill
                    className="object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1) saturate(1.2)",
                    }}
                  />
                </motion.div>

                {/* Coin Back Side */}
                <motion.div
                  className={styles.coinFace}
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "calc(100% - 1rem)",
                    height: "calc(100% - 1rem)",
                    transform:
                      "translate(-50%, -50%) translateZ(-6px) rotateY(180deg)",
                    boxShadow: "inset 0 0 12px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src={wolf2}
                    alt="Wolf Back"
                    fill
                    className="object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1) saturate(1.2)",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Right - Medium Emblem */}
            <motion.div
              className={`${styles.emblem} ${styles.emblemBottomRight}`}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              custom={4}
            >
              <motion.div
                className={styles.coin}
                variants={coinFlipVariants}
                initial="initial"
                animate="animate"
                custom={4}
              >
                {/* Outer Glow Ring */}
                <motion.div
                  className={styles.outerGlow}
                  style={{
                    inset: "-6px",
                    background:
                      "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.3), rgba(59, 130, 246, 0.2))",
                  }}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={4}
                ></motion.div>

                {/* Metallic Ring */}
                <motion.div
                  className={styles.metallicRing}
                  variants={ringVariants}
                  initial="initial"
                  animate="animate"
                  custom={4}
                  style={{
                    borderWidth: "3px",
                    boxShadow:
                      "inset 0 0 15px rgba(0,0,0,0.5), 0 0 25px rgba(83, 177, 217, 0.3)",
                  }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={styles.dot}
                      variants={dotsVariants}
                      initial="initial"
                      animate="animate"
                      custom={i}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-35px)`,
                        boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)",
                      }}
                    ></motion.div>
                  ))}
                </motion.div>

                {/* Blue Glow Circle */}
                <motion.div
                  className={styles.blueGlow}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={4}
                  style={{
                    opacity: 0.6,
                    boxShadow:
                      "inset 0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)",
                  }}
                ></motion.div>

                {/* Inner glow layer */}
                <motion.div
                  className={styles.innerGlow}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.4))",
                  }}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  custom={4}
                ></motion.div>

                {/* Coin Front Side */}
                <motion.div
                  className={styles.coinFace}
                  style={{
                    inset: "0.75rem", // inset-3
                    transform: "translateZ(8px)",
                    boxShadow: "inset 0 0 15px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src={wolf2}
                    alt="Wolf Front"
                    fill
                    className="object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1) saturate(1.2)",
                    }}
                  />
                </motion.div>

                {/* Coin Back Side */}
                <motion.div
                  className={styles.coinFace}
                  style={{
                    inset: "0.75rem", // inset-3
                    transform: "translateZ(-8px) rotateY(180deg)",
                    boxShadow: "inset 0 0 15px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src={wolf3}
                    alt="Wolf Back"
                    fill
                    className="object-cover"
                    style={{
                      filter: "contrast(1.1) brightness(1.1) saturate(1.2)",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
