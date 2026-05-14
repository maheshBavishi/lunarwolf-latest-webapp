'use client'
import React, { useRef } from 'react'
import styles from './marketFlow.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
    {
        year: '2020',
        label: 'THE BEGINNING',
        title: 'Endless testing. Real failures. Genuine improvement.',
        desc: [
            'The EA went through round after round of backtesting across 10 years of historical Forex data. Strategies were built, broke, and rebuilt.',
            "The team didn't chase big wins. They chased stability. When backtests finally showed consistent positive results, they put in real capital and watched it perform under live market conditions.",
        ],
        align: 'right',
    },
    {
        year: '2022',
        label: 'THE PIVOT',
        title: 'Ryan\'s idea: "Stop trading manually. Build an EA."',
        desc: [
            'After burning through existing Expert Advisors that promised high returns but delivered high risk and zero stability, the team decided to build their own.',
            'Ryan led the charge. He taught himself MQL coding, dissected risk management frameworks, and obsessed over the one gap no product in the market was filling: consistent, protected growth.',
        ],
        align: 'left',
    },
    {
        year: '2022-23',
        label: 'THE GRIND',
        title: 'Endless testing. Real failures. Genuine improvement.',
        desc: [
            'The EA went through round after round of backtesting across 10 years of historical Forex data. Strategies were built, broke, and rebuilt.',
            "The team didn't chase big wins. They chased stability. When backtests finally showed consistent positive results, they put in real capital and watched it perform under live market conditions.",
        ],
        align: 'right',
    },
    {
        year: '2023',
        label: 'PROOF OF CONCEPT',
        title: 'Not theory. Real proof.',
        desc: [
            'Live accounts showed stable, repeatable profits averaging 510% per month. The kind of number that doesnt make headlines but does change lives.',
            'Quietly, reliably, without blowing an account on a single bad trade.',
            'Confidence in the system was no longer assumed. It was earned.',
        ],
        align: 'left',
    },
    {
        year: '2024',
        label: 'EA GOES LIVE',
        title: 'The EA launches. Noah adds a second income stream.',
        desc: [
            'The Expert Advisor went live for the first time. Not as a rushed product, but as a system that had earned its place through years of testing and live validation.',
            "Alongside it, Noah introduced the referral income model: a structure where users aren't just clients, they're partners. Automated trading on one side. Community-powered growth on the other. This was no longer an experiment. It was a system.",
        ],
        align: 'right',
    },
    {
        year: 'NOW',
        label: 'INFRASTRUCTURE & ECOSYSTEM',
        title: 'The right broker. The right infrastructure. The right ecosystem.',
        desc: [
            'With the EA validated, the focus shifted to building the full foundation. After evaluating multiple brokers, the team selected a regulated, reputed partner that ensures smooth order execution, tight spreads, and a stable environment for the EA to operate in.',
            "Every layer has been chosen with one filter: does this protect and grow the client's capital? The result is not just a trading bot. It's a complete ecosystem: automated income, referral earnings, and a community that grows together.",
        ],
        align: 'left',
    },
];

const TimelineRenderer = ({ active, isMobile = false }) => {
    return (
        <div className={styles.renderer}>
            {timelineData.map((item, i) => {
                const isRight = item.align === 'right';
                const isFirst = i === 0;
                const isLast = i === timelineData.length - 1;

                return (
                    <div key={i} className={styles.timelineRow}>
                        <div className={`${styles.rowInner} ${i > 0 ? styles.rowOverlap : ''}`}>

                            {/* ── Mobile vertical line & dot ── */}
                            <div className={`${styles.mobileLine} ${active ? styles.active : ''}`} />
                            <div className={`${styles.mobileDot} ${active ? styles.active : ''}`} />

                            {/* ── Desktop concentric tracing lines ── */}
                            <div className={styles.desktopLines}>
                                {isRight ? (
                                    <>
                                        {isFirst ? (
                                            <div className={`${styles.fadeLineTop} ${styles.fadeRight} ${active ? styles.active : ''}`} />
                                        ) : (
                                            <div className={`${styles.quarterTR} ${active ? styles.active : ''}`} />
                                        )}
                                        <div className={`${styles.quarterBR} ${active ? styles.active : ''}`} />
                                    </>
                                ) : (
                                    <>
                                        <div className={`${styles.quarterTL} ${active ? styles.active : ''}`} />
                                        {isLast ? (
                                            <div className={`${styles.fadeLineBottom} ${styles.fadeLeft} ${active ? styles.active : ''}`} />
                                        ) : (
                                            <div className={`${styles.quarterBL} ${active ? styles.active : ''}`} />
                                        )}
                                    </>
                                )}
                            </div>

                            {/* ── Desktop glowing dot ── */}
                            <div className={`${styles.desktopDot} ${isRight ? styles.dotRight : styles.dotLeft} ${active ? styles.active : ''}`} />

                            {/* ── Pill card ── */}
                            <motion.div
                                style={{ willChange: 'transform, opacity' }}
                                initial={active ? false : { opacity: 0, y: 50 }}
                                whileInView={active ? undefined : { opacity: 1, y: 0 }}
                                viewport={active ? undefined : { once: true, amount: 0.1 }}
                                transition={active ? undefined : { duration: 1, ease: 'easeOut' }}
                                className={`${styles.pill} ${isRight ? styles.pillRight : styles.pillLeft} ${active ? styles.pillActive : ''}`}
                            >
                                {/* Text content */}
                                <div className={`${styles.pillText} ${isRight ? styles.textRight : styles.textLeft}`}>
                                    <h3 className={styles.pillTitle}>{item.title}</h3>
                                    <div className={styles.descList}>
                                        {item.desc.map((paragraph, pIdx) => (
                                            <p key={pIdx} className={styles.descItem}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Circle with year */}
                                <div className={styles.pillCircle}>
                                    <div className={styles.circleOverlay} />
                                    <span className={styles.yearText}>{item.year}</span>
                                    <span className={styles.labelText}>{item.label}</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default function MarketFlow() {
    const trackRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ['start 65%', 'end 65%'],
    });

    const animatedHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div className={styles.marketFlow}>
            <div className='container-lg'>
                <div className={styles.title}>
                    <h2>
                        The market doesn't fail people. Emotions do. We built the system we wish we'd had on day one
                    </h2>
                </div>
            </div>

            {/* Timeline */}
            <div className={styles.timelineContainer} ref={trackRef}>
                <div className={styles.timelineTrack}>
                    {/* Base inactive layer */}
                    <TimelineRenderer active={false} />

                    {/* Masked active blue layer — tracing animation */}
                    <motion.div
                        className={styles.activeOverlay}
                        style={{ height: animatedHeight }}
                    >
                        <TimelineRenderer active={true} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
