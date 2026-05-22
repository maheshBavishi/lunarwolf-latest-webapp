'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function TradingAnimation() {
    return (
        <>
            <motion.svg 
                width="100%" height="100%" viewBox="0 0 280 186" fill="none" xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {[
                    "M241.586 48.3977H148.42",
                    "M279.497 92.7625H186.331",
                    "M232.713 141.16H139.547",
                    "M175.442 179.072H82.2764",
                    "M93.1657 116.155H0",
                    "M124.624 33.0718H31.458"
                ].map((d, index) => (
                    <motion.path 
                        key={index}
                        d={d} 
                        stroke={`url(#paint${index}_linear_5749_255)`} 
                        strokeWidth="0.80663"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                            pathLength: [0, 1, 1], 
                            opacity: [0, 1, 0], 
                            pathOffset: [0, 0, 1] 
                        }}
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: index * 0.4
                        }}
                    />
                ))}
                
                <motion.g 
                    filter="url(#filter0_d_5749_255)"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <rect x="95.9893" y="40.3315" width="104.862" height="104.862" rx="16.1326" fill="#010101" />
                    
                    <motion.rect 
                        x="96.3926" y="40.7349" width="104.055" height="104.055" rx="15.7293" 
                        stroke="url(#paint6_linear_5749_255)" 
                        strokeWidth="0.80663" 
                        initial={{ pathLength: 0, opacity: 0.3 }}
                        animate={{ pathLength: [0, 1, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <rect x="125.128" y="68.5635" width="46.5856" height="46.5856" rx="12.9061" fill="url(#paint7_linear_5749_255)" />
                    
                    <motion.g
                        animate={{ scale: [0.95, 1.05, 0.95] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformOrigin: "148px 91px" }}
                    >
                        <path d="M148.421 95.8562V100.856" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M152.421 93.8562V100.856" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M156.421 89.8562V100.856" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M158.421 82.8562L149.775 91.5022C149.728 91.5488 149.673 91.5857 149.613 91.6109C149.552 91.6361 149.487 91.6491 149.421 91.6491C149.355 91.6491 149.29 91.6361 149.229 91.6109C149.169 91.5857 149.113 91.5488 149.067 91.5022L145.775 88.2102C145.681 88.1165 145.554 88.0638 145.421 88.0638C145.289 88.0638 145.162 88.1165 145.068 88.2102L138.421 94.8562" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M140.421 97.8562V100.856" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M144.421 93.8562V100.856" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.g>
                </motion.g>
                <defs>
                    <filter id="filter0_d_5749_255" x="55.6578" y="4.95911e-05" width="185.525" height="185.525" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="20.1657" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.603922 0 0 0 0 0.921569 0 0 0 0.35 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5749_255" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5749_255" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_5749_255" x1="246.461" y1="47.283" x2="229.284" y2="85.9316" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#119AEB" />
                        <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_5749_255" x1="284.372" y1="91.6477" x2="267.195" y2="130.296" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#119AEB" />
                        <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_5749_255" x1="237.588" y1="140.045" x2="220.411" y2="178.694" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#119AEB" />
                        <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_5749_255" x1="180.317" y1="177.957" x2="163.141" y2="216.606" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#119AEB" />
                        <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_5749_255" x1="98.0409" y1="115.04" x2="80.8643" y2="153.688" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#119AEB" />
                        <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_5749_255" x1="129.499" y1="31.9571" x2="112.322" y2="70.6057" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#119AEB" />
                        <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_5749_255" x1="148.42" y1="40.3315" x2="148.42" y2="145.193" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#090909" />
                        <stop offset="0.461538" stopColor="#119AEB" />
                        <stop offset="1" stopColor="#090909" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_5749_255" x1="171.714" y1="68.5635" x2="142.826" y2="122.259" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#464646" />
                    </linearGradient>
                </defs>
            </motion.svg>
        </>
    )
}

