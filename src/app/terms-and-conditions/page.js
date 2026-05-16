'use client'
import TermsAndConditions from '@/rendering/termsAndConditions'
import React, { useEffect } from 'react'

export default function page() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <TermsAndConditions />
        </div>
    )
}
