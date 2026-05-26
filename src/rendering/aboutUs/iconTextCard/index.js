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
                            To develop adaptive trading frameworks through
                            continuous refinement, historical validation, and structured market execution principles.

                        </p>
                    </div>
                    <div className={styles.items}>
                        <LeftRightIcon />
                        <p>
                            To provide users with a more disciplined trading experience through
                            automation designed around consistency, operational structure, and risk awareness.
                        </p>
                    </div>
                    <div className={styles.items}>
                        <MarketIcon />
                        <p>
                            To create a long-term ecosystem built
                            on broker flexibility, transparent performance monitoring, and community-driven participation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
