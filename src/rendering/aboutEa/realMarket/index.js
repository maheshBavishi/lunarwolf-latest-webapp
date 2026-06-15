'use client'
import React, { useState } from 'react'
import styles from './realMarket.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const MarketImage = '/assets/images/market.png';

const realWorldFactors = [
    "Broker Execution Delays",
    "Slippage",
    "Spread Expansion",
    "Liquidity Gaps",
    "Rollover Volatility",
    "Market Gaps During News Events",
    "Server Latency"
];

const possibleLiveTradingDifferences = [
    "Missed Entries",
    "Delayed Execution",
    "Partial Fills",
    "Different Exit Prices",
    "Take Profit Variations"
];

const brokerDependency = [
    "Execution Speed",
    "Liquidity Quality",
    "Slippage Handling",
    "Spread Stability",
    "Server Performance"
];

// ── Animation Variants ─────────────────────────────────────────────────────

const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const fadeRight = {
    hidden: { opacity: 0, x: -30, filter: 'blur(5px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const fadeLeft = {
    hidden: { opacity: 0, x: 30, filter: 'blur(5px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: '100%', opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }
};

const imageFloat = {
    y: [-5, 5, -5],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
};

// ── Component ──────────────────────────────────────────────────────────────

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
            <div className={styles.accordionHeader} onClick={onToggle}>
                <h4>{title}</h4>
                <motion.div
                    animate={{ rotate: isOpen ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                    className={styles.chevron}
                >
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#CACACA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={styles.accordionContentWrapper}
                    >
                        <div className={styles.accordionContent}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function RealMarket() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className={styles.realMarket}>
            <div className='container-lg'>
                
                {/* Title Section */}
                <motion.div 
                    className={styles.title}
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 variants={fadeUp}>
                        Real Market Conditions &
                        <span> Execution Environment </span>
                    </motion.h2>
                    <motion.h3 variants={fadeUp}>
                        Why live trading may differ from testing.
                    </motion.h3>
                    <motion.p variants={fadeUp}>
                        Historical simulations cannot perfectly replicate live market environments. Actual trading performance may be influenced
                        by market conditions, broker infrastructure, and execution quality.
                    </motion.p>
                </motion.div>

                {/* Grid Section */}
                <motion.div 
                    className={styles.grid}
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Left side: Image */}
                    <motion.div className={styles.items} variants={fadeRight}>
                        <motion.div 
                            className={styles.image}
                            animate={imageFloat}
                        >
                            <img src={MarketImage} alt='MarketImage' />
                        </motion.div>
                    </motion.div>

                    {/* Middle: Dashed Line */}
                    <motion.div className={styles.line} variants={lineVariants}></motion.div>

                    {/* Right side: Accordion */}
                    <motion.div className={styles.items} variants={fadeLeft}>
                        <div className={styles.accordionContainer}>
                            <AccordionItem
                                title="Real-World Factors"
                                isOpen={openIndex === 0}
                                onToggle={() => handleToggle(0)}
                            >
                                <ul>
                                    {realWorldFactors.map((factor, index) => (
                                        <li key={index}>
                                            <span className={styles.dot}>
                                                <span className={styles.innerDot}></span>
                                            </span>
                                            {factor}
                                        </li>
                                    ))}
                                </ul>
                            </AccordionItem>
                            <AccordionItem
                                title="Possible Live Trading Differences"
                                isOpen={openIndex === 1}
                                onToggle={() => handleToggle(1)}
                            >
                                <ul>
                                    {possibleLiveTradingDifferences.map((factor, index) => (
                                        <li key={index}>
                                            <span className={styles.dot}>
                                                <span className={styles.innerDot}></span>
                                            </span>
                                            {factor}
                                        </li>
                                    ))}
                                </ul>
                            </AccordionItem>
                            <AccordionItem
                                title="Broker Dependency"
                                isOpen={openIndex === 2}
                                onToggle={() => handleToggle(2)}
                            >
                                <ul>
                                    {brokerDependency.map((factor, index) => (
                                        <li key={index}>
                                            <span className={styles.dot}>
                                                <span className={styles.innerDot}></span>
                                            </span>
                                            {factor}
                                        </li>
                                    ))}
                                </ul>
                            </AccordionItem>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Text Section */}
                <motion.div 
                    className={styles.bottomText}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p>
                        As a result, live trading behavior may vary between brokers and execution environments, and actual results may differ
                        from historical simulations.
                    </p>
                </motion.div>
                
            </div>
        </div>
    )
}
