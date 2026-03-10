"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Instagram, Linkedin, Phone, Mail } from "lucide-react";

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

function OfficeCard({ office }: { office: any }) {
  const [isActive, setIsActive] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setShowPhone(false);
    setShowEmail(false);
  };

  return (
    <motion.div
      layout
      onClick={handleClick}
      className="cursor-pointer rounded-xl border border-gray-200 p-8 shadow-sm transition hover:shadow-md"
    >
      <h3 className="text-lg font-semibold uppercase tracking-wider text-secondary">
        {office.region}
      </h3>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            <p className="font-semibold text-primary">{office.country}</p>
            <p className="mt-2 text-text">{office.address}</p>

            {/* PHONE */}
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPhone(!showPhone);
                }}
                className="flex items-center justify-center rounded-full bg-primary/10 p-2 hover:bg-primary hover:text-white"
              >
                <Phone size={18} />
              </button>
              {showPhone && (
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="text-sm text-text hover:text-secondary"
                >
                  {office.phone}
                </a>
              )}
            </div>

            {/* EMAIL */}
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowEmail(!showEmail);
                }}
                className="flex items-center justify-center rounded-full bg-primary/10 p-2 hover:bg-primary hover:text-white"
              >
                <Mail size={18} />
              </button>
              {showEmail && (
                <a
                  href={`mailto:${office.email}`}
                  className="text-sm text-text hover:text-secondary"
                >
                  {office.email}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[--font-poppins] text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl">
          Contact Us
        </h2>

        {/* LEFT RIGHT LAYOUT */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {offices.map((office) => (
            <OfficeCard key={office.region} office={office} />
          ))}
        </div>

        {/* SOCIAL */}
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