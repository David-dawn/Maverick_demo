"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Zap, Target, Leaf, Users, Award, Shield } from "lucide-react";

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
      className="relative overflow-hidden bg-[#F4F6F8] px-6 py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      {/* Subtle gradient / divider */}
      <div
        className="absolute right-0 top-0 h-full w-1/3 max-w-md bg-gradient-to-l from-[#0A2E4F]/[0.03] to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <h2
          id="about-heading"
          className="font-[family-name:var(--font-poppins)] text-3xl font-bold uppercase tracking-wide text-[#0A2E4F] md:text-4xl"
        >
          About Us
        </h2>

        {/* Short intro */}
        <div
          ref={introRef}
          className="mt-10 max-w-3xl space-y-5 text-[#333333] leading-relaxed"
        >
          <p className="text-lg leading-[1.7]">
            <strong className="text-[#0A2E4F]">MAVERICK Energy Partners (MEP)</strong> is a specialized hydropower project development and consulting firm backed by over 100 years of combined industry experience. Our team delivers end-to-end solutions—from feasibility and engineering design to construction supervision and operational support—for government agencies, corporations, and investors worldwide.
          </p>
          <p className="leading-[1.7]">
            We combine technical excellence with a strong commitment to sustainability and social responsibility, positioning <strong className="text-[#0A2E4F]">MEP</strong> as a trusted partner in shaping the future of sustainable hydropower development.
          </p>
        </div>

        {/* Mission & Vision */}
        <div
          ref={missionRef}
          className="mt-16 grid gap-10 md:mt-24 md:grid-cols-2 md:gap-12"
        >
          <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#117A8B]/10 text-[#117A8B]">
                <Target className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold uppercase tracking-wide text-[#0A2E4F]">
                Our Mission
              </h3>
            </div>
            <p className="mt-5 leading-[1.75] text-[#333333]">
              To deliver world-class hydropower and dam engineering services that advance clean energy, drive economic growth, and uphold the highest standards of safety, quality, and environmental stewardship for our clients and communities.
            </p>
          </div>
          <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#117A8B]/10 text-[#117A8B]">
                <Zap className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold uppercase tracking-wide text-[#0A2E4F]">
                Our Vision
              </h3>
            </div>
            <p className="mt-5 leading-[1.75] text-[#333333]">
              A world where sustainable hydropower is a cornerstone of reliable, affordable, and clean energy—with Maverick Energy Partners recognized as the partner of choice for complex, high-impact projects.
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <div ref={statsRef} className="mt-16 md:mt-24">
          <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold uppercase tracking-wide text-[#0A2E4F] md:text-3xl">
            Key Statistics
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#117A8B]/20"
              >
                <p className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-[#0A2E4F] md:text-4xl">
                  <span data-stat-value>0</span>
                  {stat.suffix}
                </p>
                <p className="mt-2 text-sm font-medium text-[#117A8B] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div ref={valuesRef} className="mt-16 md:mt-24">
          <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold uppercase tracking-wide text-[#0A2E4F] md:text-3xl">
            Core Values
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                data-value-card
                className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#117A8B]/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0A2E4F]/5 text-[#117A8B]">
                  <v.icon className="h-6 w-6" aria-hidden />
                </div>
                <h4 className="mt-4 font-[family-name:var(--font-poppins)] font-bold text-[#0A2E4F]">
                  {v.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#333333]">
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
          <p className="text-xl font-semibold text-[#0A2E4F] md:text-2xl">
            Ready to partner on your next hydropower project?
          </p>
          <Link
            href="#contact"
            className="mt-6 inline-flex items-center rounded-md border-2 border-[#117A8B] bg-[#117A8B] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0e6b7a] hover:border-[#0e6b7a] focus:outline-none focus:ring-2 focus:ring-[#117A8B] focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
