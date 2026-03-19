"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Mountain,
  Droplets,
  ClipboardCheck,
  Wrench,
  FolderKanban,
} from "lucide-react";

const expertise = [
  { title: "Substation", description: "Design, planning, and implementation of efficient and environmentally sustainable hydroelectric power projects, Including HV/LV Transmission lines.", icon: Zap },
  { title: "Dam Engineering", description: "Development of safe and reliable dams for water supply, flood control, and Dam safety.", icon: Mountain },
  { title: "Irrigation Development", description: "Optimal water resource utilization, improved agricultural productivity, and sustainable farming systems.", icon: Droplets },
  { title: "Construction Supervision", description: "Quality control, timely execution, and Cost efficiency (value for money) throughout the construction lifecycle.", icon: ClipboardCheck },
  { title: "Operation & Maintenance", description: "Power station performance optimization, reduced downtime, and asset longevity.", icon: Wrench },
  { title: "Project Management", description: "Seamless coordination from project initiation through completion.", icon: FolderKanban },
];

const PRIMARY_COUNT = 4;
const primaryExpertise = expertise.slice(0, PRIMARY_COUNT);
const secondaryExpertise = expertise.slice(PRIMARY_COUNT);

const expertiseImages: { src: string; alt: string; remote?: boolean }[] = [
  { src: "/expertise/substation.png", alt: "Hydropower engineering" },
  { src: "/expertise/dam.jpg", alt: "Dam engineering" },
  { src: "/expertise/irrigation.png", alt: "Irrigation development" },
  { src: "/mep-media/zungeru.jpg", alt: "Construction supervision", remote: true },
];

const ROTATE_INTERVAL_MS = 5000;

export function CoreExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % PRIMARY_COUNT);
    }, ROTATE_INTERVAL_MS);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % PRIMARY_COUNT);
    }, ROTATE_INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const active = primaryExpertise[activeIndex];
  const activeImage = expertiseImages[activeIndex];

  return (
    <section
      className="relative bg-background px-6 py-20 md:py-28"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
          Core Expertise
        </p>
        <motion.h2
          id="expertise-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-2 font-[--font-poppins] text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl"
        >
          Professional Experience
        </motion.h2>

        {/* PRIMARY EXPERTISE SHOWCASE */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr,400px] lg:gap-12">
          {/* LEFT: Large image panel */}
          <div className="space-y-4">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-primary md:aspect-16/10 lg:min-h-95 lg:aspect-auto">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: 1.03 }}
                    transition={{ duration: 8, ease: "easeInOut" }}
                  >
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      unoptimized={!!activeImage.remote}
                      priority={activeIndex === 0}
                    />
                  </motion.div>
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <motion.h3
                      key={`title-${activeIndex}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="font-[--font-poppins] text-2xl font-bold text-white md:text-3xl"
                    >
                      {active?.title}
                    </motion.h3>
                    <motion.p
                      key={`desc-${activeIndex}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="mt-2 max-w-xl text-sm leading-relaxed text-white/90 md:text-base"
                    >
                      {active?.description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Pagination dots */}
            <div className="flex justify-center gap-2 lg:justify-start" role="group" aria-label="Expertise slides">
              {primaryExpertise.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background ${
                    i === activeIndex
                      ? "scale-125 bg-secondary"
                      : "bg-secondary/30 hover:bg-secondary/50"
                  }`}
                  aria-label={`Show ${primaryExpertise[i]?.title}`}
                  aria-pressed={i === activeIndex}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Vertical navigation cards */}
          <div className="flex flex-col gap-3">
            {primaryExpertise.map((item, i) => {
              const isActive = i === activeIndex;
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.title}
                  type="button"
                  onClick={() => goTo(i)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${
                    isActive
                      ? "border-secondary/50 bg-secondary/10 shadow-sm"
                      : "border-[#E5E7EB] bg-white hover:border-secondary/30 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isActive ? "bg-secondary text-white" : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-[--font-poppins] font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-text">
                      {item.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* SECONDARY EXPERTISE GRID */}
        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Additional expertise
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {secondaryExpertise.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-300 hover:border-secondary/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-[--font-poppins] text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
