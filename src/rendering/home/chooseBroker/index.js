'use client'
import React from 'react'
import { motion } from 'framer-motion';
import styles from './chooseBroker.module.scss';
const Multibankgroup = '/assets/images/multibankgroup.svg';
export default function ChooseBroker() {
    return (
        <div className={styles.chooseBroker}>
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
                    className={styles.title}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                >
                    <h2>
                        Choose Your Broker
                    </h2>
                    <p>
                        Select a trusted broker to power your automated trades.
                    </p>
                </motion.div>
                <motion.div 
                    className={styles.grid}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {
                        [...Array(8)].map((_, index) => {
                            return (
                                <motion.div 
                                    className={styles.items} 
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.95 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                                    }}
                                >
                                    <div className={styles.image}>
                                        <img src={Multibankgroup} alt='Multibankgroup' />
                                    </div>
                                    <div className={styles.details}>
                                        <button>
                                            Open Account with Multibank
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M4.66666 4.6665H11.3333V11.3332" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4.66666 11.3332L11.3333 4.6665" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}
