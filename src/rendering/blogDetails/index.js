import React from 'react'
import styles from './blogDetails.module.scss';
import BlogInformation from './blogInformation';
const Banner = '/assets/images/details-banner.png';
export default function BlogDetails() {
    return (
        <>
            <div className={styles.detailsLayer}>
                <div className='container-lg'>
                    <div className={styles.blogDetails}>
                        <div className={styles.textgrid}>
                            <h2>
                                Lorem Ipsum is simply dummy text.
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                    </div>
                    <div className={styles.banner}>
                        <img src={Banner} alt='Banner' />
                    </div>
                </div>
            </div>
            <BlogInformation />
        </>
    )
}
