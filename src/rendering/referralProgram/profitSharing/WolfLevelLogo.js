import { Handle, Position } from "@xyflow/react";
import WolfIcon from "@/assets/images/wolf-level-icon.png";
import WolfStackedIcon from "@/assets/images/wolf-stacked.png";
import Image from "next/image";
import styles from "./wolfLevelLogo.module.scss";


const WolfLevelLogo = ({ alphabet, level }) => {
  const alphabets = ["A", "B", "C", "D", "E", "F", "G"];
  const currentIndex = alphabets.indexOf(alphabet);
  const prevAlphabet = currentIndex > 0 ? alphabets[currentIndex - 1] : null;

  return (
    <div
      className={styles.container}
      id={`level-${level}-${alphabet}`}
    >
      {/* Image div with its own handles */}
      <div className={styles.imageWrapper}>
        {/* Source handle for image connecting to next image */}
        {alphabet !== "G" && (
          <Handle
            type="source"
            position={Position.Right}
            id={`${alphabet}-image-source`}
            style={{
              background: "transparent",
              width: "6px",
              height: "6px",
              right: "-3px",
              top: "45%",
              transform: "translateY(-50%)",
              border: "none",
            }}
            className={styles.imageSourceHandle}
          />
        )}

        {/* Target handle for image connecting from previous image */}
        {prevAlphabet && (
          <Handle
            type="target"
            position={Position.Left}
            id={`${alphabet}-image-target`}
            style={{
              background: "transparent",
              width: "6px",
              height: "6px",
              left: "-3px",
              top: "45%",
              transform: "translateY(-50%)",
              border: "none",
            }}
            className={styles.imageTargetHandle}
          />
        )}

        {/* The image */}
        <Image
          src={alphabet === "G" ? WolfStackedIcon : WolfIcon}
          alt=""
          className={styles.image}
          id={`level-${level}-${alphabet}-img`}
        />
      </div>

      {/* Letter div with bottom handle only for letter A */}
      {alphabet !== "G" && (
        <div className={styles.letterWrapper}>
          {/* Bottom handle for letter A connecting to next level */}
          {alphabet === "A" && (
            <Handle
              type="source"
              position={Position.Bottom}
              id={`${alphabet}-to-next-level`}
              style={{
                background: "#53B1D9",
                width: "4px",
                height: "4px",
                bottom: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
                border: "none",
                zIndex: 10,
              }}
              className={styles.bottomHandle}
            />
          )}

          <span className={styles.letterText}>
            {alphabet}
          </span>
        </div>
      )}
    </div>
  );
};

export default WolfLevelLogo;