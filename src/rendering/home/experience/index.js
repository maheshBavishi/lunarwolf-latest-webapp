'use client'
import React, { useState, useEffect } from 'react'
import styles from './experience.module.scss';
import { motion } from 'framer-motion';
import InstinctsIcon from '@/icons/instinctsIcon';
import AdaptiveIcon from '@/icons/adaptiveIcon';
import AgileIcon from '@/icons/agileIcon';
import KnowledgeIcon from '@/icons/knowledgeIcon';
import Instincts from '@/icons/instincts';
import RequireIcon from '@/icons/requireIcon';
const DollarImage = '/assets/images/dollor-round.png';
export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        { Icon: InstinctsIcon, text: "AI - Powered Instincts" },
        { Icon: AdaptiveIcon, text: "Hyper Adaptive Trading" },
        { Icon: AgileIcon, text: "Swift and Agile" },
        { Icon: KnowledgeIcon, text: "Zero Trading Knowledge Required" },
        { Icon: Instincts, text: "AI - Powered Instincts" },
        { Icon: RequireIcon, text: "No Monitoring Required" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [features.length]);

    return (
        <div className={styles.experience}>
            <motion.div
                className={styles.grid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <motion.div
                    className={styles.items}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <div className={styles.content}>
                        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
                            Experience the
                        </motion.span>
                        <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
                            Power of algorithmic Trading
                        </motion.h2>
                        <motion.div
                            className={styles.round}
                            style={{ perspective: 1000 }}
                            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } }}
                        >
                            <motion.div
                                className={styles.dashedBorder}
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                            />
                            <img
                                src={DollarImage}
                                alt='DollarImage'
                            />
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    className={styles.items}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
                    }}
                >
                    {features.map((item, index) => {
                        const { Icon, text } = item;
                        const isActive = index === activeIndex;
                        return (
                            <motion.div
                                key={index}
                                className={styles.iconGrid}
                                variants={{
                                    hidden: { opacity: 0, x: 30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                            >
                                <motion.div
                                    animate={{ opacity: isActive ? 1 : 0.4 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Icon />
                                </motion.div>
                                <motion.span
                                    animate={{ opacity: isActive ? 1 : 0.4 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {text}
                                </motion.span>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}
