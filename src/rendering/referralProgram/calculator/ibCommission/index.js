import React, { useState, useMemo, useCallback, useTransition, useEffect } from 'react';
import styles from './ibCommission.module.scss';
import Image from 'next/image';
import TeamLevel from '../teamLevel';

const LunarLogo = '/assets/images/lunar-small.svg';
const StarIcon = '/assets/images/star.png';
const LineIcon = '/assets/images/line-dot.svg';

export default function IBCommission() {
    // Brokerage Calculation State
    const [isPending, startTransition] = useTransition();
    const [activeAccounts, setActiveAccounts] = useState(1);
    const [accountSliderValue, setAccountSliderValue] = useState(0); // 0-100 range for visual slider
    const [lots, setLots] = useState(1);

    // Rank Thresholds & Commissions
    const RANK_THRESHOLDS = useMemo(
        () => [
            { rank: 1, minAccounts: 2, commission: 4 },
            { rank: 2, minAccounts: 6, commission: 5 },
            { rank: 3, minAccounts: 16, commission: 6 },
            { rank: 4, minAccounts: 26, commission: 7 },
            { rank: 5, minAccounts: 51, commission: 8 },
        ],
        []
    );

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

    // Derived Values
    const calculatedActiveAccounts = useMemo(
        () => getAccountFromSlider(accountSliderValue),
        [accountSliderValue, getAccountFromSlider]
    );

    const { earnings, currentRank } = useMemo(() => {
        let rank = 0;
        let commission = 0;

        for (let i = RANK_THRESHOLDS.length - 1; i >= 0; i--) {
            if (calculatedActiveAccounts >= RANK_THRESHOLDS[i].minAccounts) {
                rank = RANK_THRESHOLDS[i].rank;
                commission = RANK_THRESHOLDS[i].commission;
                break;
            }
        }

        const totalEarnings = calculatedActiveAccounts * commission * lots;
        return { earnings: totalEarnings, currentRank: rank };
    }, [calculatedActiveAccounts, lots, RANK_THRESHOLDS]);

    useEffect(() => {
        setActiveAccounts(calculatedActiveAccounts);
    }, [calculatedActiveAccounts]);

    const getSliderBackground = (value, min, max) => {
        const percentage = ((value - min) / (max - min)) * 100;
        return `linear-gradient(to right, #0776B6 0%, #00D9FF ${percentage}%, rgba(255, 255, 255, 0.1) ${percentage}%, rgba(255, 255, 255, 0.1) 100%)`;
    };

    const getTooltipStyle = (value, min, max) => {
        const percentage = ((value - min) / (max - min)) * 100;
        return {
            left: `${percentage}%`,
        };
    };

    return (
        <div className={styles.ibCommission}>
            <div className={styles.commissionCard}>
                <h2 className={styles.title}>
                    Direct Referral IB Commission
                </h2>
                <div className={styles.youSection}>
                    <button className={styles.youButton}>
                        You
                    </button>
                    <img src={LunarLogo} alt="LunarLogo" className={styles.lunarLogo} />
                </div>
                <div className={styles.lineIconWrapper}>
                    <img
                        src={LineIcon}
                        alt="LineIcon"
                        className={styles.lineIcon}
                    />
                </div>
                <div className={styles.mainGrid}>
                    <div>
                        <div className={styles.refEarnCard}>
                            <div className={styles.starIconWrapper}>
                                <img
                                    src={StarIcon}
                                    alt="StarIcon"
                                    className={styles.starIcon}
                                />
                            </div>
                            <h3 className={styles.cardHeading}>
                                Ref & Earn
                            </h3>
                            <p className={styles.cardText}>
                                Unlock Rank {(() => {
                                    const getRankData = (acc) => {
                                        if (acc >= 51) return { r: 5, a: "51+", c: 8 };
                                        if (acc >= 26) return { r: 4, a: "26+", c: 7 };
                                        if (acc >= 16) return { r: 3, a: "15+", c: 6 };
                                        if (acc >= 6) return { r: 2, a: "6+", c: 5 };
                                        return { r: 1, a: "1+", c: 4 };
                                    };
                                    const data = getRankData(activeAccounts);
                                    return `${data.r} with ${data.a} active referrals and earn $${data.c} per standard lot traded. The more lots your network trades, the more you earn, your total commission is simply $${data.c} × total standard lots generated.`;
                                })()}
                            </p>
                        </div>
                    </div>
                    <div className={styles.arrowWrapper}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="6"
                            viewBox="0 0 60 6"
                            fill="none"
                        >
                            <path
                                d="M60 2.88672L55 -3.25959e-05V5.77347L60 2.88672ZM-1.43051e-06 2.88672V3.38672L55.5 3.38672V2.88672V2.38672L-1.43051e-06 2.38672V2.88672Z"
                                fill="#025663"
                            />
                        </svg>
                    </div>
                    <div>
                        <div className={styles.calculatorCard}>
                            <div className={styles.accountGrid}>
                                <h2 className={styles.sectionLabel}>
                                    Account
                                </h2>
                                <div className={styles.sliderContainer}>
                                    <div className={styles.sliderWrapper}>
                                        <div
                                            className={styles.tooltip}
                                            style={getTooltipStyle(
                                                accountSliderValue,
                                                0,
                                                100,
                                            )}
                                        >
                                            {activeAccounts}
                                            <div className={styles.tooltipArrow}></div>
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={accountSliderValue}
                                            onChange={(e) => {
                                                const val = Number(e.target.value);
                                                startTransition(() => {
                                                    setAccountSliderValue(val);
                                                });
                                            }}
                                            className={styles.rangeInput}
                                            style={{
                                                touchAction: "pan-x",
                                                background: getSliderBackground(
                                                    accountSliderValue,
                                                    0,
                                                    100,
                                                ),
                                            }}
                                        />
                                    </div>
                                    <div className={styles.rankLabelsWrapper}>
                                        <div
                                            className={styles.rankLabelItem}
                                            style={{ left: "0%" }}
                                        >
                                            {currentRank < 1 && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={styles.lockIcon}
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M12.6667 7.33203H3.33333C2.59695 7.33203 2 7.92898 2 8.66536V13.332C2 14.0684 2.59695 14.6654 3.33333 14.6654H12.6667C13.403 14.6654 14 14.0684 14 13.332V8.66536C14 7.92898 13.403 7.33203 12.6667 7.33203Z"
                                                        stroke="#00D3F2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M4.66797 7.33203V4.66536C4.66797 3.78131 5.01916 2.93346 5.64428 2.30834C6.26940 1.68322 7.11725 1.33203 8.00130 1.33203C8.88536 1.33203 9.73320 1.68322 10.3583 2.30834C10.9834 2.93346 11.3346 3.78131 11.3346 4.66536V7.33203"
                                                        stroke="#00D3F2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                            <p
                                                className={`${styles.rankText} ${currentRank >= 1
                                                    ? ""
                                                    : styles.blurred
                                                    }`}
                                            >
                                                Rank 1
                                            </p>
                                        </div>
                                        <div
                                            className={`${styles.rankLabelItem} ${styles.centered}`}
                                            style={{ left: "25%" }}
                                        >
                                            {currentRank < 2 && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={styles.lockIcon}
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M12.6667 7.33203H3.33333C2.59695 7.33203 2 7.92898 2 8.66536V13.332C2 14.0684 2.59695 14.6654 3.33333 14.6654H12.6667C13.403 14.6654 14 14.0684 14 13.332V8.66536C14 7.92898 13.403 7.33203 12.6667 7.33203Z"
                                                        stroke="#00D3F2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M4.66797 7.33203V4.66536C4.66797 3.78131 5.01916 2.93346 5.64428 2.30834C6.26940 1.68322 7.11725 1.33203 8.00130 1.33203C8.88536 1.33203 9.73320 1.68322 10.3583 2.30834C10.9834 2.93346 11.3346 3.78131 11.3346 4.66536V7.33203"
                                                        stroke="#00D3F2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                            <p
                                                className={`${styles.rankText} ${currentRank >= 2
                                                    ? ""
                                                    : styles.blurred
                                                    }`}
                                            >
                                                Rank 2
                                            </p>
                                        </div>
                                        <div
                                            className={`${styles.rankLabelItem} ${styles.centered}`}
                                            style={{ left: "50%" }}
                                        >
                                            {currentRank < 3 && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={styles.lockIcon}
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M12.6667 7.33203H3.33333C2.59695 7.33203 2 7.92898 2 8.66536V13.332C2 14.0684 2.59695 14.6654 3.33333 14.6654H12.6667C13.403 14.6654 14 14.0684 14 13.332V8.66536C14 7.92898 13.403 7.33203 12.6667 7.33203Z"
                                                        stroke="#00D3F2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M4.66797 7.33203V4.66536C4.66797 3.78131 5.01916 2.93346 5.64428 2.30834C6.26940 1.68322 7.11725 1.33203 8.00130 1.33203C8.88536 1.33203 9.73320 1.68322 10.3583 2.30834C10.9834 2.93346 11.3346 3.78131 11.3346 4.66536V7.33203"
                                                        stroke="#00D3F2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                            <p
                                                className={`${styles.rankText} ${currentRank >= 3
                                                    ? ""
                                                    : styles.blurred
                                                    }`}
                                            >
                                                Rank 3
                                            </p>
                                        </div>
                                        <div
                                            className={`${styles.rankLabelItem} ${styles.centered}`}
                                            style={{ left: "75%" }}
                                        >
                                            {currentRank < 4 && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={styles.lockIcon}
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M12.6667 7.33203H3.33333C2.59695 7.33203 2 7.92898 2 8.66536V13.332C2 14.0684 2.59695 14.6654 3.33333 14.6654H12.6667C13.403 14.6654 14 14.0684 14 13.332V8.66536C14 7.92898 13.403 7.33203 12.6667 7.33203Z"
                                                        stroke="#00D3F2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M4.66797 7.33203V4.66536C4.66797 3.78131 5.01916 2.93346 5.64428 2.30834C6.26940 1.68322 7.11725 1.33203 8.00130 1.33203C8.88536 1.33203 9.73320 1.68322 10.3583 2.30834C10.9834 2.93346 11.3346 3.78131 11.3346 4.66536V7.33203"
                                                        stroke="#00D3F2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                            <p
                                                className={`${styles.rankText} ${currentRank >= 4
                                                    ? ""
                                                    : styles.blurred
                                                    }`}
                                            >
                                                Rank 4
                                            </p>
                                        </div>
                                        <div
                                            className={`${styles.rankLabelItem} ${styles.end}`}
                                            style={{ left: "100%" }}
                                        >
                                            {currentRank < 5 && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={styles.lockIcon}
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M12.6667 7.33203H3.33333C2.59695 7.33203 2 7.92898 2 8.66536V13.332C2 14.0684 2.59695 14.6654 3.33333 14.6654H12.6667C13.403 14.6654 14 14.0684 14 13.332V8.66536C14 7.92898 13.403 7.33203 12.6667 7.33203Z"
                                                        stroke="#00D3F2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M4.66797 7.33203V4.66536C4.66797 3.78131 5.01916 2.93346 5.64428 2.30834C6.2694 1.68322 7.11725 1.33203 8.0013 1.33203C8.88536 1.33203 9.7332 1.68322 10.3583 2.30834C10.9834 2.93346 11.3346 3.78131 11.3346 4.66536V7.33203"
                                                        stroke="#00D3F2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                            <p
                                                className={`${styles.rankText} ${styles.nowrap} ${currentRank >= 5
                                                    ? ""
                                                    : styles.blurred
                                                    }`}
                                            >
                                                Rank 5
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.lotsSection}>
                                <h2 className={styles.sectionLabel}>
                                    Lot’s
                                </h2>
                                <div className={styles.sliderContainer}>
                                    <div
                                        className={styles.tooltip}
                                        style={getTooltipStyle(lots, 1, 51)}
                                    >
                                        {lots}
                                        <div className={styles.tooltipArrow}></div>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="51"
                                        value={lots}
                                        onChange={(e) => {
                                            const val = Number(e.target.value);
                                            startTransition(() => {
                                                setLots(val);
                                            });
                                        }}
                                        className={styles.rangeInput}
                                        style={{
                                            background: getSliderBackground(lots, 1, 51),
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={styles.earningsSection}>
                                <p className={styles.earningsLabel}>
                                    You Earn
                                </p>
                                <input
                                    type="text"
                                    readOnly
                                    value={`$ ${earnings.toFixed(2)}`}
                                    className={styles.earningsInput}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TeamLevel />
        </div>
    );
}
