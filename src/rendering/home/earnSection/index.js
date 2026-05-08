'use client'
import React from 'react'
import styles from './earnSection.module.scss';
import { motion } from 'framer-motion';
import RightIcon from '@/icons/rightIcon';
import LineAnimation from '@/components/lineAnimation';
const CownIcon = '/assets/images/cown.svg';
const WolfImage = '/assets/images/wolf3.png';
const WolfImage2 = '/assets/images/wolf-group.png';
const LineImage = '/assets/images/line.png';
const CownImage = '/assets/images/cown.svg';
export default function EarnSection() {
    return (
        <div className={styles.earnSectionSection}>
            <div className={styles.flexboxAlignment}>
                <div className={styles.textContainer}>
                    <div className={styles.buttonstyle}>
                        <button>
                            <img src={CownIcon} alt='CownIcon' />
                            <span>
                                Approx 5-10% Gain, Every Month
                            </span>
                        </button>
                    </div>
                    <h2>
                        Growth Through EA Trading
                    </h2>
                    <div className={styles.detailsalignment}>
                        <p>
                            Your Most Reliable Companion for Steady Gains of approx <span> 5-10% Gain, Every Month</span>. Lunar Wolf delivers precise trading, with added potential to grow your income beyond trading alone.
                        </p>
                    </div>
                    <div className={styles.buttonDesign}>
                        <button>
                            Start hunting
                            <RightIcon />
                        </button>
                    </div>
                </div>
                <div className={styles.imageAlignment}>
                    <img src={WolfImage} alt='WolfImage' />
                </div>
                <div className={styles.lineAnimation}>
                    <img src={LineImage} alt='LineImage' />
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
                            LunarWolf EA doesn’t just trade for you 24/5 with proven algorithms — it builds you a 5-level income empire where every referral’s success becomes
                            YOUR recurring payday.
                        </p>
                    </div>
                </div>
                <div className={styles.imageCenterAlignmet}>
                    <img src={WolfImage2} alt='WolfImage2' />
                    <div className={styles.cownAlignment}>
                        <motion.img
                            src={CownImage}
                            alt="CownImage"
                            animate={{
                                y: [0, -15, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
