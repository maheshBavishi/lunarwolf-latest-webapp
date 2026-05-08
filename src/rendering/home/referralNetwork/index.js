import React from 'react'
import styles from './referralNetwork.module.scss';
export default function ReferralNetwork() {
    return (
        <div className={styles.referralNetwork}>
            <div className='container'>
                <div className={styles.title}>
                    <h2>
                        Earn More As your Referral Network Earns
                    </h2>
                    <p>
                        At Lunar Wolf, our exclusive networking-based referral program lets you earn beyond your trading returns by building your own network. Choose from
                        two earning options: Profit Sharing & IB Network to maximize your income.
                    </p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        <p>
                            Join Profit Sharing
                        </p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.items}>
                        <p>
                            Become an IB Partner
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
