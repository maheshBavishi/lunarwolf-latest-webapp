import React from "react";
import BlogBanner from "./blogBanner";
import Loader from "@/components/loader";
import ExploreBlog from "./exploreBlog";

export default function Blog({ blogsData, paginationData, categoriesData, currentCategory, currentPage }) {
  return (
    <div>
      <Loader />
      <BlogBanner />
      <ExploreBlog 
        blogsData={blogsData} 
        paginationData={paginationData} 
        categoriesData={categoriesData}
        currentCategory={currentCategory}
        currentPage={currentPage}
      />
    </div>
  );
}
