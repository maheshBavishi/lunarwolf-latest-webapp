import React from 'react'
import styles from './aboutUs.module.scss';
import AboutUsBanner from './aboutUsBanner'
import Loader from '@/components/loader'
import TextAnimation from './textAnimation'
import OurMission from './ourMission'
import IconTextCard from './iconTextCard';
import CompanyInfo from './companyInfo';
import MarketFlow from './marketFlow';
import BeComingSection from './beComingSection';
import SliderSection from './sliderSection';
import AutomatedProfit from '../home/automatedProfit';
import FaqSection from '../home/faqSection';
export default function Aboutus() {
    return (
        <div className={styles.aboutPage}>
            <Loader />
            <AboutUsBanner />
            <TextAnimation />
            <OurMission />
            <IconTextCard />
            <CompanyInfo />
            <MarketFlow />
            <BeComingSection />
            <SliderSection />
            <AutomatedProfit />
            <FaqSection />
        </div>
    )
}
