"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MambillaCaseStudy() {
  return (
    <section
      className="relative bg-[#0A2E4F] px-6 py-20 md:py-28"
      aria-labelledby="mambilla-heading"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/mep-media/image5.jpeg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A2E4F]/85" aria-hidden />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#117A8B]">
          Project Case Study
        </p>
        <motion.h2
          id="mambilla-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-2 font-[--font-poppins] text-3xl font-bold uppercase tracking-wide text-white md:text-4xl"
        >
          Mambilla Hydropower Project
        </motion.h2>
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-auto lg:min-h-[320px]">
            <Image
              src="/mep-media/image5.jpeg"
              alt="Mambilla Hydropower Project"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6 text-white">
            <p className="font-[--font-poppins] text-5xl font-bold tabular-nums text-[#117A8B] md:text-6xl lg:text-7xl">
              3,050 MW
            </p>
            <p className="text-xl font-semibold text-white/90">
              5,400 GWh per annum · Nigeria
            </p>
            <p className="leading-relaxed text-white/90">
              Final Engineering Design and Construction Supervision for the Federal Ministry of Power. Scope includes the 3050MW Hydropower Plant, 330km Transmission Line Network of 330kV between Mambilla and Makurdi, and 320km Transmission Line Network of 330kV between Mambilla and Jalingo.
            </p>
            <p className="leading-relaxed text-white/90">
              Mambilla is one of the largest hydropower projects in Africa, delivering sustainable energy and supporting economic development across the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
