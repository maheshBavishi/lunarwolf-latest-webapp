'use client'
import React from "react";
import BlogBanner from "./blogBanner";
import Loader from "@/components/loader";
import ExploreBlog from "./exploreBlog";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./blog.module.scss";

import styles from "./NoDataFound.module.scss";

const NoDataFound = () => (
  <div className={styles.container}>
    <p className={styles.message}>No blog posts available at the moment.</p>
  </div>
);

export default function Blog({ blogsData, paginationData, categoriesData, currentCategory, currentPage }) {
  const bannerBlogData = blogsData?.[0];
  const exploreBlogsData = blogsData?.slice(1);
  if (!blogsData || blogsData.length === 0) return <NoDataFound />;
  return (
    <div>
      <Loader />
      {hasBlogs ? (
        <>
          <BlogBanner bannerBlogData={bannerBlogData} />
          <ExploreBlog
            blogsData={exploreBlogsData}
            paginationData={paginationData}
            categoriesData={categoriesData}
            currentCategory={currentCategory}
            currentPage={currentPage}
          />
        </>
      ) : (
        <div className={styles.noBlogsWrapper}>
          <div className="container-lg">
            <motion.div
              className={styles.iconBox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              No Articles Found
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {currentCategory
                ? `We couldn't find any articles in the "${currentCategory}" category. Feel free to explore our other topics or check back later!`
                : "Our blog is currently empty. We are working hard to bring you valuable content soon. Stay tuned!"
              }
            </motion.p>


          </div>
        </div>
      )}
    </div>
  );
}
