'use client'
import React, { useState, useEffect, useCallback } from 'react'
import styles from './ourMission.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
    {
        label: 'OUR VISION',
        text: 'Our vision is to revolutionise the forex trading landscape through cutting-edge AI technology, empowering individuals and businesses to achieve financial success with ease, transparency, and reliability.',
    },
    {
        label: 'OUR MISSION',
        text: 'To build a structured algorithmic trading ecosystem that supports disciplined execution, transparency, and long-term adaptability through responsible automation and user-controlled trading environments.',
    }
];

export default function OurMission() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-switch every 5 seconds (slower than original 3 seconds)
    const nextTab = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, []);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(nextTab, 4000);
        return () => clearInterval(interval);
    }, [activeIndex, isHovered, nextTab]);

    // Click handler — switch tab and reset timer
    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <motion.div
            className={styles.ourMission}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='container-lg'>
                <div className={styles.textgrid}>
                    {/* Tab headings */}
                    <div className={styles.tabHeadings}>
                        {tabs.map((tab, index) => (
                            <motion.h2
                                key={tab.label}
                                className={activeIndex === index ? styles.active : ''}
                                onClick={() => handleClick(index)}
                                animate={{ opacity: activeIndex === index ? 1 : 0.3 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                whileHover={{ opacity: activeIndex === index ? 1 : 0.6 }}
                            >
                                {tab.label}
                            </motion.h2>
                        ))}
                    </div>

                    {/* Tab content with crossfade */}
                    <div className={styles.tabContent}>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeIndex}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                            >
                                {tabs[activeIndex].text}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
