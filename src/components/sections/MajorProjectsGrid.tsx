"use client";

import { LoadingImage } from "@/components/ui/LoadingImage";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projectsData";

export function MajorProjectsGrid() {
  return (
    <section
      className="relative bg-white px-6 py-20 md:py-28"
      aria-labelledby="major-projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
          Major Hydropower Projects
        </p>
        <motion.h2
          id="major-projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-2 font-[--font-poppins] text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl"
        >
          Projects & Experience
        </motion.h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:border-secondary/20 hover:shadow-md"
            >
              <div className="relative aspect-video w-full">
                <LoadingImage
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  PROJECT NAME
                </p>
                <h3 className="mt-1 font-[--font-poppins] text-lg font-bold text-primary">
                  {project.name}
                </h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-secondary">
                  CLIENT
                </p>
                <p className="mt-1 text-sm leading-relaxed text-text">
                  {project.client}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-secondary">
                  SCOPE
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-text">
                  {project.scope.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
