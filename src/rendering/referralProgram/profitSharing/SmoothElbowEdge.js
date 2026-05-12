import React from "react";
import { BaseEdge, getSmoothStepPath, EdgeLabelRenderer } from "@xyflow/react";
import styles from "./smoothElbowEdge.module.scss";

export default function SmoothElbowEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
  label,
  labelStyle,
  labelBgStyle,
  labelBgPadding,
  labelBgBorderRadius,
  labelShowBg,
}) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;
  const offset = data?.offset ?? (isMobile ? 40 : 80); // responsive default offset

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX: targetX,
    offset: offset,
    targetY,
    targetPosition,
    borderRadius: 30,
  });

  // Calculate the midpoint of the path for better label positioning
  // For curved paths, we need to account for the offset and direction
  const isHorizontal =
    Math.abs(targetX - sourceX) > Math.abs(targetY - sourceY);
  const labelOffset = isMobile ? offset * 0.6 : offset; // Reduce label offset on mobile
  const pathMidpoint = {
    x: isHorizontal
      ? (sourceX + targetX) / 2 + offset
      : (sourceX + targetX) / 2,
    y: isHorizontal
      ? (sourceY + targetY) / 2
      : (sourceY + targetY) / 2 + offset / 2,
  };

  // Responsive label font size and background
  const responsiveFontSize = isMobile
    ? labelStyle?.fontSize
      ? `calc(${labelStyle.fontSize} * 0.8)`
      : undefined // Let SCSS handle default
    : labelStyle?.fontSize;
  
  const responsivePadding = labelBgPadding
    ? isMobile
      ? `${Math.round(labelBgPadding[0] * 0.7)}px ${Math.round(labelBgPadding[1] * 0.7)}px`
      : `${labelBgPadding[0]}px ${labelBgPadding[1]}px`
    : undefined; // Let SCSS handle default
  
  const responsiveBorderRadius = labelBgBorderRadius
    ? isMobile
      ? Math.round(labelBgBorderRadius * 0.7)
      : labelBgBorderRadius
    : undefined; // Let SCSS handle default

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        className={styles.baseEdge}
        style={style}
        markerEnd={markerEnd}
      />
      {label && (
        <EdgeLabelRenderer>
          <div
            className={`${styles.edgeLabelContainer} nodrag nopan`}
            style={{
              transform: `translate(-50%, -50%) translate(${pathMidpoint.x + (labelOffset + (isMobile ? offset * 0.4 : 0))}px,${
                pathMidpoint.y -
                (labelOffset + (isMobile ? offset * 3.7 - 130 : 60))
              }px)`,
              ...(responsiveFontSize && { fontSize: responsiveFontSize }),
              ...(labelStyle?.fontWeight && { fontWeight: labelStyle.fontWeight }),
              ...(labelBgStyle?.fill && { backgroundColor: labelBgStyle.fill }),
              ...(labelBgStyle?.stroke && {
                border: `${labelBgStyle.strokeWidth || 1}px solid ${labelBgStyle.stroke}`,
              }),
              ...(responsiveBorderRadius && { borderRadius: `${responsiveBorderRadius}px` }),
              ...(responsivePadding && { padding: responsivePadding }),
              ...(labelStyle?.fill && { color: labelStyle.fill }),
              ...labelStyle,
            }}
          >
            <div
              className={styles.edgeLabelVertical}
              style={{
                ...(labelStyle?.transform && { transform: labelStyle.transform }),
                ...(labelStyle?.transformOrigin && { transformOrigin: labelStyle.transformOrigin }),
              }}
            >
              {label}
            </div>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}