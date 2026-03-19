"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 100, suffix: "+", label: "Years Combined Experience" },
  { value: 50, suffix: "+", label: "Hydropower Projects Completed" },
  { value: 20, suffix: "+", label: "Countries Served" },
  { value: 2, suffix: "B+", label: "Project Value Managed ($)" },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, inView]);
  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function ExperienceStatistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-background px-6 py-20 md:py-28"
      aria-labelledby="experience-stats-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="experience-stats-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[--font-poppins] text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl"
        >
          Experience Statistics
        </motion.h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="font-[--font-poppins] text-4xl font-bold tabular-nums text-secondary md:text-5xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
