import React, { useState, useMemo, useCallback, useTransition, useEffect } from 'react';
import styles from './teamLevel.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stepperhead = "/assets/images/stepperhead.png";
const step1icon = "/assets/images/step1.png";
const step2icon = "/assets/images/step2.png";
const step3icon = "/assets/images/step3.png";
const step4icon = "/assets/images/step4.png";
const step5icon = "/assets/images/step5.png";
const LockImage = "/assets/images/lock.svg";

const AnimatedLock = () => (
    <motion.svg 
        width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
        <rect x="0.5" y="0.5" width="43" height="43" rx="4.5" fill="#030303" />
        <motion.rect 
            x="0.5" y="0.5" width="43" height="43" rx="4.5" stroke="url(#paint0_linear_711_810)" 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <path d="M29 21H15C13.8954 21 13 21.8954 13 23V30C13 31.1046 13.8954 32 15 32H29C30.1046 32 31 31.1046 31 30V23C31 21.8954 30.1046 21 29 21Z" stroke="#00D3F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 21V17C17 15.6739 17.5268 14.4021 18.4645 13.4645C19.4021 12.5268 20.6739 12 22 12C23.3261 12 24.5979 12.5268 25.5355 13.4645C26.4732 14.4021 27 15.6739 27 17V21" stroke="#00D3F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="paint0_linear_711_810" x1="22" y1="-2.6226e-06" x2="22" y2="44" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.3" />
                <stop offset="1" stopColor="#999999" stopOpacity="0.1" />
            </linearGradient>
        </defs>
    </motion.svg>
);

