"use client";

import { motion } from "framer-motion";
import { Youtube, Instagram, Linkedin } from "lucide-react";

const offices = [
  {
    region: "Europe",
    country: "MEP, France",
    address: "81, Rue Jouffroy d'Abbans, Paris 75017",
    phone: "+33 (60) 795 32 10",
    email: "france@maverickenergypartners.net",
  },
  {
    region: "Africa",
    country: "MEP, Nigeria",
    address: "44, Lord Lugard Street, Asokoro Abuja",
    phone: "+234 814 278 08 11",
    email: "nigeria@maverickenergypartners.net",
  },
];

const social = [
  {
    label: "YouTube",
    url: "https://www.youtube.com/@MaverickEnergyPartners",
    icon: Youtube,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/maverickenergy_partners/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/maverick-energy-partners-72a0a73b3/",
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-white px-6 py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">

        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[--font-poppins] text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl"
        >
          Contact Us
        </motion.h2>

        {/* Offices */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {offices.map((office, i) => (
            <motion.div
              key={office.region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                {office.region}
              </h3>

              <p className="mt-2 font-semibold text-primary">
                {office.country}
              </p>

              <p className="mt-2 text-text leading-relaxed">
                {office.address}
              </p>

              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-primary">
                    Phone:
                  </span>{" "}
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="text-text hover:text-secondary"
                  >
                    {office.phone}
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-primary">
                    Email:
                  </span>{" "}
                  <a
                    href={`mailto:${office.email}`}
                    className="text-text hover:text-secondary"
                  >
                    {office.email}
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Social Media
          </h3>

          <ul className="mt-4 flex items-center gap-5">
            {social.map(({ label, url, icon: Icon }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 transition-all duration-300 hover:bg-primary hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-primary group-hover:text-white" />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}