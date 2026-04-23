"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Instagram, Linkedin, Phone, Mail } from "lucide-react";

const offices = [
  {
    region: "Europe",
    locations: [
      {
        country: "MEP, France",
        address: "81, Rue Jouffroy d'Abbans, Paris 75017",
        phone: "+33 (60) 795 32 10",
        email: "france@maverickenergypartners.net",
      },
    ],
  },
  {
    region: "Africa",
    locations: [
      {
        country: "SEYCHELLES",
        address: "103 Sham Peng Tong Plaza, Victoria, Mahe",
        email: "companysecretary@maverickenergypartners.net",
        isHeadOffice: true,
      },
      {
        country: "MEP, Nigeria",
        address: "44, Lord Lugard Street, Asokoro Abuja",
        phone: "+234 814 278 08 11",
        email: "nigeria@maverickenergypartners.net",
      },
    ],
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

type Office = (typeof offices)[number];

function OfficeCard({ office }: { office: Office }) {
  const [isActive, setIsActive] = useState(false);
  const [visiblePhoneKey, setVisiblePhoneKey] = useState<string | null>(null);
  const [visibleEmailKey, setVisibleEmailKey] = useState<string | null>(null);

  const handleClick = () => {
    setIsActive(!isActive);
    setVisiblePhoneKey(null);
    setVisibleEmailKey(null);
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
            <div className="space-y-5">
              {office.locations.map((location) => {
                const key = `${office.region}-${location.country}`;
                const showPhone = visiblePhoneKey === key;
                const showEmail = visibleEmailKey === key;

                return (
                  <div
                    key={key}
                    className="rounded-lg border border-gray-100 bg-gray-50/60 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-primary">{location.country}</p>
                      {location.isHeadOffice && (
                        <span className="rounded-full bg-secondary/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                          Head Office
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-text">{location.address}</p>

                    {location.phone ? (
                      <div className="mt-5 flex items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setVisiblePhoneKey(showPhone ? null : key);
                          }}
                          className="flex items-center justify-center rounded-full bg-primary/10 p-2 hover:bg-primary hover:text-white"
                        >
                          <Phone size={18} />
                        </button>
                        {showPhone && (
                          <a
                            href={`tel:${location.phone.replace(/\s/g, "")}`}
                            className="text-sm text-text hover:text-secondary"
                          >
                            {location.phone}
                          </a>
                        )}
                      </div>
                    ) : null}

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setVisibleEmailKey(showEmail ? null : key);
                        }}
                        className="flex items-center justify-center rounded-full bg-primary/10 p-2 hover:bg-primary hover:text-white"
                      >
                        <Mail size={18} />
                      </button>
                      {showEmail && (
                        <a
                          href={`mailto:${location.email}`}
                          className="text-sm text-text hover:text-secondary"
                        >
                          {location.email}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
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
