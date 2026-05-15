'use client'
import React, { useRef } from 'react'
import styles from './telegramContent.module.scss';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TelegramContent() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div 
            className={styles.telegramContent}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay: 1,
                type: "spring",
                stiffness: 260,
                damping: 20 
            }}
            style={{ perspective: "1000px" }}
        >
            <motion.a
                href="https://t.me/Lunar_Wolf_Support"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Lunar Wolf Telegram"
                className="inline-flex items-center justify-center"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ 
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                whileHover={{ 
                    scale: 1.1,
                    z: 50,
                    filter: "drop-shadow(0px 20px 30px rgba(3, 155, 229, 0.4))"
                }}
                whileTap={{ scale: 0.9, z: 0 }}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                    <svg
                        width="56"
                        height="56"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <g clipPath="url(#clip0_1213_11719)">
                            <path
                                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                fill="#039BE5"
                            />
                            <path
                                d="M5.49102 11.7383L17.061 7.27725C17.598 7.08325 18.067 7.40825 17.893 8.22025L17.894 8.21925L15.924 17.5003C15.778 18.1583 15.387 18.3183 14.84 18.0083L11.84 15.7973L10.393 17.1913C10.233 17.3513 10.098 17.4863 9.78802 17.4863L10.001 14.4333L15.561 9.41025C15.803 9.19725 15.507 9.07725 15.188 9.28925L8.31702 13.6153L5.35502 12.6913C4.71202 12.4873 4.69802 12.0483 5.49102 11.7383Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1213_11719">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </motion.a>
        </motion.div>
    )
}



