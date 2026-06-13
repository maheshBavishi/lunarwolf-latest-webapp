"use client";
import React from 'react'
import { motion } from 'framer-motion';
import styles from './ourvalidation.module.scss';
const AnalysisIcon = '/assets/icons/analysis.svg';
const BacktestingIcon = '/assets/icons/backtesting.svg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } }
};

export default function Ourvalidationindex() {
  return (
    <div className={styles.ourvalidationAlignment}>
      <div className='container-lg'>
        <motion.div
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>
            Our validation <span> process </span> includes
          </h2>
        </motion.div>
        <motion.div
          className={styles.flexBox}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className={styles.lineAlignment}>
            <motion.div variants={itemVariants}>
              <svg width="1047" height="127" viewBox="0 0 1047 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M125 0.399902H1037C1041.42 0.399902 1045 3.98162 1045 8.3999V116.4C1045 120.818 1041.42 124.4 1037 124.4H0" stroke="white" strokeWidth="0.8" />

                <motion.path
                  d="M125 0.399902H1037C1041.42 0.399902 1045 3.98162 1045 8.3999V116.4C1045 120.818 1041.42 124.4 1037 124.4H0"
                  stroke="#00B7FF"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                />

                <motion.path
                  d="M1047 28.3999H1043L1045 31.3999L1047 28.3999Z"
                  fill="#00B7FF"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                  d="M989 126.4L989 122.4L986 124.4L989 126.4Z"
                  fill="#00B7FF"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </div>
          <motion.div className={styles.items} variants={itemVariants}>
            <motion.div className={styles.content} whileHover={{ scale: 1.05, translateY: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <img src={AnalysisIcon} alt='AnalysisIcon' />
              <p>
                Multi-year EURUSD
                historical analysis
              </p>
            </motion.div>
          </motion.div>
          <motion.div className={styles.items} variants={itemVariants}>
            <motion.div className={styles.content} whileHover={{ scale: 1.05, translateY: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <img src={BacktestingIcon} alt='BacktestingIcon' />
              <p>
                Year-by-year backtesting validation
              </p>
            </motion.div>
          </motion.div>
          <motion.div className={styles.items} variants={itemVariants}>
            <motion.div className={styles.content} whileHover={{ scale: 1.05, translateY: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <img src={AnalysisIcon} alt='AnalysisIcon' />
              <p>
                Real tick market simulation
              </p>
            </motion.div>
          </motion.div>
          <motion.div className={styles.items} variants={itemVariants}>
            <motion.div className={styles.content} whileHover={{ scale: 1.05, translateY: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <img src={AnalysisIcon} alt='AnalysisIcon' />
              <p>
                Volatility-cycle testing
              </p>
            </motion.div>
          </motion.div>
          <motion.div className={styles.items} variants={itemVariants}>
            <motion.div className={styles.content} whileHover={{ scale: 1.05, translateY: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <img src={AnalysisIcon} alt='AnalysisIcon' />
              <p>
                Recovery behavior analysis under different market conditions
              </p>
            </motion.div>
          </motion.div>
          <motion.div className={styles.items} variants={itemVariants}>
            <motion.div className={styles.content} whileHover={{ scale: 1.05, translateY: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <img src={AnalysisIcon} alt='AnalysisIcon' />
              <p>
                Stability-focused optimization refinement
              </p>
            </motion.div>
          </motion.div>
          <motion.div className={styles.items} variants={itemVariants}>
            <motion.div className={styles.content} whileHover={{ scale: 1.05, translateY: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <img src={AnalysisIcon} alt='AnalysisIcon' />
              <p>
                Trending and ranging market evaluation
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
