import React from 'react'
import Herobanner from './herobanner'
import Loader from '@/components/loader'
import Header from '@/components/header'
import Experience from './experience'
import EarnSection from './earnSection'
import ReferralNetwork from './referralNetwork'
import StrategicSection from './strategicSection'
import ChooseBroker from './chooseBroker'
import Whychoose from './whychoose'
import MemberSection from './memberSection'
import LivePortfolios from './livePortfolios'
import StepSection from './stepSection'
import AutomatedProfit from './automatedProfit'
import FaqSection from './faqSection'
import OurClient from './ourClient'

export default function Homepage() {
    return (
        <div>
            <Loader />
            <Herobanner />
            <Experience />
            <EarnSection />
            <ReferralNetwork />
            <StrategicSection />
            <ChooseBroker />
            <Whychoose />
            <MemberSection />
            <LivePortfolios />
            <StepSection />
            <OurClient />
            <AutomatedProfit />
            <FaqSection />
        </div>
    )
}
