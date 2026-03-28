"use client";

import { useState, useEffect, useRef } from "react";
import { LoadingImage } from "@/components/ui/LoadingImage";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projectsData";

const ROTATE_INTERVAL_MS = 6000;

export function CaseStudyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const project = projectsData[currentIndex];

  const goTo = (index: number) => {
    setCurrentIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % projectsData.length);
    }, ROTATE_INTERVAL_MS);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % projectsData.length);
    }, ROTATE_INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      className="relative bg-primary px-6 py-20 md:py-28"
      aria-labelledby="case-study-heading"
    >
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <LoadingImage
              src={projectsData[currentIndex]?.image ?? ""}
              alt=""
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-primary/85" aria-hidden />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
          Project Case Study
        </p>
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="relative aspect-video overflow-hidden rounded-xl lg:aspect-auto lg:min-h-80"
            >
              <LoadingImage
                src={project?.image ?? ""}
                alt={project?.name ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="space-y-6 text-white"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  PROJECT NAME
                </p>
                <h2 id="case-study-heading" className="mt-2 font-[--font-poppins] text-2xl font-bold text-white md:text-3xl">
                  {project?.name}
                </h2>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  CLIENT
                </p>
                <p className="mt-2 text-white/90">
                  {project?.client}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  SCOPE
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed text-white/90">
                  {project?.scope.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Pagination dots */}
        <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Case study projects">
          {projectsData.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary ${
                i === currentIndex ? "w-8 bg-secondary" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`View ${projectsData[i]?.name}`}
              aria-pressed={i === currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
