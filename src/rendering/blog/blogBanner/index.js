"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./blogBanner.module.scss";

const BlogImage = "/assets/images/blog.png";
const AuthorImage = "/assets/images/profile.png";

export default function BlogBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // Custom easeOutExpo
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2,
      },
    },
  };

  return (
    <div className={styles.blogLayer}>
      <div className="container-lg">
        <motion.div
          className={styles.blogbanner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className={styles.textgrid}>
            <div style={{ overflow: "hidden" }}>
              <motion.h2 variants={itemVariants}>
                Everything you need, <span> in one place. </span>
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.p variants={itemVariants}>
                Dive into Holocene’s full library of case studies, whitepapers, videos, and insights — organized for clarity, built to help you solve
                real challenges faster.
              </motion.p>
            </div>
          </div>

          <motion.div
            className={styles.blogCard}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          >
            <div className={styles.image}>
              <motion.img src={BlogImage} alt="BlogImage" whileHover={{ scale: 1.08 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
            </div>
            <div className={styles.Content}>
              <div className={styles.topContent}>
                <motion.span variants={itemVariants}>Featured Article</motion.span>
                <motion.h2 variants={itemVariants}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</motion.h2>
                <motion.p variants={itemVariants}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s.
                </motion.p>
                <motion.a
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: "inline-block", cursor: "pointer" }}
                >
                  Read More...
                </motion.a>
              </div>
              <motion.div className={styles.bottomContent} variants={itemVariants}>
                <img src={AuthorImage} alt="AuthorImage" />
                <div>
                  <h3>By Clinton Oduor</h3>
                  <p>March 23, 2025 • 4 min read</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
