"use client";

import React from "react";
import { DayItem } from "@/data/curriculum";

export function VetorialLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      <svg
        viewBox="0 0 44 44"
        fill="none"
        className="w-9 h-9 shrink-0 transition-transform duration-500 group-hover:scale-105"
      >
        {/* Subtle outer geometric construction circle */}
        <circle
          cx="22"
          cy="22"
          r="20"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="0.75"
          strokeDasharray="3 3"
          className="math-orbit"
        />
        {/* Sharp V vector wings */}
        <path
          d="M7 9L22 37L37 9L29.5 13.5L22 28.5L14.5 13.5L7 9Z"
          fill="white"
          stroke="white"
          strokeWidth="0.8"
        />
        {/* Inner fine-line bisector */}
        <line
          x1="22"
          y1="5"
          x2="22"
          y2="39"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.75"
          strokeDasharray="2 2"
        />
      </svg>
      <div className="flex flex-col leading-none tracking-[0.18em]">
        <span className="text-sm font-bold text-white uppercase">VETORIAL</span>
        <span className="text-[10px] font-light text-zinc-400 uppercase tracking-[0.26em] mt-0.5">
          ESTUDOS
        </span>
      </div>
    </div>
  );
}

/**
 * Floating mathematical fine-line background layer for the Hero and sections,
 * faithful to the reference image (`1,38`, `3x`, `0`, `5`, `2/1`, `-8x`, `+`, dashed L-brackets, inscribed circles).
 */
export function HeroMathBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
      <svg
        className="w-full h-full opacity-80"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Top-left dashed L-axis with 0 (from mockup) */}
        <g className="opacity-50">
          <path
            d="M 88 0 L 88 115 L 42 115"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="math-dash-march"
          />
          <text
            x="48"
            y="134"
            fill="rgba(255,255,255,0.45)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            0
          </text>
        </g>

        {/* Left mid annotations: 1,38 and 3x and crosshair + (from mockup) */}
        <g className="opacity-55">
          <text
            x="84"
            y="295"
            fill="rgba(255,255,255,0.4)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            1,38
          </text>
          <line
            x1="114"
            y1="292"
            x2="132"
            y2="292"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text
            x="24"
            y="348"
            fill="rgba(255,255,255,0.38)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            3x
          </text>

          {/* Animated rotating / pulsing crosshair + */}
          <g transform="translate(48, 495)">
            <line
              x1="-11"
              y1="0"
              x2="11"
              y2="0"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="-11"
              x2="0"
              y2="11"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1"
            />
            <circle
              cx="0"
              cy="0"
              r="18"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.75"
              strokeDasharray="2 3"
              className="math-orbit"
            />
          </g>

          {/* Bottom-left dashed bracket with 3 */}
          <text
            x="102"
            y="642"
            fill="rgba(255,255,255,0.4)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            3
          </text>
          <path
            d="M 118 634 L 118 718 L 62 718"
            stroke="rgba(255,255,255,0.32)"
            strokeWidth="1"
            strokeDasharray="5 4"
            className="math-dash-march"
          />
        </g>

        {/* Top center vertical dashed drop & number 5 */}
        <g className="opacity-50">
          <line
            x1="785"
            y1="28"
            x2="785"
            y2="86"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <text
            x="1002"
            y="95"
            fill="rgba(255,255,255,0.4)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            5
          </text>
        </g>

        {/* Top-right fraction 2/1 with horizontal dashed vector */}
        <g className="opacity-60">
          <line
            x1="1290"
            y1="128"
            x2="1352"
            y2="128"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="math-dash-march"
          />
          <text
            x="1362"
            y="122"
            fill="rgba(255,255,255,0.5)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            2
          </text>
          <line
            x1="1359"
            y1="127"
            x2="1373"
            y2="127"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
          />
          <text
            x="1362"
            y="140"
            fill="rgba(255,255,255,0.5)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            1
          </text>
        </g>

        {/* Right middle vector angle with -8x */}
        <g className="opacity-55">
          <text
            x="1294"
            y="262"
            fill="rgba(255,255,255,0.4)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            1
          </text>
          <path
            d="M 1346 462 L 1346 378 L 1384 378"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="math-dash-march"
          />
          {/* Tiny arrowheads */}
          <path
            d="M 1380 375 L 1386 378 L 1380 381"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
          />
          <path
            d="M 1343 458 L 1346 464 L 1349 458"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
          />
          <text
            x="1322"
            y="432"
            fill="rgba(255,255,255,0.42)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            - 8x
          </text>
        </g>

        {/* Center-bottom diagonal construction lines & 0 */}
        <g className="opacity-45">
          <line
            x1="710"
            y1="670"
            x2="695"
            y2="725"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
            strokeDasharray="5 4"
          />
          <text
            x="882"
            y="682"
            fill="rgba(255,255,255,0.4)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            0
          </text>
          <text
            x="1332"
            y="646"
            fill="rgba(255,255,255,0.4)"
            fontSize="11"
            fontFamily="var(--font-mono)"
          >
            0
          </text>
          <line
            x1="1348"
            y1="802"
            x2="1364"
            y2="855"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </g>

        {/* Subtle large inscribed/circumscribed geometric watermark behind the hero */}
        <g transform="translate(690, 360)" className="opacity-20">
          <circle
            cx="0"
            cy="0"
            r="260"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.75"
          />
          <circle
            cx="0"
            cy="0"
            r="130"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.75"
            strokeDasharray="4 6"
            className="math-orbit"
          />
          {/* Inscribed equilateral triangle */}
          <polygon
            points="0,-260 225.16,130 -225.16,130"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.75"
            fill="none"
            className="math-draw"
          />
          {/* Sine wave passing delicately across */}
          <path
            d="M -650 80 Q -480 -60, -320 80 T 0 80 T 320 80 T 640 80"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="0.85"
            fill="none"
            className="math-draw"
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * Hero Right-Side Device Mockup (Tablet + Smartphone) with animated fine-line mathematical geometry
 * matching both the uploaded landing page mockup AND Page 1 of the PDF.
 */
