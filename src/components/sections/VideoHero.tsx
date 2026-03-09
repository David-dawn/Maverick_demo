"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HERO_VIDEO_SRC = "/videos/hero.mp4";
const FALLBACK_VIDEO_SRC = "/video/ethopia.mp4";

export function VideoHero() {
  return (
    <section
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-primary"
      aria-label="Hero"
    >
      {/* Full-bleed cinematic video layer */}
      <div className="absolute inset-0 min-h-full min-w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center scale-105"
          style={{ minHeight: "100%", minWidth: "100%" }}
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
          <source src={FALLBACK_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
      {/* Cinematic overlay: strong gradient + vignette */}
      {/* <div
        className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/80"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-black/75 via-transparent to-black/60"
        aria-hidden
      /> */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_60px_rgba(0,0,0,0.4)]" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/mep-media/maverick_logo.png"
            alt="Maverick Energy Partners"
            width={220}
            height={60}
            className="h-14 w-auto object-contain md:h-16"
          />
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
          <Link href="/projects" className="inline-flex items-center rounded-md border-2 border-[#117A8B] bg-[#117A8B] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0e6b7a] hover:border-[#0e6b7a] focus:outline-none focus:ring-2 focus:ring-[#117A8B] focus:ring-offset-2 focus:ring-offset-[#0A2E4F]">
            View Projects
          </Link>
          <Link href="/newsroom#contact" className="inline-flex items-center rounded-md border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A2E4F]">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
