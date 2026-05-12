'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './contentSection.module.scss';
import ProfitSharing from '../profitSharing';

export default function ContentSection() {
    const [activeTab, setActiveTab] = useState('profit');

    const tabs = [
        { id: 'profit', label: 'Profit Sharing' },
        { id: 'brokerage', label: 'Brokerage Sharing' },
    ];

    return (
        <div className={styles.contentSection}>
            <div className=''>
                <div className={styles.tabCenter}>
                    <div className={styles.tabGroup}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className={styles.tabLabel}>{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTabPill"
                                        className={styles.activePill}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.2,
                                            duration: 0.6
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.contentArea}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                        >
                            {activeTab === 'profit' && (
                                <ProfitSharing />
                            )}
                            {activeTab === 'brokerage' && (
                                <div className={styles.tabContent}>
                                    <h2>Brokerage Sharing</h2>
                                    <p>Details about brokerage sharing model...</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
