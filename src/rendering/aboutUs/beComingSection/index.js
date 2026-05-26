import React from 'react'
import styles from './beComingSection.module.scss';
import Image from 'next/image';
import AutomateAnimation from './automateAnimation';
import TradingAnimation from './tradingAnimation';

const AutomateImage = "/assets/images/automate.svg";
const ReferralImage = "/assets/images/referral.png";
const WinImage = "/assets/images/win.png";

export default function BeComingSection() {
    return (
        <div className={styles.beComingSection}>
            <div className='container-lg'>
                <div className={styles.title}>
                    <h2>
                        What Lunar Wolf is becoming
                    </h2>
                </div>
                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <div className={styles.imageWrap}>
                            <Image
                                src={AutomateImage}
                                alt="AutomateImage"
                                fill
                                className={styles.cardImage}
                            />

                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>
                                Structured Automated Execution
                            </h3>
                            <p className={styles.cardDesc}>
                                Algorithmic execution designed to support disciplined trading
                                decisions. Built around adaptive market behavior and structured execution.
                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imageWrap}>
                            <AutomateAnimation />

                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>
                                Optional Community Participation

                            </h3>
                            <p className={styles.cardDesc}>
                                Participate in referral rewards alongside your trading journey. Community
                                participation remains separate from trading performance.

                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imageWrap}>
                            <TradingAnimation />
                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>
                                Built for Long-Term Sustainability

                            </h3>
                            <p className={styles.cardDesc}>
                                Designed around transparency, broker flexibility, and adaptability.
                                Focused on sustainable participation over short-term hype.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.title}>
                    <h2>
                        By The Numbers
                    </h2>
                </div>
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <p className={styles.statLabel}>
                            HISTORICAL BACKTESTING
                        </p>
                        <h3 className={styles.statValue}>
                            10 years
                        </h3>
                        <span className={styles.statSub}>
                            of Forex data validated
                        </span>
                    </div>
                    <div className={styles.statItem}>
                        <p className={styles.statLabel}>
                            AVERAGE MONTHLY RETURN
                        </p>
                        <h3 className={styles.statValue}>
                            5–10%
                        </h3>
                        <span className={styles.statSub}>
                            on live accounts
                        </span>
                    </div>
                    <div className={styles.statItem}>
                        <p className={styles.statLabel}>
                            CORE PRINCIPLE
                        </p>
                        <h3 className={styles.statValue}>
                            Logic, not luck
                        </h3>
                        <span className={styles.statSub}>
                            every trade is rule-based
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
