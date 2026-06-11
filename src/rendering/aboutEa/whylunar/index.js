'use client'
import React from 'react'
import styles from './whylunar.module.scss';
import Line from '@/icons/line';
import { motion } from 'framer-motion';

const Exposure   = '/assets/icons/exposure.svg';
const Protection = '/assets/icons/Protection.svg';
const Recovery   = '/assets/icons/Recovery.svg';
const Stability  = '/assets/icons/Stability.svg';

// ── Variants ─────────────────────────────────────────────────────────────────

const fadeSlideLeft = {
    hidden: { opacity: 0, x: -48, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeSlideUp = {
    hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const titleContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.05 },
    },
};

const gridContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.14, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 56, scale: 0.94, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardHover = {
    y: -8,
    scale: 1.03,
    boxShadow: '0 0 32px 4px rgba(0, 221, 251, 0.18), 0 8px 32px rgba(0,0,0,0.4)',
    borderColor: 'rgba(51, 172, 224, 0.55)',
    transition: { type: 'spring', stiffness: 280, damping: 20 },
};

const cardTap = { scale: 0.98 };

const iconVariants = {
    hidden: { opacity: 0, x: 20, y: -20 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
};

const iconHover = {
    rotate: [0, -6, 6, -3, 0],
    scale: 1.12,
    transition: { duration: 0.5, ease: 'easeInOut' },
};

const bottomTextVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
};

// ── Card Data ─────────────────────────────────────────────────────────────────

const cards = [
    {
        icon: Exposure,
        alt: 'Exposure',
        title: 'Controlled Exposure',
        body: 'Position sizing and scaling are designed to support disciplined risk management.',
    },
    {
        icon: Protection,
        alt: 'Protection',
        title: 'Drawdown-Aware Protection',
        body: 'Risk-control mechanisms are integrated to help manage challenging market environments.',
    },
    {
        icon: Recovery,
        alt: 'Recovery',
        title: 'Recovery-Focused Management',
        body: 'Recovery logic is designed to adapt to market behavior rather than rely on uncontrolled averaging.',
    },
    {
        icon: Stability,
        alt: 'Stability',
        title: 'Long-Term Stability Focus',
        body: 'The framework is optimized for consistency, adaptability, and operational discipline over time.',
    },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Whylunar() {
    return (
        <div className={styles.whylunar}>
            <div className='container-lg'>

                {/* ── Title Block ── */}
                <motion.div
                    className={styles.title}
                    variants={titleContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 variants={fadeSlideLeft}>
                        Why <span> Lunar Wolf EA </span> is different
                    </motion.h2>
                    <motion.p variants={fadeSlideUp}>
                        LUNAR WOLF EA is built around a stability-first philosophy that prioritizes controlled exposure and long-term consistency over aggressive short-term
                        profit targets.
                    </motion.p>
                </motion.div>

                {/* ── Cards Grid ── */}
                <motion.div
                    className={styles.grid}
                    variants={gridContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {cards.map(({ icon, alt, title, body }) => (
                        <motion.div
                            key={alt}
                            className={styles.items}
                            variants={cardVariants}
                            whileHover={cardHover}
                            whileTap={cardTap}
                        >
                            {/* Corner icon with drift-in + wiggle on hover */}
                            <motion.div
                                className={styles.iconAlignment}
                                variants={iconVariants}
                                whileHover={iconHover}
                            >
                                <img src={icon} alt={alt} />
                            </motion.div>

                            <div className={styles.relative}>
                                <motion.h2
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                                >
                                    {title}
                                </motion.h2>

                                {/* Line animates its width from 0 → full */}
                                <motion.div
                                    className={styles.line}
                                    initial={{ scaleX: 0, originX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                                >
                                    <Line />
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                >
                                    {body}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Bottom Text ── */}
                <motion.div
                    className={styles.bottomText}
                    variants={bottomTextVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p>
                        LUNAR WOLF EA is not designed to chase unrealistic returns. It is designed to operate within a structured and adaptive framework that prioritizes
                        risk awareness, disciplined execution, and long-term market participation.
                    </p>
                </motion.div>

            </div>
        </div>
    )
}
