'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import styles from './whychoose.module.scss';
export default function Whychoose() {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            title: "PASSIVE INCOME ON AUTOPILOT",
            description: "Earn continuously, even when you're not trading",
            top: "55%", left: "10%",
            mobileTop: "40%", mobileLeft: "20%"
        },
        {
            title: "PROVEN ALGORITHMS",
            description: "Built on rigorous testing and market logic",
            top: "78%", left: "48%",
            mobileTop: "55%", mobileLeft: "80%"
        },
        {
            title: "SECURE AND TRANSPARENT",
            description: "Full control over your funds at all times",
            top: "72%", left: "75%",
            mobileTop: "75%", mobileLeft: "20%"
        },
        {
            title: "FLEXIBLE SCALABILITY",
            description: "Adaptable to various risk profiles and goals",
            top: "35%", left: "90%",
            mobileTop: "85%", mobileLeft: "70%"
        }
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 3000);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
            clearInterval(interval);
        };
    }, [features.length]);

    return (
        <div className={styles.whychoose}>
            <div className='' style={{ position: 'relative', height: '100%', minHeight: isMobile ? '600px' : 'auto' }}>
                <div className={styles.contentAlignment}>
                    <h2>
                        Why Choose Lunar Wolf?
                    </h2>
                    <p>
                        Transparent, Powerful, and Rewarding Trading Designed for You
                    </p>
                </div>

                {features.map((item, index) => {
                    const isActive = index === activeIndex;
                    const top = isMobile ? item.mobileTop : item.top;
                    const left = isMobile ? item.mobileLeft : item.left;
                    
                    return (
                        <div
                            key={index}
                            className={styles.dotContainer}
                            style={{ top, left }}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className={styles.dot} />

                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        className={styles.activeBorder}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 360 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{
                                            rotate: { repeat: Infinity, duration: 8, ease: "linear" },
                                            opacity: { duration: 0.3 },
                                            scale: { duration: 0.3 }
                                        }}
                                    />
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        className={styles.tooltip}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        style={
                                            isMobile 
                                                ? (parseInt(left) > 50 
                                                    ? { left: 'auto', right: '-10px', transform: 'none' } 
                                                    : { left: '-10px', transform: 'none' })
                                                : (parseInt(left) > 80 
                                                    ? { left: 'auto', right: 0, transform: 'none' } 
                                                    : { left: '50%', transform: 'translateX(-50%)' })
                                        }
                                    >
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
