"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "./header.module.scss";
import DownloadIcon from "@/icons/downloadIcon";

const LogoIcon = "/assets/logo/loader-logo.png";

const navLinks = [
  { label: "Affiliate program", href: "/referral-program", target: "_self" },
  { label: "About Us", href: "/about-us", target: "_self" },
  { label: "Our Profile", href: "/documents/Lunar Wolf Ea Presentation.pdf", hasDownload: true, target: "_blank" },
];

export default function Header() {
  const pathname = usePathname();
  
  // Define pages that have the Loader component and need delayed header entrance
  const loaderPages = ["/", "/about-us", "/blog", "/referral-program"];
  const isLoaderPage = loaderPages.includes(pathname);
  
  const [isVisible, setIsVisible] = useState(!isLoaderPage);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Only show delay on pages that use the Loader to match its timeout
    if (isLoaderPage) {
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 3600);
      return () => clearTimeout(showTimer);
    } else {
      setIsVisible(true);
    }
  }, [isLoaderPage, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Stagger children animation - only for pages with Loader entrance
  const containerVariants = {
    hidden: { opacity: isLoaderPage ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: isLoaderPage ? 0 : 1, y: isLoaderPage ? -20 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
          initial={isLoaderPage ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className={styles.headerDesign}>
            <div className={styles.headerInner}>
              <motion.div className={styles.logoWrap} variants={containerVariants} initial={isLoaderPage ? "hidden" : "visible"} animate="visible">
                <motion.a href="/" className={styles.logo} variants={itemVariants}>
                  <img src={LogoIcon} alt="Lunar Wolf" className={styles.logoIcon} />
                  <span className={styles.logoText}>LUNAR WOLF</span>
                </motion.a>
              </motion.div>

              <div className={styles.alignment}>
                <motion.nav className={styles.nav} variants={containerVariants} initial={isLoaderPage ? "hidden" : "visible"} animate="visible">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.target || "_self"}
                      className={styles.navLink}
                      variants={itemVariants}
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                      {link.hasDownload && <DownloadIcon />}
                    </motion.a>
                  ))}
                </motion.nav>

                {/* CTA Buttons */}
                <motion.div className={styles.cta} variants={containerVariants} initial={isLoaderPage ? "hidden" : "visible"} animate="visible">
                  <motion.a
                    href="https://app.lunarwolf.ai"
                    target="_blank"
                    className={styles.btnLogin}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Login
                  </motion.a>
                  <motion.a
                    href="https://app.lunarwolf.ai/signup"
                    className={styles.btnRegister}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                  >
                    Registration
                  </motion.a>
                </motion.div>

                <motion.button
                  className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ""}`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  variants={itemVariants}
                  initial={isLoaderPage ? "hidden" : "visible"}
                  animate="visible"
                  aria-label="Toggle menu"
                >
                  <span />
                  <span />
                  <span />
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className={styles.mobileMenu}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.nav className={styles.mobileNav} initial="hidden" animate="visible" variants={containerVariants}>
                    {navLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        className={styles.mobileNavLink}
                        variants={itemVariants}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                        {link.hasDownload && (
                          <svg
                            className={styles.downloadIcon}
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        )}
                      </motion.a>
                    ))}
                    <div className={styles.mobileCta}>
                      <motion.a href="#login" className={styles.btnLogin} variants={itemVariants} onClick={() => setIsMobileMenuOpen(false)}>
                        Login
                      </motion.a>
                      <motion.a href="#register" className={styles.btnRegister} variants={itemVariants} onClick={() => setIsMobileMenuOpen(false)}>
                        Registration
                      </motion.a>
                    </div>
                  </motion.nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}


