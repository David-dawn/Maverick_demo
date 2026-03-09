"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { id: "strategy", label: "Strategy", description: "Strategic planning and project scoping for hydropower and infrastructure development." },
  { id: "feasibility", label: "Feasibility", description: "Pre-feasibility and feasibility studies, environmental and social assessments, and licensing support." },
  { id: "engineering", label: "Engineering", description: "Detailed engineering design, specifications, and owner's or lender's engineering services." },
  { id: "construction", label: "Construction", description: "Construction supervision, commissioning, and quality assurance throughout build-out." },
  { id: "operation", label: "Operation", description: "Operation support, maintenance planning, and lifetime extension for power stations and dams." },
];

const ROTATE_INTERVAL_MS = 4000;
const N = STEPS.length;

// Node positions (angles in degrees from top, clockwise): top, top-right, bottom-right, bottom-left, top-left
const NODE_ANGLES = [270, 315, 45, 135, 225];

function angleToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

export function ProjectLifecycle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % N);
    }, ROTATE_INTERVAL_MS);
  }, []);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + N) % N);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % N);
  }, [activeIndex, goTo]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % N);
    }, ROTATE_INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      className="relative bg-white px-6 py-20 md:py-28"
      aria-labelledby="lifecycle-heading"
    >
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#117A8B]">
          Project Lifecycle
        </p>
        <motion.h2
          id="lifecycle-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-2 font-[--font-poppins] text-3xl font-bold uppercase tracking-wide text-[#0A2E4F] md:text-4xl text-center"
        >
          From strategy to operation
        </motion.h2>

        {/* Large circular lifecycle diagram */}
        <div className="mt-14 flex flex-col items-center relative">
          <div className="relative w-[320px] md:w-[450px] lg:w-[550px] aspect-square max-w-full flex items-center justify-center">
            <LifecycleCircle
              activeIndex={activeIndex}
              onSelectNode={goTo}
            />
            {/* Center content inside the circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-8 md:px-12">
              <div className="max-w-[220px] md:max-w-[280px] text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="font-[--font-poppins] text-lg font-bold text-[#0A2E4F] md:text-xl lg:text-2xl">
                      {STEPS[activeIndex]?.label}
                    </p>
                    <p className="mt-2 text-sm text-[#333333] leading-relaxed md:text-base">
                      {STEPS[activeIndex]?.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="mt-8 flex items-center gap-4" role="group" aria-label="Lifecycle navigation">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#E5E7EB] bg-white text-[#0A2E4F] transition-colors hover:border-[#117A8B] hover:bg-[#117A8B]/10 hover:text-[#117A8B] focus:outline-none focus:ring-2 focus:ring-[#117A8B] focus:ring-offset-2"
              aria-label="Previous step"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#E5E7EB] bg-white text-[#0A2E4F] transition-colors hover:border-[#117A8B] hover:bg-[#117A8B]/10 hover:text-[#117A8B] focus:outline-none focus:ring-2 focus:ring-[#117A8B] focus:ring-offset-2"
              aria-label="Next step"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function LifecycleCircle({
  activeIndex,
  onSelectNode,
}: {
  activeIndex: number;
  onSelectNode: (index: number) => void;
}) {
  const size = 400;
  const cx = size / 2;
  const cy = size / 2;
  const r = 170;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * r;
  const segmentLength = circumference / N;
  const progressLength = segmentLength * (activeIndex + 1);
  const dashOffset = circumference - progressLength;

  return (
    <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full"
        aria-hidden
      >
        {/* Base circle - light gray track */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc - primary color, rotated so 0 is at top */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#117A8B"
          strokeWidth={strokeWidth + 0.5}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${cx} ${cy})`}
          style={{
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
        />
        {/* Node markers */}
        {NODE_ANGLES.map((angleDeg, i) => {
          const rad = angleToRad(angleDeg);
          const x = cx + r * Math.cos(rad);
          const y = cy + r * Math.sin(rad);
          const isActive = i === activeIndex;
          const nodeR = 22;
          return (
            <g key={STEPS[i]?.id}>
              {/* Inactive: subtle fill so numbers read clearly */}
              <motion.circle
                cx={x}
                cy={y}
                r={nodeR}
                fill={isActive ? "#117A8B" : "#ffffff"}
                stroke="#117A8B"
                strokeWidth={isActive ? 2.5 : 1.5}
                opacity={isActive ? 1 : 0.85}
                initial={false}
                animate={{
                  scale: 1,
                  fill: isActive ? "#117A8B" : "#ffffff",
                }}
                transition={{ duration: 0.25 }}
                style={{ filter: isActive ? "drop-shadow(0 2px 4px rgba(17,122,139,0.3))" : undefined }}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isActive ? "#ffffff" : "#0A2E4F"}
                style={{ fontSize: "13px", fontWeight: 700, fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                {i + 1}
              </text>
              {/* Invisible larger hit area for click */}
              <circle
                cx={x}
                cy={y}
                r={36}
                fill="transparent"
                className="cursor-pointer"
                onClick={() => onSelectNode(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectNode(i);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Step ${i + 1}: ${STEPS[i]?.label}`}
                aria-current={isActive ? "step" : undefined}
              />
            </g>
          );
        })}
      </svg>
  );
}
