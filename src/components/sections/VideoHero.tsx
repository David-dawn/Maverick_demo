"use client";

import { useCallback, useEffect, useRef, useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const DESKTOP_HERO_VIDEO = "/video/Dam.mp4";
const MOBILE_HERO_VIDEOS = ["/video/ethopia.mp4", "/video/koysha Dam.mp4"];

export function VideoHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const handleVideoEnded = useCallback(() => {
    setActiveIndex((i) => (i + 1) % MOBILE_HERO_VIDEOS.length);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsDesktop(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isDesktop) return;

    // Keep videos mounted: play only active one, pause/reset others.
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        const playPromise = video.play();
        if (playPromise) {
          playPromise.catch(() => {
            // Ignore autoplay rejection; video stays muted and can start on interaction.
          });
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Preload the next video only (lighter than preloading all clips).
    const nextIndex = (activeIndex + 1) % MOBILE_HERO_VIDEOS.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo) {
      nextVideo.preload = "auto";
      nextVideo.load();
    }
  }, [activeIndex, isDesktop]);

  return (
    <section
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-primary"
      aria-label="Hero"
    >
      {/* Full-bleed video layer with preloaded clips for smoother transitions */}
      <div className="pointer-events-none absolute inset-0 min-h-full min-w-full">
        {isDesktop ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={DESKTOP_HERO_VIDEO}
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />
        ) : (
          MOBILE_HERO_VIDEOS.map((src, index) => (
            <video
              key={src}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              muted
              playsInline
              preload={index === 0 ? "auto" : "metadata"}
              src={src}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== activeIndex}
              onEnded={index === activeIndex ? handleVideoEnded : undefined}
            />
          ))
        )}
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
          {/* <Link href="/projects" className="inline-flex items-center rounded-md border-2 border-secondary bg-secondary px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0e6b7a] hover:border-[#0e6b7a] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary">
            View Projects
          </Link> */}
          <Link href="/newsroom#contact" className="inline-flex items-center rounded-md border-2 border-secondary bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
