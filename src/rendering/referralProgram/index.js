import React from 'react'
import ReferralProgramBanner from './referralProgramBanner'
import HeroSection from '@/components/pricing/HeroSection'
import ContentSection from './contentSection'
import AutomatedProfit from '../home/automatedProfit'
import FaqSection from '../home/faqSection'
import Loader from '@/components/loader'

export default function ReferralProgram() {
    return (
        <div>
            <Loader />
            <HeroSection />
            <ContentSection />
            <AutomatedProfit />
            <FaqSection />
        </div>
    )
}
