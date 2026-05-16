import React from "react";
import BlogBanner from "./blogBanner";
import Loader from "@/components/loader";
import ExploreBlog from "./exploreBlog";

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
      <BlogBanner bannerBlogData={bannerBlogData} />
      <ExploreBlog
        blogsData={exploreBlogsData}
        paginationData={paginationData}
        categoriesData={categoriesData}
        currentCategory={currentCategory}
        currentPage={currentPage}
      />
    </div>
  );
}
