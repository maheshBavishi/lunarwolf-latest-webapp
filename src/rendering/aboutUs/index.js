"use client";
import React, { useRef, useEffect, useState } from 'react'
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
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Aboutus() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Banner slides up from 0 to 0.25 of the total 400vh scroll (Desktop only)
    const bannerY = useTransform(scrollYProgress, [0, 0.25], ["0%", "-100%"]);
    
    // Text animation progress starts after banner starts moving
    const textProgress = useTransform(scrollYProgress, [0.15, 1], [0, 1]);

    return (
        <div className={styles.aboutPage}>
            <Loader />
            <div ref={containerRef} className={styles.stickySection}>
                <div className={styles.stickyWrapper}>
                    <motion.div 
                        className={styles.bannerContainer} 
                        style={!isMobile ? { y: bannerY } : {}}
                    >
                        <AboutUsBanner />
                    </motion.div>
                    <div className={styles.textContainer}>
                        <TextAnimation scrollProgress={textProgress} />
                    </div>
                </div>
            </div>
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


