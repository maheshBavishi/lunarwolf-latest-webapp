import React from "react";
import styles from "./blogInformation.module.scss";
import { getImageUrl } from "@/utils/blog";
import Link from "next/link";
import { marked } from "marked";

export default function BlogInformation({ blogData, sidebarBlogs }) {
  return (
    <div className={styles.blogInformation}>
      <div className="container-lg">
        <div className={styles.grid}>
          <div className={styles.items}>
            <div className={styles.stickySection}>
              <h2>Explore Our Blog</h2>
              <div className={styles.allCardAlignment}>
                {sidebarBlogs && sidebarBlogs.length > 0 ? (
                  sidebarBlogs.map((blog, index) => (
                    <Link href={`/blog/${blog.attributes.slug}`} key={index} className={styles.card}>
                      <img src={getImageUrl(blog)} alt={blog.attributes.title} />
                      <h3>{blog.attributes.title}</h3>
                    </Link>
                  ))
                ) : (
                  <p>No other blogs found.</p>
                )}
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <div
              className={styles.informationAlignment}
              dangerouslySetInnerHTML={{
                __html: marked(blogData?.attributes?.blogDetails || ""),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
