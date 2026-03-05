"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const featuredProjects = [
  {
    name: "3050MW Mambilla Hydroelectric Power",
    client: "Federal Ministry of Power",
    scopeLabel: "Final Engineering Design and Construction Supervision of:",
    mw: 3050,
    gwh: 5400,
    scope: [
      "3050MW Hydropower Plant, 5400GWh per annum",
      "330km Transmission Line Network of 330kV between Mambilla and Makurdi",
      "320km Transmission Line Network of 330kV between Mambilla and Jalingo",
    ],
    image: "/mep-media/image5.jpeg",
  },
  {
    name: "700MW Zungeru Hydroelectric Power",
    client: "Federal Ministry of Power",
    scopeLabel: "Project Management and Supervision of",
    mw: 700,
    gwh: 2600,
    scope: [
      "700MW Hydropower Plant, 2600GWh per annum",
      "33km Transmission Line Network of 330kV to connect with Shiroro and Jebba",
      "35km Transmission Line Network of 132kV between Zungeru and Tegina",
      "33/132/330kV Switchyard",
    ],
    images: ["/mep-media/image6.png", "/mep-media/image7.png"],
  },
  {
    name: "30MW Gurara Hydroelectric Power",
    client: "Federal Ministry of Water Resources",
    scopeLabel: "Final Engineering Design and Construction Supervision of:",
    mw: 30,
    gwh: 120,
    scope: [
      "Hydropower plant of 30MW, 120GWh per year",
      "139 km Transmission line of 132KV to Kaduna and 21km Distribution line of 33KV for Cathode protection of 75km conveyance pipeline",
      "330/132/33kV Substation and 2nos 15MVA Power Transformers",
    ],
    image: "/mep-media/image9.png",
  },
];

const otherProjects = [
  { mw: 760, name: "Kainji", image: "/mep-media/image9.png" },
  { mw: 6000, name: "GERDP", image: "/mep-media/image10.png" },
  { mw: 450, name: "Cana Brava HPP", image: "/mep-media/image11.png" },
  { mw: 3050, name: "Mambilla", image: "/mep-media/image5.jpeg" },
  { mw: 40, name: "Kashimbila", image: "/mep-media/image13.png" },
];

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  inView = true,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  inView?: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const end = value;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, duration, inView]);
  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function HydropowerProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-white px-6 py-20 md:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-(family-name:--font-poppins) text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl"
        >
          Hydropower Project Development Experience
        </motion.h2>
        <div className="mt-14 space-y-16">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-background/60"
            >
              {/* First & third: normal landscape (centered, max-width). Second: full-width two images. */}
              {"images" in project && (project.images?.length ?? 0) >= 2 ? (
                <div className="relative h-44 w-full grid grid-cols-2 gap-0 md:h-56 lg:h-64">
                  {(project.images as string[]).map((src, idx) => (
                    <div key={idx} className="relative h-full w-full">
                      <Image
                        src={src}
                        alt={`${project.name} - view ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                "image" in project &&
                project.image && (
                  <div className="relative w-full aspect-video">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 1024px"
                    />
                  </div>
                )
              )}
              <div className="p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  PROJECT NAME
                </p>
                <h3 className="mt-1 font-(family-name:--font-poppins) text-2xl font-bold text-primary md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-3 text-text">
                  <span className="font-semibold uppercase">CLIENT:</span>{" "}
                  {project.client}
                </p>
                <div className="mt-6 border-t border-[#E5E7EB] pt-6">
                  <p className="text-sm font-semibold uppercase text-primary">
                    SCOPE: {project.scopeLabel}
                  </p>
                  <ul className="mt-3 list-inside list-disc space-y-2 text-text">
                    {project.scope.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center gap-6 border-t border-[#E5E7EB] pt-6">
                  <p className="font-(family-name:--font-poppins) text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
                    <AnimatedCounter value={project.mw} inView={isInView} /> MW
                  </p>
                  <p className="text-lg text-secondary">
                    <AnimatedCounter value={project.gwh} inView={isInView} /> GWh
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
        >
          {otherProjects.map((p) => (
            <div
              key={p.name}
              className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-background"
            >
              <div className="relative h-32 w-full">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-(family-name:--font-poppins) text-xl font-bold text-primary md:text-2xl">
                  <AnimatedCounter value={p.mw} inView={isInView} /> MW
                </p>
                <p className="mt-1 text-sm font-semibold text-text">
                  {p.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
