'use client'
import React, { useRef } from 'react'
import styles from './marketFlow.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
    {
        year: '2020',
        label: 'THE BEGINNING',
        title: 'One market. Countless lessons. One goal.',
        desc: [
            'COVID-19 changed the world and encouraged many people to explore alternative sources of income. We were among them.',
            'We entered the Forex market with hope, curiosity, and eventually real capital. What followed was manual trading, continuous losses, and the slow erosion of confidence that many retail traders experience. Those early challenges became the foundation of our learning journey and ultimately inspired us to search for a better way forward.',
        ],
        align: 'right',
    },
    {
        year: '2022',
        label: 'THE PIVOT',
        title: 'One simple realization: Stop trading manually. Build a better EA.',
        desc: [
            'After experiencing Expert Advisors that promised high returns but delivered high risk and poor stability, we decided to create our own.',
            'We immersed ourselves in MQL development, studied risk management frameworks, and analyzed countless trading systems. Our focus was on solving what we believed was missing from the market: a framework built around consistency, controlled risk, and long-term sustainability rather than short-term hype.',
            'The goal was not to create another EA. The goal was to build a more disciplined and reliable approach to automated trading.',
        ],
        align: 'left',
    },
    {
        year: '2022-23',
        label: 'THE GRIND',
        title: 'Endless testing. Real failures. Genuine improvement.',
        desc: [
            'The EA went through round after round of backtesting using years of historical Forex data. Strategies were built, tested, refined, and rebuilt as we searched for a more stable and repeatable approach.',
            'We didn\'t chase big wins. We chased stability. As the results became more consistent, we moved beyond simulations and began validating the framework under live market conditions.',
            'Every challenge became a lesson. Every setback became an opportunity to improve. The goal was never perfection—it was continuous refinement.',
        ],
        align: 'right',
    },
    {
        year: '2023',
        label: 'PROOF OF CONCEPT',
        title: 'Not theory. Real-world validation.',
        desc: [
            'Years of development, testing, and refinement began producing more consistent and repeatable results under live market conditions.',
            'Confidence in the framework was no longer based on assumptions or historical simulations alone. It was built through observation, validation, and continuous improvement.',
            'What started as an idea was becoming a system capable of operating in real market environments.',
        ],
        align: 'left',
    },
    {
        year: '2024',
        label: 'EA GOES LIVE',
        title: 'Years of development become a live ecosystem.',
        desc: [
            'LUNAR WOLF EA became available to users—not as a rushed product, but as a framework that had earned its place through years of testing, validation, and refinement.',
            'Alongside the EA, we introduced a referral-based growth model designed to reward community participation and network expansion. Automated trading on one side. Community-driven growth on the other.',
            'What began as a development project had evolved into a structured trading ecosystem.',
        ],
        align: 'right',
    },
    {
        year: 'NOW',
        label: 'INFRASTRUCTURE & ECOSYSTEM',
        title: 'Building beyond the EA.',
        desc: [
            'With the framework validated and operating in live market environments, the focus expanded beyond strategy development to creating a stronger ecosystem around it.',
            'We invested in infrastructure, broker integrations, operational processes, user support systems, and performance monitoring tools designed to improve the overall user experience. Every decision was guided by one principle: creating a more stable, transparent, and scalable environment for long-term growth.',
            'Today, LUNAR WOLF is more than an algorithmic trading framework. It is an evolving ecosystem built around automation, transparency, community participation, and continuous improvement.',
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
