'use client'
import Aboutus from '@/rendering/aboutUs'
import React, { useEffect } from 'react'

export default function page() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <Aboutus />
        </div>
    )
}
