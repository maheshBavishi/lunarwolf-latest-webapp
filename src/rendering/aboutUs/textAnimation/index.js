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
        "At Lunar Wolf, we built a structured algorithmic trading ecosystem designed around disciplined execution, transparency, and long-term adaptability.",
        "LUNAR WOLF+ operates through user-controlled broker accounts and is designed specifically around a structured EURUSD framework supported by historical analysis and real-market observation. Rather than relying on emotional decision-making or aggressive short-term strategies, our approach focuses on controlled exposure, market-aware execution, and continuous refinement over time.",
        "Our objective is not to simplify trading through unrealistic promises, but to provide users with access to a more structured execution environment where automation supports consistency while users remain fully in control of their capital, broker selection, and trading decisions. We believe transparency, risk awareness, and operational discipline create stronger long-term outcomes than short-term hype."
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

