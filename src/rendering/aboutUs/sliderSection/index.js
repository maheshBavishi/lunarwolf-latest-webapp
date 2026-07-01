'use client'

import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import styles from './sliderSection.module.scss';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

// Assets (Using the same paths as the original code)

const SmokeLg = "/assets/images/SmokeLg.webp";

const contents = [
    {
        id: 1,
        title: "Backtested Since 2015",
        desc: "Lunar Wolf’s razor-sharp senses are honed by rigorous backtesting for pinpoint structured EURUSD strategy logic.",
    },
    {
        id: 2,
        title: "Guided by Lunar Instincts",
        desc: "Adaptive EURUSD Strategy Logic, bringing out profit opportunities with the Adaptive Strategy.",
    },
    {
        id: 3,
        title: "Swift Data Processing",
        desc: "Similar to territory-scouting, our AI processes vast datasets in seconds to Identifies Trading Opportunities.",
    },
    {
        id: 4,
        title: "Lightning-Fast Strikes",
        desc: "When the moment is right, Executes Based on Strategy Rules.",
    },
    {
        id: 5,
        title: "No Upfront Subscription Fee",
        desc: "No entry fees and no hidden charges.",
    },
    {
        id: 6,
        title: "Relentless Market Tracking",
        desc: "Lunar Wolf never sleeps—it scans the forex market 24/5, ensuring you Continuously Monitors EURUSD Markets.",
    },
];

const SliderSection = forwardRef(({ onProgressChange }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const sectionRef = useRef(null);
    const autoplayTimer = useRef(null);
    const hasResetRef = useRef(false);
    const controls = useAnimation();
    const isInView = useInView(sectionRef, { amount: 0.3 });

    // Config
    const desktopCardWidth = 440;
    const desktopGap = 140;
    const mobileCardWidth = 220;
    const mobileGap = 30;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardWidth = isMobile ? (mobileCardWidth + mobileGap) : (desktopCardWidth + desktopGap);

    const currentIndexRef = useRef(0);
    useEffect(() => {
        currentIndexRef.current = currentIndex;
    }, [currentIndex]);

    const scrollTo = (index, fast = true) => {
        const targetX = -(index * cardWidth);
        const isResetting = index === 0 && currentIndexRef.current === contents.length - 1;
        setCurrentIndex(index);
        controls.start({
            x: targetX,
            transition: {
                duration: isResetting ? 1.6 : (fast ? 0.8 : 2.5),
                ease: isResetting ? "easeInOut" : (fast ? [0.25, 1, 0.5, 1] : "easeInOut")
            }
        });
        if (onProgressChange) {
            onProgressChange(index / (contents.length - 1));
        }
    };

    const nextSlide = (fast = true) => {
        const nextIndex = (currentIndexRef.current + 1) % contents.length;
        scrollTo(nextIndex, fast);
    };

    const prevSlide = () => {
        const prevIndex = (currentIndexRef.current - 1 + contents.length) % contents.length;
        scrollTo(prevIndex, true);
    };

    // Autoplay logic
    useEffect(() => {
        if (!isInView) {
            hasResetRef.current = false;
            if (autoplayTimer.current) clearInterval(autoplayTimer.current);
            return;
        }

        // Reset to 0 only on initial view entry
        if (!hasResetRef.current) {
            scrollTo(0, true);
            hasResetRef.current = true;
        }

        if (autoplayTimer.current) {
            clearInterval(autoplayTimer.current);
        }

        if (!isHovered) {
            autoplayTimer.current = setInterval(() => {
                nextSlide(false); // Auto-scroll is slow
            }, 5000);
        }

        return () => {
            if (autoplayTimer.current) clearInterval(autoplayTimer.current);
        };
    }, [isInView, isHovered, isMobile]);

    // Manual navigation resets autoplay
    const handleManualNav = (type, value) => {
        if (autoplayTimer.current) {
            clearInterval(autoplayTimer.current);
        }
        if (!isHovered && isInView) {
            autoplayTimer.current = setInterval(() => nextSlide(false), 5000);
        }

        if (type === 'next') {
            if (currentIndexRef.current < contents.length - 1) {
                nextSlide(true);
            }
        }
        else if (type === 'prev') {
            if (currentIndexRef.current > 0) {
                prevSlide();
            }
        }
        else if (type === 'click') {
            scrollTo(value, true);
        }
    };

    // Expose control to parent
    useImperativeHandle(ref, () => ({
        setProgress: (progress) => {
            if (isMobile) return;
            const targetIndex = Math.round(progress * (contents.length - 1));
            scrollTo(targetIndex, true);
        }
    }));

    return (
        <section className={styles.sliderSection} ref={sectionRef}>
            <div className={styles.contentContainer}>
                <div className={styles.leftContent}>
                    <h2>
                        What Lunar <br />
                        Wolf Brings <br />
                        For It's <br /> Members
                    </h2>

                    <div className={styles.navButtons}>
                        <button
                            onClick={() => handleManualNav('prev')}
                            disabled={currentIndex === 0}
                            className={currentIndex !== 0 ? styles.active : ''}
                            aria-label="Previous Slide"
                        >
                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 30L15 20L25 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={() => handleManualNav('next')}
                            disabled={currentIndex === contents.length - 1}
                            className={currentIndex !== contents.length - 1 ? styles.active : ''}
                            aria-label="Next Slide"
                        >
                            <svg style={{ transform: "rotate(180deg)" }} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                                <path d="M25 30L15 20L25 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={styles.sliderWrapper}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className={styles.sliderTrack}
                        animate={controls}
                    >
                        {contents.map((item, index) => (
                            <div
                                key={item.id}
                                className={styles.card}
                                style={{
                                    opacity: index === currentIndex ? 1 : 0.3,
                                    cursor: 'pointer'
                                }}
                                onClick={() => handleManualNav('click', index)}
                            >
                                <div className={styles.cardInner}>
                                    <div className={styles.cardNumber}>
                                        {String(item.id).padStart(2, '0')}
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

SliderSection.displayName = 'SliderSection';

export default SliderSection;
