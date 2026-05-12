import React from 'react'
import styles from './iconTextCard.module.scss';
import BrainIcon from '@/icons/brainIcon';
import LeftRightIcon from '@/icons/leftRightIcon';
import MarketIcon from '@/icons/marketIcon';
export default function IconTextCard() {
    return (
        <div className={styles.iconTextCard}>
            <div className='container-lg'>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        <BrainIcon />
                        <p>
                            To transform forex trading into a fair, efficient, and
                            opportunity-rich environment through the consistent precision of Expert Advisor automation.
                        </p>
                    </div>
                    <div className={styles.items}>
                        <LeftRightIcon />
                        <p>
                            To transform forex trading into a fair, efficient, and
                            opportunity-rich environment through the consistent precision of Expert Advisor automation.
                        </p>
                    </div>
                    <div className={styles.items}>
                        <MarketIcon />
                        <p>
                            To build the largest global trading network where shared
                            achievement, reliability, and collaboration shape a new standard of financial empowerment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
