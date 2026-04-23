"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LoadingImage } from "@/components/ui/LoadingImage";
import {  Leaf, Users, Award, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 100, suffix: "+", label: "Years Combined Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Countries Served" },
  { value: 2, suffix: "B+", label: "Project Value Managed ($)" },
];



const VALUES = [
  {
    icon: Award,
    title: "Technical Excellence",
    description: "World-class engineering and advisory delivered on every project.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "Trust and ethical practice at the core of our engagements.",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Clean energy and environmental stewardship in every solution.",
  },
  {
    icon: Users,
    title: "Client-Centered Approach",
    description: "Your goals and timelines drive our strategy and execution.",
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        missionRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      const statNumbers = statsRef.current?.querySelectorAll("[data-stat-value]");
      if (statNumbers?.length) {
        statNumbers.forEach((el, i) => {
          const end = STATS[i]?.value ?? 0;
          gsap.fromTo(
            el,
            { textContent: 0 },
            {
              textContent: end,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      const valueCards = valuesRef.current?.querySelectorAll("[data-value-card]");
      if (valueCards?.length) {
        gsap.fromTo(
          valueCards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-background px-6 py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      {/* Subtle gradient / divider */}
      <div
        className="absolute right-0 top-0 h-full w-1/3 max-w-md bg-linear-to-l from-primary/5 to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Two-column intro: large statement left, paragraphs right */}
        <div
          ref={introRef}
          className="grid gap-10 md:grid-cols-2 md:gap-12 md:items-start lg:gap-16"
        >
          {/* Left: large headline with mixed colors */}
          <h2
            id="about-heading"
            className="font-[--font-poppins] text-2xl font-bold leading-tight text-[#6B7280] md:text-3xl lg:text-4xl xl:text-[2.75rem] xl:leading-[1.2]"
          >
            Maverick Energy Partners is more than ever{" "}
            <span className="text-secondary">your engineering partner</span> for realising{" "}
            <span className="text-secondary">sustainable</span>,{" "}
            <span className="text-secondary">competitive</span> and{" "}
            <span className="text-secondary">reliable projects</span> — wherever they are.
          </h2>

          {/* Right: approved about copy */}
          <div className="space-y-6 text-text leading-relaxed">
            <p className="text-base md:text-lg leading-[1.7]">
              Maverick Energy Partners (MEP) is a specialized hydropower and renewable energy development and advisory firm, supported by a team with decades of combined industry experience. The firm brings together seasoned professionals with deep expertise across technical engineering, project finance, and strategic infrastructure development.
            </p>
            <p className="text-base md:text-lg leading-[1.7]">
              MEP delivers end-to-end, integrated solutions across the entire project lifecycle—from early-stage feasibility studies, hydrological and resource assessments, and project planning to detailed engineering design, construction supervision, financial structuring, and long-term operational support. The firm is widely recognized for its ability to execute complex energy infrastructure projects efficiently, with a strong emphasis on value engineering for cost optimization, risk management, and timely delivery.
            </p>
            <p className="text-base md:text-lg leading-[1.7]">
              Serving a diverse portfolio of clients—including government institutions, multinational corporations, development finance institutions (DFIs), and private investors—MEP has built a strong reputation for technical excellence, reliability, and consistent performance. Its approach is grounded in international best practices and aligned with lender requirements, ensuring that projects are both bankable and sustainable.
            </p>
            <p className="text-base md:text-lg leading-[1.7]">
              At the core of MEP’s operations is a firm commitment to environmental stewardship, social responsibility, and sustainable development. ESG principles are embedded across all project phases, ensuring alignment with global clean energy targets and delivering meaningful long-term value to host communities.
            </p>
            <p className="text-base md:text-lg leading-[1.7]">
              Through a collaborative delivery model, deep sector expertise, and a forward-looking strategy, MEP continues to position itself as a trusted partner in delivering scalable, resilient, and sustainable energy solutions globally.
            </p>
          </div>
        </div>

        {/* Mission & Vision - asymmetric layout with heading, accent lines, and image cards */}
        <div
          ref={missionRef}
          className="mt-16 md:mt-24"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-14 lg:items-start">
            {/* Top left: large heading + accent lines */}
            <div className="space-y-4">
              <h3 className="font-[--font-poppins] text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-[2.5rem]">
                Our Mission
                <br />
                & Vision
              </h3>
              <div className="flex flex-col gap-1">
                <span className="h-1 w-24 rounded-full bg-secondary" aria-hidden />
                <span className="h-0.5 w-20 rounded-full bg-secondary/60" aria-hidden />
              </div>
            </div>

            {/* Top right: Mission card - light gray bg, circular image left of text */}
            <div className="relative flex flex-col sm:flex-row items-start gap-6 rounded-2xl bg-[#F5F5F5] p-6 md:p-8 overflow-hidden">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-md sm:h-40 sm:w-40">
                <LoadingImage
                  src="/mep-media/zungeru.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-[--font-poppins] text-xl font-bold text-primary">
                  Mission
                </h4>
                <p className="mt-3 text-text leading-relaxed">
                  To deliver end-to-end, integrated hydropower and renewable energy solutions across the full project lifecycle, combining technical engineering, project finance, and strategic infrastructure expertise with a strong emphasis on value engineering, risk management, and timely delivery.
                </p>
              </div>
            </div>

            {/* Bottom left: Vision card - light gray bg, circular image right of text */}
            <div className="relative flex flex-col sm:flex-row-reverse items-start gap-6 rounded-2xl bg-[#F5F5F5] p-6 md:p-8 overflow-hidden lg:col-start-1">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-md sm:h-40 sm:w-40">
                <LoadingImage
                  src="/mep-media/vision.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-[--font-poppins] text-xl font-bold text-primary">
                  Vision
                </h4>
                <p className="mt-3 text-text leading-relaxed">
                  To be the trusted global partner for scalable, resilient, and sustainable energy infrastructure, recognized for technical excellence, reliability, ESG leadership, and long-term value creation for clients and host communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics - full-width dark section, two columns, gradient stat cards */}
        <div
          ref={statsRef}
          className="relative left-1/2 -ml-[50vw] w-screen mt-16 md:mt-24 px-6 py-16 md:py-24 bg-primary overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-secondary/20 pointer-events-none" aria-hidden />
          <div className="relative mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left column: heading, description, CTAs */}
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Track record
              </p>
              <h3
                id="key-statistics-heading"
                className="font-[--font-poppins] text-3xl font-bold text-white md:text-4xl"
              >
                Key Statistics
              </h3>
              <p className="max-w-lg text-white/90 leading-relaxed">
                Our expertise is backed by decades of combined experience, successful project delivery, and a global footprint across hydropower and infrastructure markets.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <Link
                  href="/projects"
                  className="inline-flex rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0e6b7a] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
                >
                  View Projects
                </Link> */}
                <Link
                  href="/newsroom#contact"
                  className="inline-flex rounded-lg border-2 border-secondary bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right column: 2x2 grid of stat cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6" aria-labelledby="key-statistics-heading">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl p-8 text-center transition-all duration-300 hover:scale-[1.03] flex flex-col justify-center min-h-35 sm:min-h-40 bg-linear-to-br from-cyan-400/90 to-emerald-400/90 odd:from-cyan-400/85 odd:to-teal-400/90 even:from-emerald-400/85 even:to-cyan-500/90"
                >
                  <p className="font-[--font-poppins] text-4xl font-bold tabular-nums text-primary sm:text-5xl">
                    <span data-stat-value>0</span>
                    {stat.suffix}
                  </p>
                  <p className="mt-2 text-sm font-medium text-primary/80 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div ref={valuesRef} className="mt-16 md:mt-24">
          <h3 className="font-(family-name:--font-poppins) text-2xl font-bold uppercase tracking-wide text-primary md:text-3xl">
            Core Values
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                data-value-card
                className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-secondary/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-secondary">
                  <v.icon className="h-6 w-6" aria-hidden />
                </div>
                <h4 className="mt-4 font-(family-name:--font-poppins) font-bold text-primary">
                  {v.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-text">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
           
        {/* CTA */}
        <div
          ref={ctaRef}
          className="mt-20 rounded-xl border border-[#E5E7EB] bg-white px-8 py-12 text-center shadow-sm md:mt-28 md:px-12 md:py-14"
        >
          <p className="text-xl font-semibold text-primary md:text-2xl">
            Ready to partner on your next hydropower project?
          </p>
          <Link
            href="/newsroom#contact"
            className="mt-6 inline-flex items-center rounded-md border-2 border-secondary bg-secondary px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0e6b7a] hover:border-[#0e6b7a] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
