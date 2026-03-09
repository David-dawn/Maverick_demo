"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projectsData";

const FEATURED_COUNT = 3;

export function FeaturedHydropowerProjects() {
  const featured = projectsData.slice(0, FEATURED_COUNT);

  return (
    <section
      className="relative bg-[#F4F6F8] px-6 py-20 md:py-28"
      aria-labelledby="featured-projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#117A8B]">
          Featured Hydropower Projects
        </p>
        <motion.h2
          id="featured-projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-2 font-[--font-poppins] text-3xl font-bold uppercase tracking-wide text-[#0A2E4F] md:text-4xl"
        >
          Major project highlights
        </motion.h2>
        <div className="mt-14 space-y-16">
          {featured.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm"
            >
              <div className="grid gap-0 lg:grid-cols-5 lg:gap-0">
                <div className="relative aspect-video lg:col-span-2 lg:aspect-auto lg:min-h-[280px]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8 lg:col-span-3">
                  <p className="font-[--font-poppins] text-4xl font-bold tabular-nums text-[#117A8B] md:text-5xl lg:text-6xl">
                    {project.capacity.toLocaleString()} MW
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#117A8B]">
                    PROJECT NAME
                  </p>
                  <h3 className="mt-1 font-[--font-poppins] text-2xl font-bold text-[#0A2E4F] md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#117A8B]">
                    CLIENT
                  </p>
                  <p className="mt-1 text-[#333333]">
                    {project.client}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#117A8B]">
                    SCOPE
                  </p>
                  <ul className="mt-2 list-inside list-disc space-y-1 leading-relaxed text-[#333333]">
                    {project.scope.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex rounded-md border-2 border-[#117A8B] bg-[#117A8B] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0e6b7a] hover:border-[#0e6b7a] focus:outline-none focus:ring-2 focus:ring-[#117A8B] focus:ring-offset-2"
          >
            View all projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
