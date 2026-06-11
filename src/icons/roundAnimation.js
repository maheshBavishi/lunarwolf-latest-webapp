'use client'
import React from 'react'
import { motion } from 'framer-motion'

// SVG canvas & centre
const W = 520
const H = 520
const CX = 260
const CY = 260

// Ring radii
const R1 = 80   // innermost
const R2 = 145  // middle
const R3 = 205  // outermost

// Wolf logo
const LOGO = '/assets/images/round-logo.svg'

// Label positions & connector end-points
const labels = [
    {
        id: 'capital',
        text: 'Capital Preservation',
        // badge top-left corner (so badge is centred around these)
        bx: 88, by: 10,
        bw: 165, bh: 36,
        // connector: from a point on ring3 to badge midpoint
        x1: CX + R3 * Math.cos(-Math.PI / 2 + 0.35),   // ~11 o'clock on ring3
        y1: CY + R3 * Math.sin(-Math.PI / 2 + 0.35),
        x2: 88 + 82.5,
        y2: 10 + 18,
    },
    {
        id: 'exposure',
        text: 'Controlled Exposure',
        bx: -8, by: 375,
        bw: 163, bh: 36,
        x1: CX + R3 * Math.cos(Math.PI / 2 + Math.PI / 3 + 0.15),
        y1: CY + R3 * Math.sin(Math.PI / 2 + Math.PI / 3 + 0.15),
        x2: -8 + 81.5,
        y2: 375 + 18,
    },
    {
        id: 'recovery',
        text: 'Adaptive Recovery',
        bx: 352, by: 388,
        bw: 158, bh: 36,
        x1: CX + R3 * Math.cos(Math.PI / 6 + 0.1),
        y1: CY + R3 * Math.sin(Math.PI / 6 + 0.1),
        x2: 352 + 79,
        y2: 388 + 18,
    },
]

export default function RoundAnimation() {
    return (
        <motion.svg
            width={W}
            height={H}
            viewBox={`0 0 ${W} ${H}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', width: '100%', maxWidth: `${W}px`, height: 'auto' }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
            <defs>
                {/* Glow filter for center circle */}
                <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Radial gradient for center circle bg */}
                <radialGradient id="centerGrad" cx="38%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#0e2d38" />
                    <stop offset="100%" stopColor="#060d10" />
                </radialGradient>
                {/* Connector line gradients */}
                <linearGradient id="lineGrad0" x1={labels[0].x1} y1={labels[0].y1} x2={labels[0].x2} y2={labels[0].y2} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" />
                    <stop offset="1" stopColor="#216F92" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineGrad1" x1={labels[1].x1} y1={labels[1].y1} x2={labels[1].x2} y2={labels[1].y2} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" />
                    <stop offset="1" stopColor="#216F92" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1={labels[2].x1} y1={labels[2].y1} x2={labels[2].x2} y2={labels[2].y2} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" />
                    <stop offset="1" stopColor="#216F92" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* ── Outer ring (R3) — slow CW ──────────────────────────── */}
            <motion.circle
                cx={CX} cy={CY} r={R3}
                stroke="#99FCFF"
                strokeOpacity="0.28"
                strokeWidth="1"
                strokeDasharray="9 7"
                fill="none"
                style={{ transformOrigin: `${CX}px ${CY}px` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
            />

            {/* ── Middle ring (R2) — CCW ─────────────────────────────── */}
            <motion.circle
                cx={CX} cy={CY} r={R2}
                stroke="#99FCFF"
                strokeOpacity="0.38"
                strokeWidth="1"
                strokeDasharray="7 6"
                fill="none"
                style={{ transformOrigin: `${CX}px ${CY}px` }}
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            />

            {/* ── Inner ring (R1) — CW fast ─────────────────────────── */}
            <motion.circle
                cx={CX} cy={CY} r={R1}
                stroke="#99FCFF"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="5 5"
                fill="none"
                style={{ transformOrigin: `${CX}px ${CY}px` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />

            {/* ── Outer glow pulse ──────────────────────────────────── */}
            <motion.circle
                cx={CX} cy={CY} r={R1 + 10}
                fill="rgba(0,221,251,0.08)"
                animate={{ r: [R1 + 10, R1 + 24, R1 + 10], opacity: [0.08, 0.22, 0.08] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* ── Center circle background + glow ──────────────────── */}
            <circle
                cx={CX} cy={CY} r={60}
                fill="url(#centerGrad)"
                stroke="rgba(56,189,248,0.4)"
                strokeWidth="1"
                filter="url(#glowFilter)"
            />

            {/* ── Center logo (wolf) ────────────────────────────────── */}
            <motion.image
                href={LOGO}
                x={CX - 38} y={CY - 38}
                width="76" height="76"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* ── Orbiting cyan dot on R2 ──────────────────────────── */}
            <motion.g
                style={{ transformOrigin: `${CX}px ${CY}px` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            >
                <circle cx={CX} cy={CY - R2} r="4.5"
                    fill="#38BDF8"
                    style={{ filter: 'drop-shadow(0 0 6px #38BDF8)' }}
                />
            </motion.g>

            {/* ── Orbiting teal dot on R1 (CCW) ───────────────────── */}
            <motion.g
                style={{ transformOrigin: `${CX}px ${CY}px` }}
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
                <circle cx={CX} cy={CY - R1} r="3.5"
                    fill="#6bc5e0"
                    style={{ filter: 'drop-shadow(0 0 5px #6bc5e0)' }}
                />
            </motion.g>

            {/* ── Connector lines (draw-in + pulse) ────────────────── */}
            {labels.map((l, i) => (
                <motion.line
                    key={l.id}
                    x1={l.x1} y1={l.y1}
                    x2={l.x2} y2={l.y2}
                    stroke={`url(#lineGrad${i})`}
                    strokeWidth="0.8"
                    strokeDasharray="3 3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0.55, 1] }}
                    transition={{
                        pathLength: { duration: 1, ease: 'easeOut', delay: 0.6 + i * 0.2 },
                        opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.6 + i * 0.2 },
                    }}
                />
            ))}

            {/* ── Labels (float up/down infinitely) ────────────────── */}
            {labels.map((l, i) => (
                <motion.g
                    key={l.id + '-label'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, -5, 0] }}
                    transition={{
                        opacity: { duration: 0.6, delay: 1.1 + i * 0.2 },
                        y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 + i * 0.5 },
                    }}
                >
                    {/* Badge background */}
                    <rect
                        x={l.bx} y={l.by}
                        width={l.bw} height={l.bh}
                        rx="5.5"
                        fill="rgba(0,170,255,0.28)"
                        stroke="#33ACE0"
                        strokeWidth="0.6"
                    />
                    {/* Label text */}
                    <text
                        x={l.bx + l.bw / 2}
                        y={l.by + l.bh / 2 + 5}
                        textAnchor="middle"
                        fill="white"
                        fontSize="13"
                        fontFamily="Inter, sans-serif"
                        fontWeight="400"
                    >
                        {l.text}
                    </text>
                </motion.g>
            ))}
        </motion.svg>
    )
}
