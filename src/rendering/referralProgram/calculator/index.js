import React from 'react'
import styles from './calculator.module.scss';
import IBCommission from './ibCommission';
export default function Calculator() {
    return (
        <div className={styles.calculator}>
            <div className='container-lg'>
                <IBCommission />
            </div>
        </div>
    )
}
