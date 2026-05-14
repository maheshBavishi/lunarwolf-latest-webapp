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
        title: "Trained to hunt since 2015",
        desc: "Lunar Wolf’s razor-sharp senses are honed by rigorous backtesting for pinpoint profit hunting tactics.",
    },
    {
        id: 2,
        title: "Guided by Lunar Instincts",
        desc: "Our AI hunts where no one dare venture, bringing out profit opportunities with the Martingale Strategy.",
    },
    {
        id: 3,
        title: "Swift Data Processing",
        desc: "Similar to territory-scouting, our AI processes vast datasets in seconds to find the best trades.",
    },
    {
        id: 4,
        title: "Lightning-Fast Strikes",
        desc: "When the moment is right, it strikes instantly to maximize your gains.",
    },
    {
        id: 5,
        title: "No-cost Joining",
        desc: "No entry fees, no commissions, and no hidden charges. You keep what you earn.",
    },
    {
        id: 6,
        title: "Relentless Market Tracking",
        desc: "Lunar Wolf never sleeps—it scans the forex market 24/5, ensuring you never miss a profitable opportunity.",
    },
];

const SliderSection = forwardRef(({ onProgressChange }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef(null);
    const autoplayTimer = useRef(null);
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
        setCurrentIndex(index);
        controls.start({
            x: targetX,
            transition: {
                duration: fast ? 0.6 : 2.5,
                ease: fast ? "easeOut" : "easeInOut"
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
        if (isInView) {
            // Initial reset when entering view
            scrollTo(0, true);

            // Start autoplay after a small delay
            const delay = setTimeout(() => {
                autoplayTimer.current = setInterval(() => {
                    nextSlide(false); // Auto-scroll is slow
                }, 3000);
            }, 2000);

            return () => {
                clearTimeout(delay);
                if (autoplayTimer.current) clearInterval(autoplayTimer.current);
            };
        } else {
            if (autoplayTimer.current) clearInterval(autoplayTimer.current);
        }
    }, [isInView, isMobile]);

    // Manual navigation resets autoplay
    const handleManualNav = (type, value) => {
        if (autoplayTimer.current) {
            clearInterval(autoplayTimer.current);
            autoplayTimer.current = setInterval(() => nextSlide(false), 3000);
        }

        if (type === 'next') nextSlide(true);
        else if (type === 'prev') prevSlide();
        else if (type === 'click') scrollTo(value, true);
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
            <div className={styles.bgSmoke}>
                <Image
                    src={SmokeLg}
                    alt="Background Smoke"
                    fill
                    className="object-cover"
                />
            </div>

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
                            className={styles.active} // Keep it always styled as active since it loops
                            aria-label="Previous Slide"
                        >
                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 30L15 20L25 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={() => handleManualNav('next')}
                            className={styles.active} // Keep it always styled as active since it loops
                            aria-label="Next Slide"
                        >
                            <svg style={{ transform: "rotate(180deg)" }} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                                <path d="M25 30L15 20L25 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={styles.sliderWrapper}>
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
