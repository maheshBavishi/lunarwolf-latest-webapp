import React from 'react'
import BlogBanner from './blogBanner'
import Loader from '@/components/loader'
import ExploreBlog from './exploreBlog'

export default function Blog() {
    return (
        <div>
            <Loader />
            <BlogBanner />
            <ExploreBlog />
        </div>
    )
}
