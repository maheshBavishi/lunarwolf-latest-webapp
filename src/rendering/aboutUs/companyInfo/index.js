'use client'
import React, { useState } from "react";
import styles from './companyInfo.module.scss';
import Image from "next/image";

const Image1 = "/assets/images/img1.png";
const Image2 = "/assets/images/img2.png";
const Image3 = "/assets/images/img3.png";
const Image4 = "/assets/images/noah.jpg";
const ColoredLogo = '/assets/logo/loader-logo.png';

const teamData = [
    {
        name: "Ethan",
        role: "Co-founder",
        image: Image1,
        desc: "A visionary trader and strategist who turned early struggles into the resilient framework that powers Lunar Wolf today. Dedicated to building sustainable, AI-driven profit systems.",
    },
    {
        name: "Lucas",
        role: "CTO",
        image: Image3,
        desc: "Lead architect of the Lunar Wolf trading ecosystem. Spent years refining algorithmic risk management to ensure capital protection unconditionally.",
    },
    {
        name: "Ryan",
        role: "Co-founder & EA architect",
        image: Image2,
        desc: "Berkeley honor CS and math dropout AI research engineer who architected Imagine AI's state-management engine. raised $1M in the past for 2 startup and traded crypto to pay off student debt.",
    },
    {
        name: "Noah",
        role: "CMO",
        image: Image4,
        desc: "Self-taught MQL developer who dissected complex risk management frameworks. Obsessed with filling the market gap for consistent, protected growth.",
    },
];


export default function CompanyInfo() {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleCardClick = (index) => {
        // Only toggle on mobile/tablet (below md breakpoint)
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            setFlippedIndex((prev) => (prev === index ? null : index));
        }
    };

    return (
        <div className={styles.companyInfo}>
            <div className='container-lg'>
                <div className={styles.title}>
                    <h2>
                        Built by traders who lost first, so you don't have to.
                    </h2>
                    <p>
                        Lunar Wolf didn't start as a company. It started as a problem. One that
                        four friends lived through, lost money over, and eventually solved from the ground up.
                    </p>
                </div>
                <div className={styles.cardGrid}>
                    {teamData.map((trader, index) => (
                        <div
                            key={index}
                            className={styles.cardWrapper}
                            onClick={() => handleCardClick(index)}
                        >
                            <div
                                className={`${styles.cardInner} ${flippedIndex === index ? styles.flipped : ''}`}
                            >
                                {/* --- Front of Card --- */}
                                <div className={styles.cardFront}>
                                    <Image
                                        src={trader.image}
                                        alt={trader.name}
                                        fill
                                        className={styles.cardImage}
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                    {/* Gradient overlay */}
                                    <div className={styles.gradient} />

                                    <div className={styles.cardInfo}>
                                        <div className={styles.cardInfoInner}>
                                            <p className={styles.cardName}>
                                                {trader.name}
                                            </p>
                                            <span className={styles.cardRole}>
                                                {trader.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* --- Back of Card --- */}
                                <div className={styles.cardBack}>
                                    <div>
                                        <h3 className={styles.backName}>
                                            {trader.name}
                                        </h3>
                                        <p className={styles.backRole}>
                                            {trader.role}
                                        </p>
                                        <p className={styles.backDesc}>
                                            {trader.desc}
                                        </p>
                                    </div>

                                    {/* Bottom icon */}
                                    <div className={styles.logoCircle}>
                                        <img src={ColoredLogo} alt="ColoredLogo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