export function HeroDevicesMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[470px] pt-2 pb-6 select-none">
      {/* Ambient fine-line orbital ring behind the devices */}
      <svg
        viewBox="0 0 500 500"
        className="pointer-events-none absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] opacity-35"
        fill="none"
      >
        <circle
          cx="250"
          cy="250"
          r="220"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.75"
          strokeDasharray="3 6"
          className="math-orbit"
        />
        <circle
          cx="250"
          cy="250"
          r="175"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="0.75"
          className="math-orbit-reverse"
        />
      </svg>

      {/* Main Tablet Frame */}
      <div className="relative z-10 w-[82%] rounded-[26px] border border-white/35 bg-[#0a0a0d] p-3.5 shadow-[0_0_80px_rgba(0,0,0,0.95)] transition-transform duration-500 hover:border-white/55">
        {/* Top camera sensor */}
        <div className="mx-auto mb-2.5 h-1.5 w-1.5 rounded-full border border-white/30 bg-zinc-900" />

        {/* Tablet Inner Screen */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/20 bg-[#070709] aspect-[3/4.1] flex flex-col justify-between">
          {/* Diagonal subtle glass reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.07)_42%,transparent_42.5%)]"
          />

          {/* Tablet Header Content */}
          <div className="relative z-10 p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-5">
              <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
                <path
                  d="M5 7L16 27L27 7L21.5 10.5L16 21L10.5 10.5L5 7Z"
                  fill="white"
                />
              </svg>
              <div className="leading-none tracking-[0.16em]">
                <span className="block text-[9px] font-bold text-white">VETORIAL</span>
                <span className="block text-[7px] text-zinc-400 tracking-[0.22em]">
                  ESTUDOS
                </span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-[28px] font-bold tracking-tight text-white leading-tight">
              Guia 30 Dias
            </h3>
            <p className="mt-1.5 text-sm text-zinc-300 font-normal">
              - Vetorial Estudos
            </p>
            <div className="mt-3 inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              O Resgate das Exatas
            </div>
          </div>

          {/* Tablet Lower Screen: Animated Fine-Line Geometric Composition (Exact match to mockup + inscribed circles) */}
          <div className="relative z-10 w-full flex-1 border-t border-white/20">
            <svg
              viewBox="0 0 320 230"
              className="w-full h-full block"
              fill="none"
            >
              {/* Grid Partition Lines */}
              <line
                x1="155"
                y1="0"
                x2="155"
                y2="230"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="125"
                x2="320"
                y2="125"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1"
              />

              {/* Top-Left Quadrant: Inscribed Right Triangle & Hypotenuse Vectors */}
              <polygon
                points="26,22 26,125 155,125"
                stroke="rgba(255,255,255,0.65)"
                strokeWidth="1.1"
                fill="rgba(255,255,255,0.02)"
                className="math-draw"
              />
              <line
                x1="26"
                y1="22"
                x2="92"
                y2="125"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.9"
              />
              {/* Right-angle marker */}
              <rect
                x="26"
                y="113"
                width="12"
                height="12"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.8"
              />

              {/* Top-Right Quadrant: Quarter Circle & Circumscribed Arc */}
              <path
                d="M 155 62 A 63 63 0 0 0 218 0 L 155 0 Z"
                fill="rgba(255,255,255,0.12)"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1"
              />
              <circle
                cx="210"
                cy="62"
                r="42"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="0.85"
                strokeDasharray="3 3"
                className="math-orbit"
              />

              {/* Bottom-Left Quadrant: Inscribed Circle inside Square */}
              <circle
                cx="90"
                cy="177"
                r="51"
                stroke="rgba(255,255,255,0.65)"
                strokeWidth="1.1"
                className="math-draw"
              />
              <circle
                cx="90"
                cy="177"
                r="26"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="0.8"
                strokeDasharray="2 3"
                className="math-orbit-reverse"
              />
              <circle cx="90" cy="177" r="2.5" fill="white" />

              {/* Bottom-Right Quadrant: Divided Circle with Shaded Sectors & Inscribed Star */}
              <g transform="translate(198, 177)">
                <circle
                  cx="0"
                  cy="0"
                  r="48"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.1"
                />
                {/* Shaded top-left sector */}
                <path
                  d="M 0 0 L -48 0 A 48 48 0 0 1 0 -48 Z"
                  fill="rgba(255,255,255,0.18)"
                />
                <line
                  x1="-48"
                  y1="0"
                  x2="48"
                  y2="0"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="0.9"
                />
                <line
                  x1="0"
                  y1="-48"
                  x2="0"
                  y2="48"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="0.9"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Tablet Home Button */}
        <div className="mt-2.5 flex justify-center">
          <div className="h-5 w-5 rounded-full border border-white/30 bg-transparent" />
        </div>
      </div>

      {/* Overlapping Smartphone Frame (Bottom Right) — Featuring the Sacred Inscribed Hexagram from Page 1 of the PDF */}
      <div className="absolute right-0 bottom-0 z-20 w-[42%] rounded-[24px] border border-white/40 bg-[#08080b] p-2.5 shadow-[-20px_10px_50px_rgba(0,0,0,0.95)] transition-transform duration-500 hover:-translate-y-1 hover:border-white/65">
        {/* Phone Notch */}
        <div className="mx-auto mb-2 h-2.5 w-14 rounded-full border border-white/20 bg-[#050507]" />

        {/* Phone Inner Screen: Exact Cover from Page 1 of the PDF */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/15 bg-[#050507] aspect-[9/18.5] flex flex-col items-center justify-between py-5 px-3 text-center">
          <span className="text-[7px] font-mono tracking-[0.28em] text-zinc-400 uppercase">
            VETORIAL ESTUDOS
          </span>

          {/* Animated Sacred Geometry from Page 1 of the PDF (Inscribed & Circumscribed Circles + Dual Triangles) */}
          <div className="relative w-28 h-28 my-auto flex items-center justify-center">
            <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
              {/* Outer circumscribed circle */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="1"
              />
              {/* Inner dashed orbit */}
              <circle
                cx="60"
                cy="60"
                r="42"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                className="math-orbit"
              />
              {/* Inner inscribed circle */}
              <circle
                cx="60"
                cy="60"
                r="25"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="0.75"
                strokeDasharray="2 2"
                className="math-orbit-reverse"
              />
              {/* Crosshair axes */}
              <line
                x1="4"
                y1="60"
                x2="116"
                y2="60"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.75"
                strokeDasharray="2 3"
              />
              <line
                x1="60"
                y1="4"
                x2="60"
                y2="116"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.75"
                strokeDasharray="2 3"
              />
              {/* Upward Inscribed Equilateral Triangle */}
              <polygon
                points="60,17 97,81.5 23,81.5"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="1"
                fill="none"
                className="math-draw"
              />
              {/* Downward Inscribed Equilateral Triangle */}
              <polygon
                points="60,103 97,38.5 23,38.5"
                stroke="rgba(255,255,255,0.38)"
                strokeWidth="0.85"
                fill="none"
              />
              {/* Center Origin Point */}
              <circle cx="60" cy="60" r="3.5" fill="white" />
            </svg>
          </div>

          <div className="w-full space-y-1">
            <p className="text-[11px] font-mono tracking-[0.22em] text-white font-semibold">
              GUIA 30 DIAS
            </p>
            <p className="text-[6.5px] font-mono tracking-[0.16em] text-zinc-400 uppercase">
              O RESGATE DAS EXATAS
            </p>
            <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[6px] font-mono text-zinc-500">
              <span>PDF INTERATIVO</span>
              <span>22 PÁGINAS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Renders the animated fine-line mathematical icon for any of the 30 days,
 * faithful to the minimalist geometric illustrations inside the PDF.
 */
export function DayGeometryIcon({
  type,
  className = "w-12 h-12",
}: {
  type: DayItem["geometryType"];
  className?: string;
}) {
  switch (type) {
    case "signals":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect
            x="14"
            y="8"
            width="20"
            height="32"
            stroke="white"
            strokeWidth="1.1"
          />
          <line
            x1="14"
            y1="16"
            x2="34"
            y2="16"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
          <line
            x1="14"
            y1="24"
            x2="34"
            y2="24"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
          <line
            x1="14"
            y1="32"
            x2="34"
            y2="32"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
        </svg>
      );
    case "fraction":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle
            cx="24"
            cy="24"
            r="14"
            stroke="white"
            strokeWidth="1.1"
            className="math-orbit"
          />
          <line x1="10" y1="24" x2="38" y2="24" stroke="white" strokeWidth="1" />
          <line x1="24" y1="10" x2="24" y2="38" stroke="white" strokeWidth="1" />
        </svg>
      );
    case "decimal":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <line
            x1="8"
            y1="26"
            x2="40"
            y2="26"
            stroke="white"
            strokeWidth="1.1"
          />
          <line
            x1="16"
            y1="22"
            x2="16"
            y2="30"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
          />
          <circle cx="24" cy="26" r="2.5" fill="white" />
          <line
            x1="32"
            y1="22"
            x2="32"
            y2="30"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
          />
          <path
            d="M 24 20 Q 28 13 32 20"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
        </svg>
      );
    case "proportion":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <line x1="24" y1="10" x2="24" y2="38" stroke="white" strokeWidth="1.1" />
          <line x1="12" y1="20" x2="36" y2="20" stroke="white" strokeWidth="1.1" />
          <rect x="13" y="20" width="6" height="6" stroke="white" strokeWidth="0.9" />
          <rect x="29" y="20" width="6" height="6" stroke="white" strokeWidth="0.9" />
        </svg>
      );
    case "axes":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <polyline
            points="10,10 10,36 38,36"
            stroke="white"
            strokeWidth="1.1"
          />
          <rect x="15" y="24" width="4" height="12" stroke="white" strokeWidth="0.9" />
          <rect
            x="23"
            y="14"
            width="4"
            height="22"
            fill="rgba(255,255,255,0.85)"
            stroke="white"
            strokeWidth="0.9"
          />
          <rect x="31" y="28" width="4" height="8" stroke="white" strokeWidth="0.9" />
        </svg>
      );
    case "balance-mean":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <polygon
            points="24,10 38,36 10,36"
            stroke="white"
            strokeWidth="1.1"
          />
          <line
            x1="24"
            y1="10"
            x2="24"
            y2="36"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
          <circle cx="24" cy="27" r="2.5" fill="white" />
        </svg>
      );
    case "weighted":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="19" cy="24" r="9" stroke="white" strokeWidth="1.1" />
          <circle cx="29" cy="24" r="9" fill="white" fillOpacity="0.85" stroke="white" strokeWidth="1.1" />
        </svg>
      );
    case "median":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <line x1="8" y1="24" x2="40" y2="24" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <circle cx="12" cy="24" r="2.5" stroke="white" strokeWidth="1" fill="#08080a" />
          <circle cx="20" cy="24" r="2.5" stroke="white" strokeWidth="1" fill="#08080a" />
          <circle cx="28" cy="24" r="3.5" fill="white" />
          <circle cx="36" cy="24" r="2.5" stroke="white" strokeWidth="1" fill="#08080a" />
        </svg>
      );
    case "perimeter":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect
            x="12"
            y="14"
            width="24"
            height="20"
            stroke="white"
            strokeWidth="1.1"
            className="math-draw"
          />
          <circle cx="12" cy="14" r="2" fill="white" />
          <circle cx="36" cy="14" r="2" fill="white" />
          <circle cx="36" cy="34" r="2" fill="white" />
          <circle cx="12" cy="34" r="2" fill="white" />
        </svg>
      );
    case "quadrilateral":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <polygon
            points="16,14 38,14 32,34 10,34"
            stroke="white"
            strokeWidth="1.1"
          />
          <line
            x1="16"
            y1="14"
            x2="16"
            y2="34"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
        </svg>
      );
    case "triangle":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <polygon
            points="24,10 38,36 10,36"
            stroke="white"
            strokeWidth="1.1"
          />
          <line
            x1="24"
            y1="10"
            x2="24"
            y2="36"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
        </svg>
      );
    case "inscribed-circle":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="1.1" />
          <circle
            cx="24"
            cy="24"
            r="9"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            className="math-orbit"
          />
          <circle cx="24" cy="24" r="2" fill="white" />
          <line
            x1="24"
            y1="24"
            x2="38"
            y2="24"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
        </svg>
      );
    case "pythagoras":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <polygon
            points="14,10 14,36 36,36"
            stroke="white"
            strokeWidth="1.1"
          />
          <rect
            x="14"
            y="30"
            width="6"
            height="6"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="0.9"
          />
        </svg>
      );
    case "trigonometry":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <polygon
            points="36,12 36,36 10,36"
            stroke="white"
            strokeWidth="1.1"
          />
          <path
            d="M 18 36 A 8 8 0 0 0 16.5 30"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      );
    case "prism":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="12" y="16" width="18" height="18" stroke="white" strokeWidth="1" />
          <rect
            x="18"
            y="10"
            width="18"
            height="18"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
          />
          <line x1="12" y1="16" x2="18" y2="10" stroke="white" strokeWidth="0.9" />
          <line x1="30" y1="16" x2="36" y2="10" stroke="white" strokeWidth="0.9" />
          <line x1="30" y1="34" x2="36" y2="28" stroke="white" strokeWidth="0.9" />
          <line
            x1="12"
            y1="34"
            x2="18"
            y2="28"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
        </svg>
      );
    case "equation1":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <line x1="24" y1="10" x2="24" y2="38" stroke="white" strokeWidth="1.1" />
          <line x1="10" y1="18" x2="38" y2="18" stroke="white" strokeWidth="1.1" />
          <polygon points="10,18 6,28 14,28" stroke="white" strokeWidth="0.9" />
          <polygon points="38,18 34,28 42,28" stroke="white" strokeWidth="0.9" />
          <line x1="18" y1="38" x2="30" y2="38" stroke="white" strokeWidth="1.1" />
        </svg>
      );
    case "parabola":
    case "vertex":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <line
            x1="8"
            y1="34"
            x2="40"
            y2="34"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
          />
          <path
            d="M 12 34 Q 24 6 36 34"
            stroke="white"
            strokeWidth="1.2"
            className="math-draw"
          />
          <circle cx="24" cy="20" r="2.2" fill="white" />
        </svg>
      );
    case "linear-func":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <polyline points="10,10 10,38 38,38" stroke="white" strokeWidth="1.1" />
          <line
            x1="10"
            y1="32"
            x2="36"
            y2="12"
            stroke="white"
            strokeWidth="1.1"
            strokeDasharray="3 2"
          />
          <circle cx="10" cy="32" r="2.2" fill="white" />
        </svg>
      );
    case "compound-curve":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <polyline points="10,10 10,38 38,38" stroke="white" strokeWidth="1.1" />
          <line
            x1="10"
            y1="34"
            x2="36"
            y2="24"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
          <path
            d="M 10 34 Q 26 33 35 10"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );
    case "growth-factor":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <line x1="24" y1="38" x2="24" y2="10" stroke="white" strokeWidth="1.1" />
          <polygon points="24,10 17,20 31,20" stroke="white" strokeWidth="1.1" />
          <line x1="14" y1="28" x2="34" y2="28" stroke="rgba(255,255,255,0.5)" strokeWidth="0.9" />
        </svg>
      );
    case "combinatorics":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="14" y="20" width="20" height="18" stroke="white" strokeWidth="1.1" />
          <path
            d="M 18 20 V 14 A 6 6 0 0 1 30 14 V 20"
            stroke="white"
            strokeWidth="1.1"
          />
          <line x1="24" y1="26" x2="24" y2="32" stroke="white" strokeWidth="1.2" />
        </svg>
      );
    case "factorial":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <line x1="24" y1="10" x2="24" y2="28" stroke="white" strokeWidth="1.5" />
          <circle cx="24" cy="35" r="2" fill="white" />
          <circle
            cx="24"
            cy="24"
            r="16"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.8"
            strokeDasharray="2 3"
            className="math-orbit"
          />
        </svg>
      );
    case "podium":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="10" y="24" width="9" height="12" stroke="white" strokeWidth="1" />
          <rect x="19" y="14" width="10" height="22" stroke="white" strokeWidth="1.1" />
          <rect x="29" y="27" width="9" height="9" stroke="white" strokeWidth="1" />
        </svg>
      );
    case "combination":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle
            cx="24"
            cy="24"
            r="12"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
          <circle cx="24" cy="12" r="2.5" fill="white" />
          <circle cx="14" cy="30" r="2.5" fill="white" />
          <circle cx="34" cy="30" r="2.5" stroke="white" strokeWidth="1" fill="#08080a" />
        </svg>
      );
    case "dice-prob":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect x="12" y="12" width="24" height="24" rx="2" stroke="white" strokeWidth="1.1" />
          <circle cx="18" cy="18" r="1.6" fill="white" />
          <circle cx="30" cy="18" r="1.6" fill="white" />
          <circle cx="24" cy="24" r="1.6" fill="white" />
          <circle cx="18" cy="30" r="1.6" fill="white" />
          <circle cx="30" cy="30" r="1.6" fill="white" />
        </svg>
      );
    case "venn":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="20" cy="24" r="10" stroke="white" strokeWidth="1.1" />
          <circle cx="28" cy="24" r="10" stroke="white" strokeWidth="1.1" />
          <path
            d="M 24 15.5 A 10 10 0 0 1 24 32.5 A 10 10 0 0 1 24 15.5 Z"
            fill="rgba(255,255,255,0.28)"
          />
        </svg>
      );
    case "logarithm":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <polyline points="10,10 10,38 38,38" stroke="white" strokeWidth="1.1" />
          <path
            d="M 13 36 Q 16 18 37 14"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>
      );
    case "radar-tri":
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle
            cx="24"
            cy="24"
            r="14"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="3 2"
            className="math-orbit"
          />
          <circle cx="24" cy="24" r="8" stroke="rgba(255,255,255,0.5)" strokeWidth="0.9" />
          <circle cx="24" cy="24" r="2.2" fill="white" />
          <line x1="24" y1="24" x2="35" y2="13" stroke="white" strokeWidth="1.1" />
        </svg>
      );
  }
}
