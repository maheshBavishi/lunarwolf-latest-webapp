"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./exploreBlog.module.scss";
import moment from "moment";
import Pagination from "@/components/pagination";

export default function ExploreBlog({ blogsData, paginationData, categoriesData, currentCategory, currentPage: initialPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(initialPage || 1);

  const formatDate = (dateString) => {
    return moment(dateString).format("MMM D");
  };

  const getImageUrl = (blog) => {
    if (blog?.attributes?.coverImage?.data?.attributes?.url) {
      return `${process.env.NEXT_PUBLIC_CMS_IMAGE_URL}${blog.attributes.coverImage.data.attributes.url}`;
    }
    return "/assets/images/blog1.png";
  };

  const handleCategoryClick = (categorySlug) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (categorySlug === 'all' || !categorySlug) {
      params.delete('category');
      params.set('page', '1');
    } else {
      params.set('category', categorySlug);
      params.set('page', '1');
    }
    
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={styles.exploreBlog}>
      <div className="container-lg">
        <div className={styles.title}>
          <h2>Explore Our Blog</h2>
        </div>
        <div className={styles.tabCenter}>
          <button 
            className={`${!currentCategory ? styles.active : ""}`}
            onClick={() => handleCategoryClick('all')}
          >
            All
          </button>
          {categoriesData && categoriesData.length > 0 && 
            categoriesData.map((category) => (
              <button 
                key={category.id}
                className={`${currentCategory === category.attributes.slug ? styles.active : ""}`}
                onClick={() => handleCategoryClick(category.attributes.slug)}
              >
                {category.attributes.name}
              </button>
            ))
          }
        </div>
        <div className={styles.grid}>
          {blogsData && blogsData.length > 0 ? (
            blogsData.map((blog, index) => (
              <div className={styles.items} key={index}>
                <div className={styles.image}>
                  <img src={getImageUrl(blog)} alt={blog.attributes.title} />
                </div>
                <div className={styles.details}>
                  <span>{formatDate(blog.attributes.publishedAt)}</span>
                  <h3>{blog.attributes.title}</h3>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noData}>
              <p>No blog posts found.</p>
            </div>
          )}
        </div>
        {paginationData && paginationData.pageCount > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={paginationData.pageCount}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
}
