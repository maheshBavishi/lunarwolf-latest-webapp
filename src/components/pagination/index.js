"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.scss";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    
    // Call the onPageChange callback if provided
    if (onPageChange) {
      onPageChange(page);
    }
    
    // Navigate to new URL with updated query params
    router.push(`?${params.toString()}`);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getVisiblePages = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.paginationButton} ${styles.prevButton} ${currentPage === 1 ? styles.disabled : ""}`}
        onClick={goToPrevPage}
        disabled={currentPage === 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
          <path
            d="M4.79167 8.95833L0.625 4.79167L4.79167 0.625"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {getVisiblePages().map((page, index) => (
        <button
          key={index}
          className={`${styles.paginationButton} ${styles.pageButton} ${
            page === currentPage ? styles.active : ""
          } ${page === '...' ? styles.dots : ""}`}
          onClick={() => page !== '...' && handlePageChange(page)}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      <button
        className={`${styles.paginationButton} ${styles.nextButton} ${currentPage === totalPages ? styles.disabled : ""}`}
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
