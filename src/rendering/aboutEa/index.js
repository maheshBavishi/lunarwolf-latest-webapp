import React from 'react'
import AboutEaBanner from './aboutEaBanner'
import Whylunar from './whylunar'
import RiskAndRecovery from './riskAndRecovery'
import ValidationMethodology from './validationMethodology'
import RealMarket from './realMarket'
import LivePortfolios from '../home/livePortfolios'
import FaqSection from '../home/faqSection'
import Ourvalidationindex from './ourvalidation'

export default function AboutEa() {
    return (
        <>
            <AboutEaBanner />
            <Whylunar />
            <RiskAndRecovery />
            <Ourvalidationindex />
            <ValidationMethodology />
            <RealMarket />
            <LivePortfolios bgblack title='Performance Transparency' description='Track Lunar Wolf EA activity through third-party monitored accounts. Performance records are shared for transparency only and should not be interpreted as guaranteed future results. Actual results may vary due to broker execution, spreads, slippage, leverage, market volatility, latency, liquidity, and account settings.' />
            <FaqSection bgblack />
        </>
    )
}