export default function TeamLevel() {
    const [isPending, startTransition] = useTransition();
    const [teamSliderValue, setTeamSliderValue] = useState(0);
    const [teamActiveAccounts, setTeamActiveAccounts] = useState(1);

    const getAccountFromSlider = useCallback((value) => {
        let accounts = 1;
        if (value <= 25) {
            accounts = 1 + (value / 25) * 5;
        } else if (value <= 50) {
            accounts = 6 + ((value - 25) / 25) * 10;
        } else if (value <= 75) {
            accounts = 16 + ((value - 50) / 25) * 10;
        } else {
            accounts = 26 + ((value - 75) / 25) * 25;
        }
        return Math.round(accounts);
    }, []);

    useEffect(() => {
        setTeamActiveAccounts(getAccountFromSlider(teamSliderValue));
    }, [teamSliderValue, getAccountFromSlider]);

    const getTooltipStyle = (value, min, max) => {
        const percentage = ((value - min) / (max - min)) * 100;
        return {
            left: `${percentage}%`,
        };
    };

    const getTeamSliderBackground = (value, min, max) => {
        const percentage = ((value - min) / (max - min)) * 100;
        return `linear-gradient(to right, #0E2EFF 0%, #0EACFF ${percentage}%, rgba(255, 255, 255, 0.1) ${percentage}%, rgba(255, 255, 255, 0.1) 100%)`;
    };

    const getIbData = (acc) => {
        if (acc >= 51) return { rank: 5, earn: 8, ibLevel: 5, bonus: 1, total: 9 };
        if (acc >= 26) return { rank: 4, earn: 7, ibLevel: 4, bonus: 1, total: 8 };
        if (acc >= 16) return { rank: 3, earn: 6, ibLevel: 3, bonus: 1, total: 7 };
        if (acc >= 6) return { rank: 2, earn: 5, ibLevel: 2, bonus: 2, total: 7 };
        return { rank: 1, earn: 4, ibLevel: 1, bonus: 0, total: 4 };
    };

    const data = getIbData(teamActiveAccounts);

    return (
        <div className={styles.teamLevel}>
            <div className={styles.card}>
                <h2 className={styles.title}>
                    Team / Level Income (Bonus Commission)
                </h2>

                <div className={styles.sliderCard}>
                    <div className={styles.accountGrid}>
                        <h2 className={styles.label}>Account</h2>
                        <div className={styles.sliderWrapper}>
                            <div
                                className={styles.tooltip}
                                style={getTooltipStyle(teamSliderValue, 0, 100)}
                            >
                                {teamActiveAccounts}
                                <div className={styles.arrow}></div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={teamSliderValue}
                                onChange={(e) => {
                                    const val = Number(e.target.value);
                                    startTransition(() => {
                                        setTeamSliderValue(val);
                                    });
                                }}
                                className={styles.rangeInput}
                                style={{
                                    background: getTeamSliderBackground(teamSliderValue, 0, 100),
                                }}
                            />
                        </div>
                    </div>
                    <p className={styles.infoText}>
                        At Rank {data.rank}, you earn ${data.earn} per standard lot, and by unlocking IB Level {data.ibLevel}, you receive an additional ${data.bonus} per standard lot as bonus commission. This means you can earn a total of ${data.total} per lot based on your team’s trading volume.
                    </p>
                </div>

                <div className={styles.connectorWrapper}>
                    <div></div>
                    <div className={styles.connectorBox}>
                        <div className={styles.glow}></div>
                        <div className={styles.inner}></div>
                    </div>
                    <div></div>
                </div>

                <div className={styles.connectorWrapperReverse}>
                    <div className={styles.connectorBox}>
                        <div className={styles.glow}></div>
                        <div className={styles.inner}></div>
                    </div>
                    <div></div>
                    <div></div>
                </div>

                <div className={styles.stepperSection}>
                    <div className={styles.headerGrid}>
                        <div></div>
                        <div className={styles.stepperHeadWrapper}>
                            <Image
                                src={stepperhead}
                                alt="stepperhead"
                                width={1000}
                                height={25}
                                className={styles.stepperHeadImg}
                            />
                            <div className={styles.labelGrid}>
                                <p className={styles.headerLabel}>IB Level</p>
                                <p className={`${styles.headerLabel} ${styles.center}`}>Requirement</p>
                                <p className={`${styles.headerLabel} ${styles.right}`}>Commission per Lot</p>
                            </div>
                        </div>
                    </div>

                    {/* Level 1 */}
                    <div className={styles.stepRow}>
                        <div className={styles.iconWrapper}>
                            <Image src={step1icon} alt="step1icon" width={36} height={36} className={styles.stepIcon} />
                            <div className={`${styles.line} ${teamActiveAccounts >= 6 ? styles.active : styles.inactive}`}></div>
                        </div>
                        <div className={`${styles.stepContentOuter} ${styles.first}`}>
                            <div className={`${styles.stepContentInner} ${styles.first}`}>
                                <p className={styles.levelText}>Level 1</p>
                                <p className={styles.reqText}>1 Active Account</p>
                                <p className={styles.commText}>Base earnings start</p>
                            </div>
                        </div>
                    </div>

                    {/* Level 2 */}
                    <div className={styles.stepRow}>
                        <div className={styles.iconWrapper}>
                            <Image src={step2icon} alt="step2icon" width={36} height={36} className={styles.stepIcon} />
                            <div className={`${styles.line} ${teamActiveAccounts >= 16 ? styles.active : styles.inactive}`}></div>
                        </div>
                        <div className={styles.relative}>
                            <div className={`${styles.stepContentOuter} ${teamActiveAccounts >= 6 ? '' : styles.locked}`}>
                                <div className={styles.stepContentInner}>
                                    <p className={styles.levelText}>Level 2</p>
                                    <p className={styles.reqText}>Achieve Rank 2</p>
                                    <p className={`${styles.commText} ${teamActiveAccounts >= 6 ? '' : styles.locked}`}>$2 / standard lot</p>

                                </div>
                            </div>
                            {teamActiveAccounts < 6 && (
                                <div className={styles.lockOverlay}>
                                    <AnimatedLock />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Level 3 */}
                    <div className={styles.stepRow}>
                        <div className={styles.iconWrapper}>
                            <Image src={step3icon} alt="step3icon" width={36} height={36} className={styles.stepIcon} />
                            <div className={`${styles.line} ${teamActiveAccounts >= 26 ? styles.active : styles.inactive}`}></div>
                        </div>
                        <div className={styles.relative}>
                            <div className={`${styles.stepContentOuter} ${teamActiveAccounts >= 16 ? '' : styles.locked}`}>
                                <div className={styles.stepContentInner}>
                                    <p className={styles.levelText}>Level 3</p>
                                    <p className={styles.reqText}>Achieve Rank 3</p>
                                    <p className={`${styles.commText} ${teamActiveAccounts >= 16 ? '' : styles.locked}`}>$1 / Standard lot</p>
                                </div>
                            </div>
                            {teamActiveAccounts < 16 && (
                                <div className={styles.lockOverlay}>
                                    <AnimatedLock />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Level 4 */}
                    <div className={styles.stepRow}>
                        <div className={styles.iconWrapper}>
                            <Image src={step4icon} alt="step4icon" width={36} height={36} className={styles.stepIcon} />
                            <div className={`${styles.line} ${teamActiveAccounts >= 51 ? styles.active : styles.inactive}`}></div>
                        </div>
                        <div className={styles.relative}>
                            <div className={`${styles.stepContentOuter} ${teamActiveAccounts >= 26 ? '' : styles.locked}`}>
                                <div className={styles.stepContentInner}>
                                    <p className={styles.levelText}>Level 4</p>
                                    <p className={styles.reqText}>Achieve Rank 4</p>
                                    <p className={`${styles.commText} ${teamActiveAccounts >= 26 ? '' : styles.locked}`}>$1 / Standard lot</p>
                                </div>
                            </div>
                            {teamActiveAccounts < 26 && (
                                <div className={styles.lockOverlay}>
                                    <AnimatedLock />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Level 5 */}
                    <div className={styles.stepRow}>
                        <div className={styles.iconWrapper}>
                            <Image src={step5icon} alt="step5icon" width={36} height={36} className={styles.stepIcon} />
                            <div className={`${styles.line} ${teamActiveAccounts >= 51 ? styles.active : styles.inactive} ${styles.short}`}></div>
                        </div>
                        <div className={styles.relative}>
                            <div className={`${styles.stepContentOuter} ${teamActiveAccounts >= 51 ? '' : styles.locked}`}>
                                <div className={styles.stepContentInner}>
                                    <p className={styles.levelText}>Level 5</p>
                                    <p className={styles.reqText}>Achieve Rank 5</p>
                                    <p className={`${styles.commText} ${teamActiveAccounts >= 51 ? '' : styles.locked}`}>$1 / Standard lot</p>
                                </div>
                            </div>
                            {teamActiveAccounts < 51 && (
                                <div className={styles.lockOverlay}>
                                    <AnimatedLock />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
