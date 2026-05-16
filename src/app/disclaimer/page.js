'use client'
import Disclaimer from '@/rendering/disclaimer'
import React, { useEffect } from 'react'

export default function page() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <Disclaimer />
        </div>
    )
}
