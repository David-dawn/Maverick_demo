"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CompanyOverview() {
  return (
    <section
      className="relative bg-white px-6 py-20 md:py-28"
      aria-labelledby="overview-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Company Overview
            </p>
            <h2
              id="overview-heading"
              className="font-[--font-poppins] text-3xl font-bold text-primary md:text-4xl"
            >
              We deliver integrated solutions for sustainable energy and built environment projects.
            </h2>
            <p className="max-w-xl leading-relaxed text-text">
              <strong className="text-primary">MAVERICK Energy Partners (MEP)</strong> is a specialized hydropower project development and consulting firm backed by over 100 years of combined industry experience. Our team delivers end-to-end solutions for government agencies, corporations, and investors worldwide.
            </p>
            <p className="max-w-xl leading-relaxed text-text">
              We combine technical excellence with a strong commitment to sustainability and social responsibility, positioning <strong className="text-primary">MEP</strong> as a trusted partner in shaping the future of sustainable hydropower development.
            </p>
            <Link
              href="/about"
              className="inline-flex rounded-md border-2 border-secondary bg-secondary px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0e6b7a] hover:border-[#0e6b7a] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              About us
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative aspect-4/3 overflow-hidden rounded-xl bg-background"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              <source src="/video/Dam.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
