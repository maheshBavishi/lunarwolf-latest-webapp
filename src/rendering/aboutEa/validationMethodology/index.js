'use client'
import React from 'react'
import styles from './validationMethodology.module.scss';
import { motion } from 'framer-motion';

// ── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: -20, filter: 'blur(5px)' },
    visible: { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)', 
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)', 
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: -15, filter: 'blur(2px)' },
    visible: { 
        opacity: 1, 
        x: 0, 
        filter: 'blur(0px)', 
        transition: { duration: 0.5, ease: 'easeOut' } 
    }
};

const slideRightVariants = {
    hidden: { opacity: 0, x: -40, filter: 'blur(5px)' },
    visible: { 
        opacity: 1, 
        x: 0, 
        filter: 'blur(0px)', 
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } 
    }
};

const slideLeftVariants = {
    hidden: { opacity: 0, x: 40, filter: 'blur(5px)' },
    visible: { 
        opacity: 1, 
        x: 0, 
        filter: 'blur(0px)', 
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } 
    }
};

const ulVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
};

// ── Component ──────────────────────────────────────────────────────────────

export default function ValidationMethodology() {
    return (
        <div className={styles.validationMethodology}>
            <div className='container-sm5'>
                
                {/* Title */}
                <motion.div 
                    className={styles.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={titleVariants}
                >
                    <h2>
                        Development & Validation Methodology
                    </h2>
                </motion.div>

                {/* Main Grid */}
                <motion.div 
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {/* Left Column */}
                    <div className={styles.items}>
                        <motion.div variants={fadeUpVariants}>
                            <h2>
                                Intro
                            </h2>
                            <p>
                                LUNAR WOLF+ is continuously refined through a structured EURUSD-focused development and validation process designed
                                to prioritize stability, adaptability, and long-term operational consistency.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUpVariants}>
                            <h3>
                                Validation Process Includes
                            </h3>
                            <motion.ul variants={ulVariants}>
                                <motion.li variants={listItemVariants}>Multi-Year EURUSD Historical Analysis</motion.li>
                                <motion.li variants={listItemVariants}>Year-by-Year Backtesting Validation</motion.li>
                                <motion.li variants={listItemVariants}>Real Tick Market Simulation</motion.li>
                                <motion.li variants={listItemVariants}>Volatility-Cycle Testing</motion.li>
                                <motion.li variants={listItemVariants}>Trending & Ranging Market Evaluation</motion.li>
                                <motion.li variants={listItemVariants}>Stability-Focused Optimization</motion.li>
                                <motion.li variants={listItemVariants}>Recovery Behavior Analysis</motion.li>
                                <motion.li variants={listItemVariants}>Stress-Condition Evaluation</motion.li>
                            </motion.ul>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className={styles.items}>
                        <motion.div variants={fadeUpVariants}>
                            <h2>
                                Real Tick Testing
                            </h2>
                            <p>
                                Testing is performed using Every Tick Based on Real Ticks with low-latency execution modeling to
                                create a more realistic simulation environment.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUpVariants}>
                            <h3>
                                What We Evaluate
                            </h3>
                            <motion.ul variants={ulVariants}>
                                <motion.li variants={listItemVariants}>Entry Timing</motion.li>
                                <motion.li variants={listItemVariants}>Recovery Behavior</motion.li>
                                <motion.li variants={listItemVariants}>Trade Spacing</motion.li>
                                <motion.li variants={listItemVariants}>Volatility Response</motion.li>
                                <motion.li variants={listItemVariants}>Basket Management Logic</motion.li>
                                <motion.li variants={listItemVariants}>Adaptive Execution Structure</motion.li>
                            </motion.ul>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Secondary Grid */}
                <motion.div 
                    className={styles.secgrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <motion.div 
                        className={styles.secgridItems}
                        variants={slideRightVariants}
                    >
                        <h3>
                            Continuous Validation
                        </h3>
                        <p>
                            Selected configurations continue to undergo stress testing, latency simulations, slippage-aware testing, and market-cycle analysis to evaluate robustness
                            under changing market conditions.
                        </p>
                    </motion.div>
                    <motion.div 
                        className={styles.secgridItems}
                        variants={slideLeftVariants}
                    >
                        <p>
                            The objective is not simply finding the highest historical profit curve, but identifying more stable and repeatable behavior across 
                            different market environments.
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    )
}
