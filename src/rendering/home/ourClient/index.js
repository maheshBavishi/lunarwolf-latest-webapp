"use client";
import React from "react";
import styles from "./ourClient.module.scss";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Alexander Thompson",
        role: "Professional Trader",
        content: "Lunar Wolf has completely transformed my trading strategy. The automation is flawless, and the risk management is the best I've seen in the market.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander",
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Portfolio Manager",
        content: "The transparency and consistent results provided by this platform are unmatched. It's rare to find an EA that actually delivers on its promises.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Retail Investor",
        content: "As someone new to automated trading, the support and ease of use were critical for me. I've been seeing steady growth every month since I started.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function OurClient() {
    return (
        <section className={styles.ourClient}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>What Our Clients Say</h2>
                    <p>Join thousands of successful traders who have automated their path to wealth.</p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {testimonials.map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0, 183, 255, 0.15)",
                                borderColor: "#00B7FF"
                            }}
                        >
                            <div className={styles.quoteIcon}>
                                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4286 0L17.1429 5.71429V14.2857C17.1429 22.8571 8.57143 30 0 30V24.2857C5.71429 24.2857 8.57143 20 8.57143 14.2857H0V0H11.4286ZM34.2857 0L40 5.71429V14.2857C40 22.8571 31.4286 30 22.8571 30V24.2857C28.5714 24.2857 31.4286 20 31.4286 14.2857H22.8571V0H34.2857Z" fill="#00B7FF" fillOpacity="0.2" />
                                </svg>
                            </div>

                            <div className={styles.rating}>
                                {[...Array(item.rating)].map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FFB800" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
                                    </svg>
                                ))}
                            </div>

                            <p className={styles.content}>"{item.content}"</p>

                            <div className={styles.userInfo}>
                                <div className={styles.avatar}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={styles.details}>
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}


