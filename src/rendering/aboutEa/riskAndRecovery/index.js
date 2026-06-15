'use client'
import React from 'react'
import styles from './riskAndRecovery.module.scss';
import { motion } from 'framer-motion';
import RoundLineAnimation from '@/icons/roundLineAnimation';

const RoundedLine = '/assets/icons/rounded-line.svg';
const FillLogo = '/assets/icons/fill-logo.svg';
const RoundImage = '/assets/images/bg-top-round.png';

// ── Variants ───────────────────────────────────────────────────────────────

const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.16, delayChildren: 0.05 } },
}

const fadeSlideRight = {
    hidden: { opacity: 0, x: -48, filter: 'blur(8px)' },
    visible: {
        opacity: 1, x: 0, filter: 'blur(0px)',
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
}

const fadeSlideUp = {
    hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
}

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1, x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
    }),
}

const riskBoxVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
}

const listItems1 = [
    'Controlled Exposure Management',
    'Volatility-Aware Execution',
    'Adaptive Recovery Logic',
    'Drawdown-Aware Operational Controls',
]
const listItems2 = [
    'Structured Position Scaling',
    'Capital Preservation Focus',
    'Long-Term Operational Stability',
]

// ── Component ──────────────────────────────────────────────────────────────

export default function RiskAndRecovery() {
    return (
        <div className={styles.riskAndRecovery}>
            <motion.div
                className={styles.topAlignment}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
            >
                {/* <img src={RoundImage} alt='RoundImage' /> */}
            </motion.div>
            <div className='container'>
                <div className={styles.grid}>

                    {/* ── Left: Animated diagram ── */}
                    <div className={styles.items}>
                        <motion.div
                            className={styles.relativeDiv}
                            initial={{ opacity: 0, scale: 0.88 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Outer ring — slow CW spin */}
                            <motion.div
                                className={styles.image}

                            >
                                <RoundLineAnimation />
                                {/* <img src={RoundedLine} alt='RoundedLine' /> */}
                            </motion.div>

                            {/* Glow pulse behind center circle */}
                            <motion.div
                                className={styles.glowRing}
                                animate={{
                                    scale: [1, 1.22, 1],
                                    opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                            />

                            {/* Center circle — box-shadow breathe */}
                            <motion.div
                                className={styles.roundeCenter}
                                animate={{
                                    boxShadow: [
                                        '0 0 12px 0 rgba(107,197,224,0.80) inset, 0 0 0px rgba(107,197,224,0)',
                                        '0 0 32px 8px rgba(107,197,224,0.95) inset, 0 0 28px rgba(56,189,248,0.4)',
                                        '0 0 12px 0 rgba(107,197,224,0.80) inset, 0 0 0px rgba(107,197,224,0)',
                                    ],
                                }}
                                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                {/* Logo — rock + scale pulse */}
                                <motion.img
                                    src={FillLogo}
                                    alt='FillLogo'
                                    animate={{
                                        rotate: [0, 7, 0, -7, 0],
                                        scale: [1, 1.1, 1, 1.1, 1],
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ── Right: Text content — staggered reveal ── */}
                    <div className={styles.items}>
                        <motion.div
                            className={styles.contentStyle}
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.h3 variants={fadeSlideRight}>
                                Risk &amp; Recovery Framework
                            </motion.h3>

                            <motion.p variants={fadeSlideUp}>
                                Financial markets are inherently unpredictable. Periods of strong trends, sudden volatility spikes, liquidity shifts, and abnormal market conditions can occur without warning. LUNAR WOLF EA + is built with a risk-first architecture
                                designed to support disciplined execution and operational stability across changing market environments.
                            </motion.p>

                            <motion.p variants={fadeSlideUp}>
                                Rather than pursuing aggressive exposure or short-term profit maximization, the system focuses on maintaining structured trading behavior through controlled risk management and adaptive
                                decision logic. Every component is designed to balance opportunity with capital preservation.
                            </motion.p>

                            <motion.h3 variants={fadeSlideRight}>
                                Core Framework Principles
                            </motion.h3>

                            <div className={styles.listGrid}>
                                <ul>
                                    {listItems1.map((item, i) => (
                                        <motion.li
                                            key={item}
                                            custom={i}
                                            variants={listItemVariants}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                                <ul>
                                    {listItems2.map((item, i) => (
                                        <motion.li
                                            key={item}
                                            custom={i + 4}
                                            variants={listItemVariants}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* ── Risk Disclosure box — fade up on scroll ── */}
                <motion.div
                    className={styles.riskBox}
                    variants={riskBoxVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h3>
                        Risk Disclosure
                    </h3>
                    <p>
                        Risk cannot be eliminated from financial markets. The objective of LUNAR WOLF+ is not to promise protection from losses or guarantee outcomes, but to approach market participation through a disciplined, adaptive, and risk-aware
                        framework designed for long-term operational consistency.
                    </p>
                </motion.div>

            </div>
        </div>
    )
}
