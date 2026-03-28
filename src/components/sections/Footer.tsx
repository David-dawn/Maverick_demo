"use client";

import { LoadingImage } from "@/components/ui/LoadingImage";
import Link from "next/link";
import { Youtube, Instagram, Linkedin } from "lucide-react";
import { navLinks } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="bg-primary px-6 py-14 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <LoadingImage
              src="/mep-media/maverick_logo.png"
              alt="Maverick Energy Partners"
              width={200}
              height={56}
              className="h-auto w-50 object-contain"
            />
            <p className="mt-4 max-w-xs text-center text-sm text-white/80 md:text-left">
              Sustainable Innovation in Engineering
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/90 hover:text-white focus:underline focus:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-10 md:flex-row">
          <p className="text-sm text-white/70">
            © {currentYear} Maverick Energy Partners. All rights reserved.
          </p>
      <div className="flex items-center gap-6">
  <a
    href="https://www.youtube.com/@MaverickEnergyPartners"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="group"
  >
    <Youtube className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
  </a>

  <a
    href="https://www.instagram.com/maverickenergy_partners/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="group"
  >
    <Instagram className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
  </a>

  <a
    href="https://www.linkedin.com/in/maverick-energy-partners-72a0a73b3/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="group"
  >
    <Linkedin className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}
