"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Substation",
    description:
      "Design, planning, and implementation of efficient and environmentally sustainable hydroelectric power projects, Including HV/LV Transmission lines.",
  },
  {
    title: "Dam Engineering",
    description:
      "Development of safe and reliable dams for water supply, flood control, and irrigation purposes.",
  },
  {
    title: "Irrigation Development",
    description:
      "Optimal water resource utilization, improved agricultural productivity, and sustainable farming systems.",
  },
  // {
  //   title: "Maritime Transport Engineering",
  //   description:
  //     "Planning and design of ports, harbors, navigational channels, and coastal protection infrastructure.",
  // },
  {
    title: "Construction Supervision",
    description:
      "Quality control, timely execution, and cost efficiency throughout construction.",
  },
  {
    title: "Operation & Maintenance",
    description:
      "Power station performance optimization, reduced downtime, and asset longevity.",
  },
  {
    title: "Project Management",
    description:
      "Seamless coordination from project initiation through completion.",
  },
];

const icons = [
  "⚡",
  "🏗️",
  "💧",
  // "🚢",
  "📐",
  "🔧",
  "📋",
];

export function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="relative bg-background px-6 py-20 md:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-(family-name:var--font-poppins) text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl"
        >
          Professional Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-4xl text-text leading-relaxed"
        >
          Maverick Energy Partners (MEP) is a reputable engineering firm with over 45 years of extensive professional experience in delivering innovative, sustainable, and comprehensive engineering solutions. The firm operates across key sectors including hydropower engineering, dam engineering, irrigation development, maritime transport infrastructure, construction supervision, operation and maintenance of power stations, and full-scale project management.
        </motion.p>
        <p className="mt-4 max-w-4xl text-text leading-relaxed">
          In hydropower engineering, MEP has demonstrated strong technical capability in the design, planning, and implementation of efficient and environmentally sustainable hydroelectric power projects. The firm has also played significant roles in the development of safe and reliable dams for water supply, flood control, and irrigation purposes. Its irrigation engineering expertise supports optimal water resource utilization, improved agricultural productivity, and sustainable farming systems. Additionally, MEP has contributed to maritime transport engineering through the planning and design of ports, harbors, navigational channels, and coastal protection infrastructure.
        </p>
        <p className="mt-4 max-w-4xl text-text leading-relaxed">
          Beyond design and infrastructure development, MEP is recognized for excellence in construction supervision, ensuring quality control, timely execution, and cost efficiency. The company also provides operation and maintenance services for power stations, focusing on performance optimization, reduced downtime, and asset longevity. Its strong project management framework ensures seamless coordination from project initiation through completion.
        </p>
        <p className="mt-4 max-w-4xl text-text leading-relaxed">
          With a firm commitment to international professional and ethical standards, MEP also prioritizes engineering mentorship and indigenous capacity development, fostering knowledge transfer and strengthening the next generation of engineering professionals. This blend of technical expertise, sustainability focus, and leadership excellence positions Maverick Energy Partners as a trusted and forward-looking partner in the engineering industry.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>{icons[i]}</span>
              <h3 className="mt-3 font-(family-name:var--font-poppins) text-lg font-bold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-text leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
