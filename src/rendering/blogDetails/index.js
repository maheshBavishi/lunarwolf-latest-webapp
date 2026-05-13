import React from 'react'
import styles from './blogDetails.module.scss';
import BlogInformation from './blogInformation';
import { getImageUrl } from '@/utils/blog';

export default function BlogDetails({ blogData, sidebarBlogs }) {
    return (
        <>
            <div className={styles.detailsLayer}>
                <div className='container-lg'>
                    <div className={styles.blogDetails}>
                        <div className={styles.textgrid}>
                            <h2>
                                {blogData?.attributes?.title}
                            </h2>
                            <p>
                                {blogData?.attributes?.shortDescription}
                            </p>
                        </div>
                    </div>
                    <div className={styles.banner}>
                        <img src={getImageUrl(blogData)} alt='Banner' />
                    </div>
                </div>
            </div>
            <BlogInformation blogData={blogData} sidebarBlogs={sidebarBlogs} />
        </>
    )
}
