"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const HERO_IMAGE = "/mep-media/hero.jpg";

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative  h-[45vh] sm:h-[55vh] md:h-[65vh]  w-full overflow-hidden lg:min-h-screen"
      aria-labelledby="about-hero-title"
    >
      {/* Background image - cover, center; dark bg if image missing */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-primary"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="absolute inset-0 bg-linear-to-r from-black/60 to-black/20"
        aria-hidden
      />
      
      <div className="relative z-10 flex h-full flex-col justify-end md:justify-center">
        <div ref={contentRef} className="max-w-6xl mx-auto w-full px-6 pt-28 pb-16 md:py-28 flex flex-col">
          <nav aria-label="Breadcrumb" className="hidden lg:flex lg:mb-100">
            <ol className="flex items-center gap-2 text-sm text-white/80">
              <li>
                <Link href="/" className="text-white hover:text-white focus:outline-none focus:underline font-bold">
                  Homepage
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page">About Us</li>
            </ol>
          </nav>
          <h1
            id="about-hero-title"
            className="font-[--font-poppins] text-3xl font-bold  text-white md:text-4xl lg:text-[7rem]"
          >
            About Us
          </h1>
    <p className="mt-4 text-[24px] font-bold text-white/90 leading-[1.2]">
  Our mission and vision to<br className="block md:hidden" />
  engineering a sustainable hydropower future.
</p>
        </div>
      </div>
    </section>
  );
}
