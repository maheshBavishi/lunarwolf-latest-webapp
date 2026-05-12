import React from 'react'
import styles from './blogInformation.module.scss';
const CardImage = '/assets/images/blog1.png';

export default function BlogInformation() {
    return (
        <div className={styles.blogInformation}>
            <div className='container-lg'>
                <div className={styles.grid}>
                    <div className={styles.items}>
                       <div className={styles.stickySection}>
                         <h2>
                            Explore Our Blog
                        </h2>
                        <div className={styles.allCardAlignment}>
                            {
                                [...Array(4)].map(() => {
                                    return (
                                        <div className={styles.card}>
                                            <img src={CardImage} alt='CardImage' />
                                            <h3>
                                                Your content is yours - and
                                                that’s more empowering than ever
                                            </h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                       </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.informationAlignment}>
                            <h2>
                                Who we Are
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s
                            </p>
                            <h2>
                                THE INFORMATION WE COLLECT
                            </h2>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <h2>
                                THE INFORMATION WE COLLECT
                            </h2>
                            <ul>
                                <li>Who we are</li>
                                <li>What personal information we collect and where we collect it from</li>
                                <li>The purposes for which we use your personal information</li>
                                <li>To whom we disclose your personal information</li>
                                <li>How we safeguard your personal information</li>
                                <li>Your rights to access, correct and delete your personal information</li>
                                <li>How to contact us</li>
                                <li>The Information Regulator’s contact details</li>
                            </ul>
                            <h2>
                                Who we Are
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s
                            </p>
                            <h2>
                                THE INFORMATION WE COLLECT
                            </h2>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <h2>
                                THE INFORMATION WE COLLECT
                            </h2>
                            <ul>
                                <li>Who we are</li>
                                <li>What personal information we collect and where we collect it from</li>
                                <li>The purposes for which we use your personal information</li>
                                <li>To whom we disclose your personal information</li>
                                <li>How we safeguard your personal information</li>
                                <li>Your rights to access, correct and delete your personal information</li>
                                <li>How to contact us</li>
                                <li>The Information Regulator’s contact details</li>
                            </ul>
                            <h2>
                                Who we Are
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s
                            </p>
                            <h2>
                                THE INFORMATION WE COLLECT
                            </h2>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <h2>
                                THE INFORMATION WE COLLECT
                            </h2>
                            <ul>
                                <li>Who we are</li>
                                <li>What personal information we collect and where we collect it from</li>
                                <li>The purposes for which we use your personal information</li>
                                <li>To whom we disclose your personal information</li>
                                <li>How we safeguard your personal information</li>
                                <li>Your rights to access, correct and delete your personal information</li>
                                <li>How to contact us</li>
                                <li>The Information Regulator’s contact details</li>
                            </ul>
                            <h2>
                                Who we Are
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s
                            </p>
                            <h2>
                                THE INFORMATION WE COLLECT
                            </h2>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <h2>
                                THE INFORMATION WE COLLECT
                            </h2>
                            <ul>
                                <li>Who we are</li>
                                <li>What personal information we collect and where we collect it from</li>
                                <li>The purposes for which we use your personal information</li>
                                <li>To whom we disclose your personal information</li>
                                <li>How we safeguard your personal information</li>
                                <li>Your rights to access, correct and delete your personal information</li>
                                <li>How to contact us</li>
                                <li>The Information Regulator’s contact details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
