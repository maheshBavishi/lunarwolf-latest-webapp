import { memo } from "react";
import WolfLevelLogo from "./WolfLevelLogo";
import YellowDotIcon from "@/assets/images/yellow-dot.svg";
import LockIcon from "@/assets/images/lock.svg";
import Image from "next/image";
import styles from "./leverCard.module.scss";

const LeverCard = memo(
  ({
    level,
    commission,
    title,
    isLocked,
    lockDescription,
    lockPrice,
    unlockProgress = 0,
  }) => {
    // Calculate if the card should be unlocked based on progress
    const isUnlocked = level === "1.1" || unlockProgress >= 1;
    const showLockOverlay = isLocked && !isUnlocked;

    // Determine animation state
    const isUnlocking = unlockProgress > 0 && unlockProgress < 1;
    const justUnlocked = unlockProgress >= 1 && level !== "1.1";

    return (
      <div
        className={`${styles.card} ${isUnlocking ? styles.cardUnlocking : ""} ${
          justUnlocked ? styles.cardUnlocked : ""
        }`}
        style={{
          willChange: "transform, opacity, filter, box-shadow",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(153,153,153,0.1) 100%)",
          borderRadius: "14px",
          boxShadow: isUnlocking
            ? `0 0 ${20 + unlockProgress * 30}px rgba(83, 177, 217, ${
                0.3 + unlockProgress * 0.4
              })`
            : justUnlocked
            ? "0 0 25px rgba(83, 177, 217, 0.6)"
            : "none",
          transition:
            "box-shadow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ease-out",
        }}
      >
        {showLockOverlay && (
          <div
            className={styles.lockOverlay}
            style={{
              opacity: 1 - unlockProgress,
              transform: `scale(${1 - unlockProgress * 0.08}) translateY(${
                unlockProgress * 6
              }px)`,
              filter: `blur(${unlockProgress * 2}px) brightness(${
                1 + unlockProgress * 0.3
              })`,
              transition: "opacity .6s ease, transform .6s ease",
              borderRadius: "inherit",
              margin: "inherit",
              padding: "inherit",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
            }}
          >
            <div className={styles.lockContent}>
              <Image
                src={LockIcon}
                alt=""
                className={styles.lockIcon}
                style={{
                  transform: `rotate(${unlockProgress * 360}deg) scale(${
                    1 + unlockProgress * 0.15
                  })`,
                  filter: `drop-shadow(0 0 ${
                    unlockProgress * 20
                  }px rgba(83, 177, 217, ${0.9 - unlockProgress * 0.9})) 
                           drop-shadow(0 0 ${
                             unlockProgress * 30
                           }px rgba(255, 215, 0, ${unlockProgress * 0.6})) 
                           brightness(${1 + unlockProgress * 1.2}) 
                           saturate(${1 + unlockProgress * 0.5})`,
                  transition: "transform .8s ease",
                  opacity: 1 - unlockProgress * 0.6,
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                }}
              />
              <div className={styles.lockText}>
                Complete direct business {lockPrice}$ then open{" "}
                <span className={styles.lockLevelText}>
                  Lv {level.split(".")[1]}
                </span>
              </div>
              <p className={styles.lockDescription}>{lockDescription}</p>
            </div>
          </div>
        )}

        <div
          className={styles.contentWrapper}
          style={{
            opacity: isUnlocked ? 1 : 0.4 + unlockProgress * 0.6,
            transform: `translateY(${
              isUnlocked ? 0 : (1 - unlockProgress) * 12
            }px)`,
            filter: `blur(${isUnlocked ? 0 : (1 - unlockProgress) * 2}px) 
                     brightness(${isUnlocked ? 1 : 0.7 + unlockProgress * 0.3}) 
                     saturate(${isUnlocked ? 1 : 0.6 + unlockProgress * 0.4})
                     ${
                       isUnlocking
                         ? `drop-shadow(0 0 ${
                             unlockProgress * 10
                           }px rgba(83, 177, 217, ${unlockProgress * 0.4}))`
                         : ""
                     }`,
            transition: "opacity .6s ease, transform .6s ease",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
          <div className={styles.headerLeft}>
            <span className={styles.levelText}>Lv {level.split(".")[1]}</span>
            <span className={styles.titleText}>{title}</span>
          </div>
          <div className={styles.headerRight}>
            {level === "1.1" && (
              <>
                <span className={styles.directReferralText}>
                  Direct Referral
                </span>
                <Image
                  src={YellowDotIcon}
                  alt="yellow dot"
                  className={styles.yellowDot}
                />
              </>
            )}

            <span className={styles.commissionText}>
              Your Commission{" "}
              <span className={styles.commissionPercentage}>
                {commission}%
              </span>
            </span>
          </div>
        </div>

        <div
          className={styles.wolfLogosWrapper}
          style={{
            opacity: isUnlocked ? 1 : 0.3 + unlockProgress * 0.7,
            transform: `translateY(${
              isUnlocked ? 0 : (1 - unlockProgress) * 8
            }px)`,
            filter: `blur(${isUnlocked ? 0 : (1 - unlockProgress) * 1}px) 
                     saturate(${isUnlocked ? 1 : 0.5 + unlockProgress * 0.5})
                     brightness(${isUnlocked ? 1 : 0.7 + unlockProgress * 0.3})
                     ${
                       isUnlocking
                         ? `drop-shadow(0 0 ${
                             unlockProgress * 8
                           }px rgba(83, 177, 217, ${unlockProgress * 0.3}))`
                         : ""
                     }`,
            transition: "opacity .6s ease, transform .6s ease",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
          <div className={styles.wolfLogosGrid}>
            <div className={styles.wolfLogoCell}>
              <WolfLevelLogo alphabet="A" level={level} />
            </div>
            <div className={styles.wolfLogoCell}>
              <WolfLevelLogo alphabet="B" level={level} />
            </div>
            <div className={styles.wolfLogoCell}>
              <WolfLevelLogo alphabet="C" level={level} />
            </div>
            <div className={styles.wolfLogoCell}>
              <WolfLevelLogo alphabet="D" level={level} />
            </div>
            <div className={styles.wolfLogoCell}>
              <WolfLevelLogo alphabet="E" level={level} />
            </div>
            <div className={styles.wolfLogoCell}>
              <WolfLevelLogo alphabet="F" level={level} />
            </div>
            <div className={styles.wolfLogoCell}>
              <WolfLevelLogo alphabet="G" level={level} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default LeverCard;