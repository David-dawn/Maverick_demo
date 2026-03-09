"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { User, Database, Globe, Cpu } from "lucide-react";

const STATS = [
  { value: 100, suffix: "+", label: "Years Combined Experience", icon: User },
  { value: 50, suffix: "+", label: "Hydropower Projects Completed", icon: Database },
  { value: 20, suffix: "+", label: "Countries Served", icon: Globe },
  { value: 2, suffix: "B+", label: "Project Value Managed ($)", icon: Cpu },
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
      className="relative bg-[#F4F6F8] px-6 py-20 md:py-28"
      aria-labelledby="experience-stats-heading"
    >
      <div className="mx-auto max-w-6xl rounded-[40px] bg-white px-10 py-12 shadow-sm md:px-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left column: headline + description */}
          <div>
            <h2
              id="experience-stats-heading"
              className="text-3xl font-bold text-[#1F2937]"
            >
              Let's build something great.
            </h2>
            <p className="mt-4 max-w-[420px] text-gray-500 leading-relaxed">
              Our expertise is backed by decades of combined experience, successful project delivery across hydropower and infrastructure, and a global footprint we're proud to grow with our partners.
            </p>
          </div>

          {/* Right column: 2×2 stats grid with icon + number + label */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="text-4xl font-bold tabular-nums text-[#374151]">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {stat.label}
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
