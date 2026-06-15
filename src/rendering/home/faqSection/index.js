'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import styles from './faqSection.module.scss';
import DownIcon from '@/icons/downIcon';
import classNames from 'classnames';

const leftFaqs = [
    {
        question: "WHAT IS LUNAR WOLF EA?",
        answer: "LUNAR WOLF EA is an automated algorithmic trading system designed to operate on supported MT5 broker accounts. It analyzes market conditions and executes trades automatically based on predefined trading logic and risk parameters."
    },
    {
        question: "HOW DOES LUNAR WOLF EA OPERATE?",
        answer: "LUNAR WOLF EA uses structured execution logic and market-driven conditions to identify trading opportunities and automate trade management. The system is designed to adapt to changing market environments while applying predefined risk controls."
    },
    {
        question: "IS MY MONEY SAFE?",
        answer: (
            <>
                Your trading capital remains inside your own broker account at all times.
                <br /><br />
                Lunar Wolf does not hold, manage, deposit, withdraw, or access client funds. The EA only receives permission required for automated trade execution.
            </>
        )
    },
    {
        question: "WHAT PLATFORM DOES LUNAR WOLF WORK ON?",
        answer: "LUNAR WOLF EA is currently designed to operate on supported MetaTrader 5 (MT5) broker environments."
    },
    {
        question: "IS PERFORMANCE GUARANTEED?",
        answer: (
            <>
                No, financial markets involve risk, and no trading system can guarantee profits or eliminate losses.
                <br /><br />
                Lunar Wolf is designed to prioritize structured execution, controlled exposure, and adaptive market behavior, but actual performance may vary depending on market conditions, broker execution quality, volatility, and user settings.
                <br /><br />
                Past performance does not guarantee future results.
            </>
        )
    },
    {
        question: "HOW DOES BROKER SELECTION WORK?",
        answer: (
            <>
                Lunar Wolf supports multiple broker environments to provide users with flexibility and reduce dependency on a single provider.
                <br /><br />
                Users choose and open their own broker account from supported options, complete verification directly with the broker, fund the account independently, and connect it to the Lunar Wolf system.
                <br /><br />
                This structure helps maintain user control while allowing flexibility in execution environments.
            </>
        )
    },
];

const rightFaqs = [
    {
        question: "DO I NEED TRADING EXPERIENCE TO USE IT?",
        answer: (
            <>
                No advanced trading experience is required.
                <br /><br />
                However, users should understand that automated trading still involves market risk and remain responsible for broker selection, capital allocation, and account decisions.
            </>
        )
    },
    {
        question: "HOW MUCH PROFIT CAN I EXPECT?",
        answer: (
            <>
                Trading outcomes vary depending on market conditions, broker execution, volatility, and account configuration.
                <br /><br />
                Past performance does not guarantee future results, and no specific return levels are promised.
            </>
        )
    },
    {
        question: " Does the EA operate 24/5?",
        answer: (
            <>
                LUNAR WOLF EA monitors markets during active forex trading sessions and executes only when predefined conditions are met.
                <br /><br />
                Continuous monitoring does not guarantee continuous trading activity.
            </>
        )
    },
    {
        question: "DOES LUNAR WOLF HOLD MY FUNDS?",
        answer: (
            <>
                No.
                <br /><br />
                Users trade exclusively through their own broker accounts. Lunar Wolf does not custody, transfer, or manage user capital.
            </>
        )
    },
    {
        question: "CAN RESULTS VARY ACROSS BROKERS?",
        answer: (
            <>
                Yes, Live trading performance can vary between brokers due to factors such as:
                <br /><br />
                • Execution speed
                <br />
                • Spread conditions
                <br />
                • Slippage
                <br />
                • Liquidity availability
                <br />
                • Server latency
                <br />
                • Market execution differences
                <br /><br />
                Because real-world conditions differ across broker environments, live outcomes may not exactly match historical simulations or performance shown elsewhere.
            </>
        )
    },
    {
        question: "WHAT RISKS SHOULD USERS UNDERSTAND?",
        answer: (
            <>
                Trading foreign exchange involves substantial risk and may not be suitable for every user.
                <br /><br />
                Key risks include:
                <br /><br />
                • Market volatility
                <br />
                • Drawdowns and losing periods
                <br />
                • Broker execution differences
                <br />
                • Spread expansion and slippage
                <br />
                • Liquidity changes
                <br />
                • Technical interruptions
                <br />
                • Historical performance limitations
                <br /><br />
                Users should only trade with capital they can afford to risk and should understand that losses are possible.
                <br /><br />
                Lunar Wolf is designed as a structured trading framework and not a guaranteed return product.

            </>
        )
    }
];

const FaqItem = ({ item, isOpen, onClick }) => {
    return (
        <div className={styles.mainFaq} onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className={styles.faqheader}>
                <h3>{item.question}</h3>
                <motion.div
                    className={styles.iconAlignment}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <DownIcon />
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className={styles.faqbody}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className={styles.spacing}>
                            <p>{item.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FaqSection({ bgblack }) {
    const [openIndex, setOpenIndex] = useState(null); // All FAQs closed by default

    return (
        <div className={classNames(styles.faqSection, bgblack ? styles.bgblack : "")}>
            <div className={styles.leftrightSpacing}>
                <div className={styles.title}>
                    <h2>
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        {leftFaqs.map((faq, idx) => (
                            <FaqItem
                                key={idx}
                                item={faq}
                                isOpen={openIndex === idx}
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        ))}
                    </div>
                    <div className={styles.items}>
                        {rightFaqs.map((faq, idx) => {
                            const actualIdx = idx + leftFaqs.length;
                            return (
                                <FaqItem
                                    key={actualIdx}
                                    item={faq}
                                    isOpen={openIndex === actualIdx}
                                    onClick={() => setOpenIndex(openIndex === actualIdx ? null : actualIdx)}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
