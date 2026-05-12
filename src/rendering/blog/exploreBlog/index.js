import React from 'react'
import styles from './exploreBlog.module.scss';
const CardImage = '/assets/images/blog1.png';
export default function ExploreBlog() {
    return (
        <div className={styles.exploreBlog}>
            <div className='container-lg'>
                <div className={styles.title}>
                    <h2>
                        Explore Our Blog
                    </h2>
                </div>
                <div className={styles.tabCenter}>
                    <button className={styles.active}>All</button>
                    <button>Bot Trading</button>
                    <button>Manual Trading</button>
                    <button>EUR/USD</button>
                    <button>Gold News</button>
                    <button>Forex Market</button>
                    <button>IB</button>
                </div>
                <div className={styles.grid}>
                    {
                        [...Array(10)].map(() => {
                            return (
                                <div className={styles.items}>
                                    <div className={styles.image}>
                                        <img src={CardImage} alt='CardImage' />
                                    </div>
                                    <div className={styles.details}>
                                        <span>
                                            Feb 3
                                        </span>
                                        <h3>
                                            Introducing Craft Agents - The Open Source Agent Interface
                                        </h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.paginationAlignment}>
                    <div className={styles.round}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                            <path d="M4.79167 8.95833L0.625 4.79167L4.79167 0.625" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className={styles.round}>1</div>
                    <div className={styles.round}>2</div>
                    <div className={styles.round}>3</div>
                    <div className={styles.round}>...</div>
                    <div className={styles.round}>25</div>
                    <div className={styles.round}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 5L12.5 10L7.5 15" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
