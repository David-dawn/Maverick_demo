"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HERO_VIDEOS = [
  "/video/Dam.mp4",
  "/video/ethopia.mp4",
  "/video/koysha Dam.mp4",
];

export function VideoHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleVideoEnded = useCallback(() => {
    setActiveIndex((i) => (i + 1) % HERO_VIDEOS.length);
  }, []);

  const currentSrc = HERO_VIDEOS[activeIndex];

  return (
    <section
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-primary"
      aria-label="Hero"
    >
      {/* Full-bleed video layer — no vignette or scaling; original clarity */}
      <div className="absolute inset-0 min-h-full min-w-full">
        <motion.div
          key={activeIndex}
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            src={currentSrc}
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
            onEnded={handleVideoEnded}
          />
        </motion.div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          {/* <Image
            src="/mep-media/maverick_logo.png"
            alt="Maverick Energy Partners"
            width={220}
            height={60}
            className="h-14 w-auto object-contain md:h-16"
          /> */}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 font-[--font-poppins] text-xl font-semibold uppercase tracking-[0.2em] text-white/95 md:text-2xl"
        >
          Sustainable Innovation in Engineering
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/projects" className="inline-flex items-center rounded-md border-2 border-secondary bg-secondary px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0e6b7a] hover:border-[#0e6b7a] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary">
            View Projects
          </Link>
          <Link href="/newsroom#contact" className="inline-flex items-center rounded-md border-2 border-secondary bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
