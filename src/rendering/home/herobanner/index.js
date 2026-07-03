'use client'
import React from 'react'
import styles from './herobanner.module.scss';
import { motion } from 'framer-motion';
import RightIcon from '@/icons/rightIcon';

const HeroTopImage = '/assets/images/dollar.webp';
const WolfImage = '/assets/images/wolf.png';

export default function Herobanner() {
  return (
    <div className={styles.herobanner}>
      <div className={styles.topAlignment}>
        <motion.img
          src={HeroTopImage}
          alt='HeroTopImage'
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.boxwidth}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            BACKTESTED SINCE 2015
          </motion.p>
          <motion.div
            className={styles.line}
            style={{ originX: 0 }}
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
          ></motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            LUNAR WOLF - A <br /> <span> FOREX </span> EA <br />
            EURUSD-FOCUSED <br />
            AUTOMATED FOREX EA
          </motion.h2>
          <div className={styles.buttonAlignment}>
            <motion.button
              className={styles.first}
              aria-label="View Live Performance"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              onClick={() => {
                const element = document.getElementById('live-portfolios');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Live Performance
              <RightIcon />
            </motion.button>
            <a href="https://eauser.lunarwolf.ai/signup" target='_blank' aria-label="Start EA Setup">
              <motion.button
                className={styles.sec}
                aria-label="Create EA Access Account"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              // onClick={() => {
              //   const element = document.getElementById('live-portfolios');
              //   if (element) {
              //     element.scrollIntoView({ behavior: 'smooth' });
              //   }
              // }}
              >
                Create EA Access Account
                <RightIcon />
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div >
      <div className={styles.wolfImage} >
        <img
          src={WolfImage}
          alt="WolfImage"

        />
      </div>
    </div >
  )
}
