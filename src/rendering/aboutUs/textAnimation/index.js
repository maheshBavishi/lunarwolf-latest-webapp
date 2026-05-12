'use client'
import React from 'react';
import styles from './textAnimation.module.scss';
import { motion } from 'framer-motion';

export default function TextAnimation() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <div className={styles.textAnimation}>
            <div className="container">
                <motion.div
                    className={styles.textWrapper}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.p variants={textVariants}>
                        At Lunar Wolf, we've built a next-generation trading bot that makes forex trading
                        smarter, faster, and stress-free. Powered by advanced algorithms, the bot
                        executes trades automatically, and removes emotional decision-making from the
                        process.
                    </motion.p>

                    <motion.p variants={textVariants}>
                        Our goal is simple, to help traders of all levels earn consistently without the
                        complexity of manual trading. With zero setup hassle and no fees until you profit,
                        Lunar Wolf puts automation and transparency at the core of every trade.
                    </motion.p>

                    <motion.p variants={textVariants}>
                        What truly sets Lunar Wolf apart is its one-of-a-kind referral system, the first and
                        largest of its kind in automated trading. This model transforms every user into a
                        potential partner, rewarding you not only for your own results but also for helping
                        others join and succeed. It's more than a bonus program, it's a built-in growth
                        engine that turns your network into lasting income and empowers the entire
                        community to rise together.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
