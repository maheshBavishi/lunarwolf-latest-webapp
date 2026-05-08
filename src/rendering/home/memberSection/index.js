'use client'
import React from 'react'
import { motion } from 'framer-motion';
import styles from './memberSection.module.scss';
const Trained = '/assets/images/Trained.png';
const Guided = '/assets/images/Guided.png';
const Nocost = '/assets/images/No-cost.png';
const Relentless = '/assets/images/Relentless.png';

export default function MemberSection() {
    const memberFeatures = [
        {
            title: "Trained to hunt since 2015",
            description: "Lunar Wolf’s razor-sharp senses are honed by rigorous backtesting for pinpoint profit hunting tactics.",
            image: Trained
        },
        {
            title: "Guided by Lunar Instincts",
            description: "Our AI hunts where no one dare venture, bringing out profit opportunities with the Martingale Strategy.",
            image: Guided
        },
        {
            title: "No-cost Joining",
            description: "No entry fees, no commissions, and no hidden charges. You keep what you earn.",
            image: Nocost
        },
        {
            title: "Relentless Market Tracking",
            description: "Lunar Wolf never sleeps, it scans the forex market 24/5, ensuring you never miss a profitable opportunity.",
            image: Relentless
        }
    ];

    return (
        <div className={styles.memberSection}>
            <motion.div 
                className='container'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                <motion.div 
                    className={styles.textstyle}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                >
                    <h2>
                        What Lunar Wolf brings for it’s members
                    </h2>
                    <p>
                        Transparent, Powerful, and Rewarding Trading Designed for YouTransparent, Powerful, and Rewarding Trading Designed for YouTransparent, Powerful, and Rewarding Trading
                        Designed for You
                    </p>
                </motion.div>
                <motion.div 
                    className={styles.grid}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    {memberFeatures.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.items}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                                hover: { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.03)", borderColor: "rgba(255, 255, 255, 0.4)", borderRadius: "12px", cursor: "pointer" }
                            }}
                            whileHover="hover"
                            style={{ overflow: "hidden" }} // Prevents inner image scaling from spilling out if it has rounded corners
                        >
                            <h3>
                                {item.title}
                            </h3>
                            <p>
                                {item.description}
                            </p>
                            <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
                                <motion.img 
                                    src={item.image} 
                                    alt={item.title} 
                                    variants={{
                                        hover: { scale: 1.05 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}
