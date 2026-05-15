'use client'
import React, { useEffect, useState } from 'react';
import styles from './textAnimation.module.scss';
import { motion, useTransform } from 'framer-motion';

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.3, 1]);
    const color = useTransform(progress, range, ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 1)"]);

    return (
        <span style={{ display: 'inline-block', marginRight: '0.25em' }}>
            <motion.span style={{ opacity, color }}>
                {children}
            </motion.span>
        </span>
    );
};

export default function TextAnimation({ scrollProgress }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const paragraphs = [
        "At Lunar Wolf, we've built a next-generation trading bot that makes forex trading smarter, faster, and stress-free. Powered by advanced algorithms, the bot executes trades automatically, and removes emotional decision-making from the process.",
        "Our goal is simple, to help traders of all levels earn consistently without the complexity of manual trading. With zero setup hassle and no fees until you profit, Lunar Wolf puts automation and transparency at the core of every trade.",
        "What truly sets Lunar Wolf apart is its one-of-a-kind referral system, the first and largest of its kind in automated trading. This model transforms every user into a potential partner, rewarding you not only for your own results but also for helping others join and succeed. It's more than a bonus program, it's a built-in growth engine that turns your network into lasting income and empowers the entire community to rise together."
    ];

    const allWords = paragraphs.join(" ").split(" ");
    let globalWordIndex = 0;

    return (
        <div className={styles.textAnimation}>
            <div className={styles.bgShadow + " " + styles.bottomLeft}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%'
                }} />
            </div>
            <div className={styles.textWrapper}>
                <div className='container'>
                    {paragraphs.map((p, pIdx) => {
                        if (isMobile) {
                            return (
                                <motion.p
                                    key={pIdx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: pIdx * 0.1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                >
                                    {p}
                                </motion.p>
                            );
                        }

                        const words = p.split(" ");
                        return (
                            <p key={pIdx} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {words.map((word, i) => {
                                    const start = globalWordIndex / allWords.length;
                                    const end = (globalWordIndex + 1) / allWords.length;
                                    globalWordIndex++;

                                    return (
                                        <Word key={i} progress={scrollProgress} range={[start, end]}>
                                            {word}
                                        </Word>
                                    );
                                })}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

