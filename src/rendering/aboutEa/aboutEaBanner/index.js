'use client'
import React from 'react'
import styles from './aboutEaBanner.module.scss';
import { motion } from 'framer-motion';

const LunarWhite = '/assets/icons/lunar-white.svg';

// ── Variants ────────────────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.1,
        },
    },
};

const fadeSlideUp = {
    hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.75, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const floatAnimation = {
    y: [0, -6, 0],
    transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
    },
};

const buttonHover = {
    scale: 1.06,
    boxShadow: '0 0 24px 4px rgba(107, 197, 224, 0.55)',
    transition: { type: 'spring', stiffness: 350, damping: 18 },
};

const buttonTap = { scale: 0.96 };

// ── Component ────────────────────────────────────────────────────────────────

export default function AboutEaBanner() {
    return (
        <div className={styles.aboutEaBanner}>
            <motion.div
                className={styles.bannerBg}
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: "linear" }}
            />
            <div className='container-sm4'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    {/* Badge */}
                    <motion.div
                        className={styles.centerButton}
                        variants={badgeVariants}
                        animate={floatAnimation}
                    >
                        <button>
                            <img src={LunarWhite} alt='LunarWhite' />
                            LUNAR WOLF EA
                        </button>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 variants={fadeSlideUp}>
                        Designed Specifically  <br /> for <span> EUR/USD </span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.h2 variants={fadeSlideUp}>
                        Structured. Stability Focused. Risk-Aware.
                    </motion.h2>

                    {/* Paragraphs */}
                    <motion.p variants={fadeSlideUp}>
                        Long-term consistency, controlled exposure, and long-term stability matter more than
                        short-term
                        aggressive profits.
                    </motion.p>

                    <motion.p variants={fadeSlideUp}>
                        The system is specifically designed for EURUSD and continuously refined through long-term historical analysis, year-by-year validation, and real market observation.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div className={styles.twobutton} variants={fadeSlideUp}>
                        <a href='#live-portfolios'>
                            <motion.button
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                            >
                                View Live Performance
                            </motion.button>
                        </a>
                        <a href="https://eauser.lunarwolf.ai/signup" target='_blank'>
                            <motion.button
                                className={styles.fill}
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                            >
                                Start EA Setup
                            </motion.button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
