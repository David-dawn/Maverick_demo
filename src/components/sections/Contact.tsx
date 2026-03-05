"use client";

import { motion } from "framer-motion";
import { Youtube, Instagram, Linkedin } from "lucide-react";

const contact = {
  address: "81, Rue Jouffroy d'Abbans, Paris 75017. France",
  phones: ["+33 (60) 795 32 10", "+234 814 278 08 11"],
  emails: [
    "france@maverickenergypartners.net",
    "nigeria@maverickenergypartners.net",
  ],
  social: [
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
  ],
};

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
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Office Address
              </h3>
              <p className="mt-2 text-text leading-relaxed">
                {contact.address}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Phone Number
              </h3>
              <ul className="mt-2 space-y-1">
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-text hover:text-secondary focus:underline"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Email Address
              </h3>
              <ul className="mt-2 space-y-1">
                {contact.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="text-text hover:text-secondary focus:underline"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Social Media
              </h3>
             <ul className="mt-4 flex items-center gap-5">
  {contact.social.map(({ label, url, icon: Icon }) => (
    <li key={label}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 transition-all duration-300 hover:bg-primary hover:scale-110 focus:ring-2 focus:ring-secondary focus:ring-offset-2"
      >
        <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-white" />
      </a>
    </li>
  ))}
</ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-80 overflow-hidden rounded-xl bg-[#E5E7EB] lg:h-96"
          >
            <iframe
              title="Maverick Energy Partners office location - 81 Rue Jouffroy d'Abbans, Paris 75017"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.207849082!2d2.314!3d48.884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f7a2e3b2b2b%3A0x3b2b2b2b2b2b2b2b!2s81+Rue+Jouffroy+d%27Abbans%2C+75017+Paris!5e0!3m2!1sen!2sfr!4v1709123456789"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
