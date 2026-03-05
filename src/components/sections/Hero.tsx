"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/mep-media/image1.png')" }}
      aria-label="Hero"
    >
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-primary/80" aria-hidden />

      <Spotlight
        className={cn(
          "left-0 top-0 from-secondary/20 to-transparent",
          "hidden md:block"
        )}
        fill="#117A8B"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[--font-poppins] text-xl font-semibold uppercase tracking-[0.2em] text-white/95 md:text-2xl"
        >
          Sustainable Innovation in Engineering
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <Link
            href="#projects"
            className="inline-flex items-center rounded-md border-2 border-secondary bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
          >
            Explore Our Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
