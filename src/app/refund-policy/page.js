'use client'
import RefundPolicy from '@/rendering/refundPolicy'
import React, { useEffect } from 'react'

export default function page() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <RefundPolicy />
        </div>
    )
}
