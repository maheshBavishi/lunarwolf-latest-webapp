'use client'
import React, { useState } from 'react'
import styles from './brokerageSharing.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Calculator from '../calculator';
const FlowChartImage = '/assets/images/flow-chart.png';
export default function BrokerageSharing() {
    const [activeTab, setActiveTab] = useState('profit');
    return (
        <div className={styles.brokerageSharing}>
            <div className={styles.title}>
                <h2>Brokerage Sharing
                </h2>
                <p>
                    Fixed commissions for every trader you refer, with earnings extending
                    up to 5 levels
                </p>
            </div>
            <div className={styles.tabCenter}>
                <div className={styles.tabGroup}>
                    <button
                        className={cn(styles.tabButton, activeTab === 'profit' && styles.active)}
                        onClick={() => setActiveTab('profit')}
                        aria-pressed={activeTab === 'profit'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.6286 14.6654H12.0013C12.3549 14.6654 12.6941 14.5249 12.9441 14.2748C13.1942 14.0248 13.3346 13.6857 13.3346 13.332V5.33203C13.335 5.121 13.2936 4.91198 13.2128 4.71701C13.132 4.52205 13.0135 4.34499 12.864 4.19603L10.472 1.80403C10.323 1.65414 10.1457 1.53525 9.95053 1.45424C9.75532 1.37322 9.54599 1.33169 9.33464 1.33203H4.0013C3.64768 1.33203 3.30854 1.47251 3.05849 1.72256C2.80844 1.97261 2.66797 2.31174 2.66797 2.66537V5.0067" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.33203 1.33203V4.66536C9.33203 4.84218 9.40227 5.01174 9.52729 5.13677C9.65232 5.26179 9.82189 5.33203 9.9987 5.33203H13.332" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.67699 7.67578C2.26924 8.03764 1.93976 8.47903 1.70878 8.97284C1.47781 9.46666 1.35021 10.0025 1.33384 10.5474C1.31746 11.0923 1.41264 11.6348 1.61354 12.1416C1.81444 12.6484 2.11682 13.1088 2.5021 13.4945C2.88739 13.8802 3.34744 14.183 3.85403 14.3845C4.36061 14.5859 4.90302 14.6817 5.44795 14.6659C5.99289 14.6501 6.52884 14.5231 7.0229 14.2926C7.51696 14.0622 7.9587 13.7331 8.32099 13.3258" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.9987 10.6673C5.82189 10.6673 5.65232 10.597 5.52729 10.472C5.40227 10.347 5.33203 10.1774 5.33203 10.0006V7.33393C5.33203 6.96593 5.63203 6.66193 5.99536 6.7226C6.81557 6.86051 7.57239 7.25068 8.1605 7.83879C8.74862 8.42691 9.13878 9.18372 9.2767 10.0039C9.33736 10.3666 9.03336 10.6673 8.66536 10.6673H5.9987Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span className={styles.tabLabel}>Flowchart</span>
                        {activeTab === 'profit' && <motion.div className={styles.activePill} layoutId="activeTab" />}
                    </button>

                    <button
                        className={cn(styles.tabButton, activeTab === 'brokerage' && styles.active)}
                        onClick={() => setActiveTab('brokerage')}
                        aria-pressed={activeTab === 'brokerage'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.0013 1.33203H4.0013C3.26492 1.33203 2.66797 1.92898 2.66797 2.66536V13.332C2.66797 14.0684 3.26492 14.6654 4.0013 14.6654H12.0013C12.7377 14.6654 13.3346 14.0684 13.3346 13.332V2.66536C13.3346 1.92898 12.7377 1.33203 12.0013 1.33203Z" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.33203 4H10.6654" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.668 9.33203V11.9987" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.668 6.66797H10.6746" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 6.66797H8.00667" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.33203 6.66797H5.3387" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 9.33203H8.00667" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.33203 9.33203H5.3387" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 12H8.00667" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.33203 12H5.3387" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span className={styles.tabLabel}>Calculator</span>
                        {activeTab === 'brokerage' && <motion.div className={styles.activePill} layoutId="activeTab" />}
                    </button>
                </div>
            </div>

            <div className={styles.contentArea}>
                {activeTab === 'profit' && (
                    <>
                        <div className='container-lg'>
                            <div className={styles.flowChartImage}>
                                <img src={FlowChartImage} alt='FlowChartImage' />
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'brokerage' && (
                    <>
                        <Calculator />
                    </>
                )}
            </div>


        </div>
    )
}
