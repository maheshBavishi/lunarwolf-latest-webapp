"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./blogBanner.module.scss";
import { getImageUrl, formatDate, getAuthorImageUrl } from "@/utils/blog";

const MotionLink = motion(Link);

export default function BlogBanner({ bannerBlogData }) {
  if (!bannerBlogData) return <></>
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
            <Link href={`/blog/${bannerBlogData?.attributes?.slug}`} className={styles.image}>
              <motion.img src={getImageUrl(bannerBlogData)} alt="BlogImage" whileHover={{ scale: 1.08 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
            </Link>
            <div className={styles.Content}>
              <div className={styles.topContent}>
                <motion.span variants={itemVariants}>Featured Article</motion.span>
                <motion.h2 variants={itemVariants}>{bannerBlogData.attributes.title}</motion.h2>
                <motion.p variants={itemVariants}>
                  {bannerBlogData?.attributes?.shortDescription}
                </motion.p>
                <MotionLink
                  href={`/blog/${bannerBlogData?.attributes?.slug}`}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: "inline-block", cursor: "pointer" }}
                >
                  Read More...
                </MotionLink>
              </div>
              <motion.div className={styles.bottomContent} variants={itemVariants}>
                <img src={getAuthorImageUrl(bannerBlogData?.attributes?.Author)} alt="AuthorImage" />
                <div>
                  <h3>By {bannerBlogData?.attributes?.Author?.name}</h3>
                  <p>{formatDate(bannerBlogData?.attributes?.publishedAt)} • 4 min read</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
