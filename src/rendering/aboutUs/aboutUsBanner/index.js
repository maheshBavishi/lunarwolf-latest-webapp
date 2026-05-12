"use client";

import React from 'react';
import styles from './aboutUsBanner.module.scss';
import RightIcon from '@/icons/rightIcon';
import { motion } from 'framer-motion';

const MoonImage = '/assets/images/moon.webp';
const ThreeWolfImage = '/assets/images/three-wolf.webp';

export default function AboutUsBanner() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    const wolfVariants = {
        hidden: { y: 200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.6
            }
        }
    };

    return (
        <div className={styles.aboutusBanner}>
            <motion.div
                className={styles.moongImage}
                initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 1.5, ease: "easeOut" }
                }}
            >
                <motion.img
                    src={MoonImage}
                    alt='MoonImage'
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            <div className={styles.topAlignment}>
                <motion.div
                    className='container'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h1 variants={itemVariants}>
                        MEET THE LUNAR WOLVES
                    </motion.h1>
                    <motion.p variants={itemVariants}>
                        Where Smart Algorithms Chase Smarter Profits.
                        Hunt Profits
                    </motion.p>
                    <motion.div className={styles.buttonDesign} variants={itemVariants}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hunt Profits
                            <RightIcon />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className={styles.wolfAlignment}
                variants={wolfVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <img src={ThreeWolfImage} alt='ThreeWolfImage' />
            </motion.div>
        </div>
    );
}
