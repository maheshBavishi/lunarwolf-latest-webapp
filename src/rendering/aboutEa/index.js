import React from 'react'
import AboutEaBanner from './aboutEaBanner'
import Whylunar from './whylunar'
import RiskAndRecovery from './riskAndRecovery'
import ValidationMethodology from './validationMethodology'
import RealMarket from './realMarket'
import LivePortfolios from '../home/livePortfolios'
import FaqSection from '../home/faqSection'

export default function AboutEa() {
    return (
        <div >
            <AboutEaBanner />
            <Whylunar />
            <RiskAndRecovery />
            <ValidationMethodology />
            <RealMarket />
            <LivePortfolios bgblack title='Performance Transparency' description='Watch Lunar Wolf analyze, execute, and dominate the forex market in real time. Follow active trades, proven strategies, and real profits as they happen.' />
            <FaqSection bgblack />
        </div>
    )
}
