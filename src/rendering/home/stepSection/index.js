'use client'
import React from 'react'
import { motion } from 'framer-motion';
import styles from './stepSection.module.scss';
const Signup = '/assets/images/signup.svg';
const Connect = '/assets/images/Connect.svg';

const AnimatedConnectorSVG = ({ id = "connector1" }) => {
    const gradientId = `gradient_${id}`;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="439"
            height="76"
            viewBox="0 0 439 76"
            fill="none"
        >
            {/* Animated dashed horizontal line */}
            <motion.line
                x1="0"
                y1="0.5"
                x2="416"
                y2="0.5"
                stroke={`url(#${gradientId})`}
                strokeWidth="1"
                strokeDasharray="14.857 7.857"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -22.714 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Animated curved arrow portion */}
            <motion.path
                d="M416 0.5 C418.645 0.5 421.166 1.02632 423.464 1.97947 C428 4 432 7.5 434.482 12.3442 C435.435 14.6427 436 17.221 436 20 L436 71"
                stroke={`url(#${gradientId})`}
                strokeWidth="1"
                fill="none"
                strokeDasharray="6 4"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -10 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Arrowhead */}
            <motion.polygon
                points="433.113,70.5 438.887,70.5 436,75.5"
                fill="#00B3FF"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <defs>
                <linearGradient
                    id={gradientId}
                    x1="0"
                    y1="0.5"
                    x2="436"
                    y2="75.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#1C5E7A" stopOpacity="0" />
                    <stop offset="1" stopColor="#00B3FF" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const AnimatedConnectorSVGReversed = ({ id = "connector_rev" }) => {
    const gradientId = `gradient_${id}`;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="382"
            height="153"
            viewBox="0 0 382 153"
            fill="none"
        >
            {/* Animated dashed horizontal line (right to left) */}
            <motion.line
                x1="381.887"
                y1="0.5"
                x2="22.887"
                y2="0.5"
                stroke={`url(#${gradientId})`}
                strokeWidth="1"
                strokeDasharray="14.857 7.857"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -22.714 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Animated curved arrow portion (top-left corner curving down) */}
            <motion.path
                d="M22.887 0.5 C20.242 0.5 17.721 1.02632 15.423 1.97947 C10.887 4 6.887 7.5 4.404 12.3442 C3.452 14.6427 2.887 17.221 2.887 20 L2.887 148"
                stroke={`url(#${gradientId})`}
                strokeWidth="1"
                fill="none"
                strokeDasharray="6 4"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -10 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Arrowhead */}
            <motion.polygon
                points="-0.00003,147.5 5.77347,147.5 2.88672,152.5"
                fill="#00B2FF"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <defs>
                <linearGradient
                    id={gradientId}
                    x1="2.88671"
                    y1="152.5"
                    x2="381.887"
                    y2="0.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#00B2FF" />
                    <stop offset="1" stopColor="#006B99" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};
export default function StepSection() {
    return (
        <div className={styles.stepSection}>
            <div className='container'>
                <div className={styles.headerAlignment}>
                    <h2>
                        Steps to Invest through Lunar Wolf
                    </h2>
                    <p>
                        Transparent, Powerful, and Rewarding Trading Designed for YouTransparent, Powerful, and Rewarding Trading Designed for YouTransparent, Powerful,
                        and Rewarding Trading Designed for You
                    </p>
                </div>
                <div className={styles.allflexBox}>
                    <div className={styles.flexBox}>
                        <div className={styles.fillbox}>
                            <div className={styles.colgrid}>
                                <div className={styles.stepbox}>
                                    <span>
                                        Step 1
                                    </span>
                                </div>
                                <div className={styles.contentAlignment}>
                                    <div className={styles.icontext}>
                                        <img src={Signup} alt='Signup' />
                                        <h3>
                                            Sign Up
                                        </h3>
                                    </div>
                                    <ul>
                                        <li>Sign Up to create your Lunar Wolf Account.</li>
                                        <li>
                                            Create your trading account (MT5) with
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <AnimatedConnectorSVG id="connector1" />
                        </div>
                    </div>
                    <div className={styles.flexBox}>
                        <div className={styles.line}>
                            <AnimatedConnectorSVGReversed id="connector2" />
                        </div>
                        <div className={styles.fillbox}>
                            <div className={styles.colgrid}>
                                <div className={styles.stepbox}>
                                    <span>
                                        Step 2
                                    </span>
                                </div>
                                <div className={styles.contentAlignment}>
                                    <div className={styles.icontext}>
                                        <img src={Connect} alt='Connect' />
                                        <h3>
                                            Connect
                                        </h3>
                                    </div>
                                    <ul>
                                        <li>Link your MT5 account to our “Profit Hunter.</li>
                                        <li>
                                            Make sure your account has a minimum of $1000 fund to start bot setup.
                                        </li>
                                        <li>
                                            Confirm connection status as “Connected.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.flexBox}>
                        <div className={styles.fillbox}>
                            <div className={styles.colgrid}>
                                <div className={styles.stepbox}>
                                    <span>
                                        Step 3
                                    </span>
                                </div>
                                <div className={styles.contentAlignment}>
                                    <div className={styles.icontext}>
                                        <img src={Signup} alt='Signup' />
                                        <h3>
                                            EA Setup
                                        </h3>
                                    </div>
                                    <ul>
                                        <li>Apply to Activate Bot through Lunar Wolf dashboard.</li>
                                        <li>
                                            Fill the quick form with accurate details to setup the bot.
                                        </li>
                                        <li>
                                            Wait for confirmation and let the bot start.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <AnimatedConnectorSVG id="connector3" />
                        </div>
                    </div>
                    <div className={styles.flexBox}>
                        <div className={styles.fillbox}>
                            <div className={styles.colgrid}>
                                <div className={styles.stepbox}>
                                    <span>
                                        Step 4
                                    </span>
                                </div>
                                <div className={styles.contentAlignment}>
                                    <div className={styles.icontext}>
                                        <img src={Connect} alt='Connect' />
                                        <h3>
                                            Hunt Profit
                                        </h3>
                                    </div>
                                    <ul>
                                        <li>Watch the bot hunt for top trading setups.
                                        </li>
                                        <li>
                                            Track live results on your dashboard.
                                        </li>
                                        <li>
                                            Refer and grow your pack to earn more profits.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
