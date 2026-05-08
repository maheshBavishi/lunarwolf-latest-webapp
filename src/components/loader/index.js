'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './loader.module.scss';

const Logo = '/assets/logo/loader-logo.png';

export default function Loader() {
    const [phase, setPhase] = useState('center'); // 'center' → 'move' → 'done'

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // Phase 1: Logo visible at center (0 → 2s)
        // Phase 2: Logo moves to top-left & shrinks (2s → 3.2s)
        const moveTimer = setTimeout(() => {
            setPhase('move');
        }, 2000);

        // Phase 3: Loader exits (3.5s)
        const doneTimer = setTimeout(() => {
            setPhase('done');
            document.body.style.overflow = '';
        }, 3500);

        return () => {
            clearTimeout(moveTimer);
            clearTimeout(doneTimer);
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <motion.div
                    className={styles.loader}
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.6,
                            ease: [0.76, 0, 0.24, 1],
                        },
                    }}
                >
                    {/* Subtle blue glow behind logo */}
                    <motion.div
                        className={styles.glowOrb}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={
                            phase === 'center'
                                ? {
                                    opacity: [0, 0.4, 0.2, 0.4],
                                    scale: [0.5, 1.2, 1, 1.2],
                                }
                                : {
                                    opacity: 0,
                                    scale: 0.3,
                                }
                        }
                        transition={
                            phase === 'center'
                                ? {
                                    duration: 2.5,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                }
                                : {
                                    duration: 0.8,
                                    ease: 'easeOut',
                                }
                        }
                    />

                    {/* Logo: center → top-left animation */}
                    <motion.img
                        src={Logo}
                        alt="Lunar Wolf"
                        className={styles.logo}
                        initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
                        animate={
                            phase === 'center'
                                ? {
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                    y: 0,
                                }
                                : {
                                    opacity: 1,
                                    scale: 0.4,
                                    x: 'calc(-50vw + 70px)',
                                    y: 'calc(-50vh + 40px)',
                                }
                        }
                        transition={
                            phase === 'center'
                                ? {
                                    duration: 1.2,
                                    ease: [0.34, 1.56, 0.64, 1],
                                }
                                : {
                                    duration: 1.0,
                                    ease: [0.65, 0, 0.35, 1],
                                }
                        }
                    />

                    {/* Pulsing ring */}
                    <motion.div
                        className={styles.pulseRing}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={
                            phase === 'center'
                                ? {
                                    opacity: [0, 0.5, 0],
                                    scale: [0.5, 2, 2.5],
                                }
                                : {
                                    opacity: 0,
                                    scale: 0,
                                }
                        }
                        transition={
                            phase === 'center'
                                ? {
                                    duration: 2,
                                    ease: 'easeOut',
                                    repeat: Infinity,
                                    repeatDelay: 0.5,
                                    delay: 0.5,
                                }
                                : {
                                    duration: 0.4,
                                }
                        }
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
