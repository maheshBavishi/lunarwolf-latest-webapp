import React from "react";
import BlogBanner from "./blogBanner";
import Loader from "@/components/loader";
import ExploreBlog from "./exploreBlog";

export default function Blog({ blogsData, paginationData, categoriesData, currentCategory, currentPage }) {
  if (!blogsData) return <Loader />
  const bannerBlogData = blogsData?.[0];
  const exploreBlogsData = blogsData?.slice(1);
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
