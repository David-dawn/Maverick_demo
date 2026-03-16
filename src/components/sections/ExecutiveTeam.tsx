"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const executives = [
  {
    name: "Engineer Dr. Johnson Bamidele Olorunnisola Adewumi FNSE",
    title: "Executive Chairman and Founder",
    image: "/mep-media/md.jpg",
    bio: [
      "Executive Chairman and Founder of the project development team, is a highly accomplished Chartered Engineer with over 45 years of experience in Civil Engineering, Water Resources, Hydropower, Infrastructure Development, Project Management, Policy Formulation, Research, and Training. He received his academic training from prestigious institutions including Imperial College London and the University of Lagos.",
      "He has played key roles in the planning, design, and execution of major national projects such as the Gurara Multipurpose Dam, 700MW Zungeru Dam, 3,050MW Mambilla Dam, Goronyo Dam, Jibya Dam, Swashi Dam and Irrigation Project, Ilushi Ega Irrigation Project, Kampe Dam and Irrigation Project, and the Lower & Middle Ogun Irrigation Project. He also served as National Project Coordinator for Federal Government River Training Works (1982–1985), Hydrological Rapporteur for WMO–RA1 (1984–1986), and President of the Nigerian Committee on Large Dams (2019–2022).",
      "Internationally, Dr. Adewumi has contributed to technical commissions and advisory bodies including FAO, Lake Chad Basin Commission, Niger Basin Authority, UNESCO–IHP, WMO, and ICOLD. His work contributed to the 1985 Water Sharing Agreement between Nigeria and Niger. A Fellow of the Nigerian Society of Engineers, he is also the Founder of Thomas Adewunmi University, Chancellor of Kwara State University, and Chairman of Bamike Holdings, a diversified conglomerate spanning Engineering, Construction, Agriculture, Medical, and Hospitality sectors.",
    ],
  },
  {
    name: "Jean BINQUET",
    title: "Technical Director",
    image: "/mep-media/Jean BINQUET.jpg",
    bio: [
      "Technical Director is a Chief Engineer with over 35 years of experience in the design and construction supervision of large multipurpose hydropower projects, including concrete gravity and arch dams, RCC dams, and earth and rockfill dams (CFRD). He has worked extensively with private investors, Independent Power Producers (IPPs), government agencies, river basin authorities, and municipalities.",
      "He has served as Lead Design Engineer, Contract Expert, Project Director, and Project Manager on more than 40 major hydropower projects worldwide across Africa, Europe, Asia, and the Americas. His portfolio includes landmark projects such as Gibe III (Ethiopia), Boguchanskaya (Russia), Mazar (Ecuador), Bui (Ghana), Gurara (Nigeria), Birecik (Turkey), Dul Hasti and Tehri Pumped Storage (India), Pubugou (China), and several major developments in Brazil, Argentina, Madagascar, and other countries. He has designed over 25 concrete dams (20–240m high), numerous RCC dams, and more than 25 earth and rockfill dams.",
      "Mr. Binquet also supported the Panama Canal Authority in drafting Design-Build tender documents for the Panama Canal Expansion and new Post-Panamax locks. His services have been delivered to concession authorities, concessionary companies (as Owner's Engineer), and EPC contractor groups.",
      "An accomplished academic contributor, he has authored over 30 scientific papers on dams and hydropower tunnels published in international journals. He is a member of leading professional bodies including ICOLD, ISSMFE, ASCE, and IHA, and has led international knowledge transfer programs for engineers across Africa, Asia, and Latin America.",
    ],
  },
];

export function ExecutiveTeam() {
  return (
    <section
      id="team"
      className="relative bg-white px-6 py-20 md:py-28"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="team-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-(family-name:--font-poppins) text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl"
        >
          Executive Team
        </motion.h2>
        <div className="mt-14 grid gap-16 md:grid-cols-1 lg:gap-20">
          {executives.map((exec, i) => (
            <motion.article
              key={exec.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-[#E5E7EB] bg-background/50 p-6 shadow-sm transition-all duration-300",
                "hover:border-secondary/30 hover:shadow-[0_0_40px_-8px_rgba(17,122,139,0.25)] md:p-8"
              )}
            >
              <div className="flex flex-col gap-8 md:flex-row md:gap-10">
                <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-lg bg-primary/5 md:h-80 md:w-72">
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-(family-name:--font-poppins) text-xl font-bold text-primary md:text-2xl">
                    {exec.name}
                  </h3>
                  <p className="mt-1 text-secondary font-semibold">{exec.title}</p>
                  <div className="mt-6 space-y-4 text-text">
                    {exec.bio.map((para, j) => (
                      <p key={j} className="leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
