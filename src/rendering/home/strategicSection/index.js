'use client'
import React from 'react'
import { motion } from "framer-motion";
import styles from './StrategicSection.module.scss';
const SystemImage = '/assets/images/system.png';
const RoundLogo = '/assets/images/round-logo.svg';
const BrokerImage = '/assets/images/broker.png';

export default function StrategicSection() {
    return (
        <div className={styles.strategicSection}>
            <motion.div
                className='container'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                <motion.div
                    className={styles.title}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                >
                    <h2>
                        Strategic Difference
                    </h2>
                </motion.div>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.items}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        <div className={styles.image}>
                            <div className={styles.imagestyle}>
                                <img src={SystemImage} alt='SystemImage' />
                            </div>
                            <div className={styles.logoWrapper}>
                                <div className={styles.logoContainer}>
                                    <motion.div
                                        className={styles.spinningBorder}
                                        animate={{ rotate: [0, 360] }}
                                        transition={{
                                            repeat: Infinity,
                                            ease: "linear",
                                            duration: 4,
                                        }}
                                    />
                                    <img
                                        src={RoundLogo}
                                        alt="RoundLogo"
                                        className={styles.logo}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.details}>
                            <h3>
                                Lunar IB Structure
                            </h3>
                            <ul>
                                <li>Profit Sharing (up to 5 levels)</li>
                                <li>IB Commission (multi-level)</li>
                                <li>Performance-based sharing</li>
                                <li>Network growth bonuses</li>
                            </ul>
                            <p>
                                You earn from trading performance
                                + network expansion.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className={styles.centerAlignment}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        <svg
                            className="h-[100%] max-mobile:max-w-[250px] max-mobile:h-[200px] w-full"
                            width="71"
                            height="318"
                            viewBox="0 0 71 318"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* "V" letter */}
                            <path
                                d="M16.4162 153.393L9.13617 133.793H12.1602L18.0962 150.481L24.0882 133.793H27.0562L19.7762 153.393H16.4162Z"
                                fill="white"
                            />
                            {/* "S" letter */}
                            <path
                                d="M59.831 184.729C58.3937 184.729 57.1337 184.477 56.051 183.973C54.9683 183.45 54.1283 182.722 53.531 181.789C52.9337 180.855 52.635 179.763 52.635 178.513H55.575C55.5937 179.222 55.7617 179.875 56.079 180.473C56.415 181.051 56.891 181.518 57.507 181.873C58.1417 182.209 58.9163 182.377 59.831 182.377C60.615 182.377 61.287 182.246 61.847 181.985C62.4257 181.723 62.8643 181.369 63.163 180.921C63.4617 180.454 63.611 179.922 63.611 179.325C63.611 178.634 63.4523 178.065 63.135 177.617C62.8177 177.169 62.3883 176.805 61.847 176.525C61.3243 176.226 60.7083 175.965 59.999 175.741C59.3083 175.517 58.5803 175.274 57.815 175.013C56.2657 174.509 55.1083 173.855 54.343 173.053C53.5963 172.25 53.223 171.205 53.223 169.917C53.223 168.815 53.4843 167.863 54.007 167.061C54.5297 166.239 55.2577 165.605 56.191 165.157C57.143 164.69 58.263 164.457 59.551 164.457C60.8203 164.457 61.931 164.69 62.883 165.157C63.835 165.623 64.5817 166.267 65.123 167.089C65.6643 167.91 65.935 168.871 65.935 169.973H62.967C62.967 169.469 62.8363 168.974 62.575 168.489C62.3137 168.003 61.9217 167.611 61.399 167.313C60.8763 166.995 60.2323 166.837 59.467 166.837C58.8323 166.818 58.263 166.921 57.759 167.145C57.255 167.369 56.863 167.695 56.583 168.125C56.303 168.554 56.163 169.067 56.163 169.665C56.163 170.262 56.2843 170.747 56.527 171.121C56.7883 171.475 57.1617 171.783 57.647 172.045C58.1323 172.306 58.6923 172.549 59.327 172.773C59.9803 172.978 60.699 173.211 61.483 173.473C62.4537 173.79 63.3123 174.182 64.059 174.649C64.8243 175.097 65.4217 175.685 65.851 176.413C66.299 177.122 66.523 178.037 66.523 179.157C66.523 180.127 66.271 181.033 65.767 181.873C65.263 182.713 64.5163 183.403 63.527 183.945C62.5377 184.467 61.3057 184.729 59.831 184.729Z"
                                fill="white"
                            />
                            {/* Static base line */}
                            <path
                                d="M69.5407 1.86127L35.2363 130.922L39.7344 162.716L0.970266 315.845"
                                stroke="url(#paint0_linear_4623_107)"
                                strokeWidth="2"
                                strokeOpacity="0.3"
                            />
                            {/* Animated glowing light traveling along the line */}
                            <motion.path
                                d="M69.5407 1.86127L35.2363 130.922L39.7344 162.716L0.970266 315.845"
                                stroke="#00D3F2"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="40 460"
                                initial={{ strokeDashoffset: 500 }}
                                animate={{ strokeDashoffset: -500 }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_4623_107"
                                    x1="64.5184"
                                    y1="0.930633"
                                    x2="5.99259"
                                    y2="316.775"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00D3F2" stopOpacity="0" />
                                    <stop offset="0.495192" stopColor="#00D3F2" />
                                    <stop offset="1" stopColor="#00D3F2" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                    <motion.div
                        className={styles.items}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        <div className={styles.image}>
                            <div className={styles.imagestyle}>
                                <img src={BrokerImage} alt='BrokerImage' />
                            </div>
                        </div>
                        <div className={styles.details}>
                            <h3>
                                Normal Broker IB Structure
                            </h3>
                            <ul>
                                <li>Spread commission</li>
                                <li>Lot-based rebate</li>
                                <li>Direct referrals only (mostly 1 level)</li>
                            </ul>
                            <p>
                                ou earn only when your client trades volume.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
