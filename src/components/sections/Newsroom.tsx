"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { NewsroomItem } from "@/types/newsroom";

/** Fallback when Firestore is empty or fails. Do not remove. */
const DEFAULT_NEWS: NewsroomItem[] = [
  {
    title: "",
    date: "21st December 2021",
    description:
      "A Cooperation Agreement has been signed in Abuja, Federal Capital Territory, between Maverick Energy Partners and PowerChina International for the development of the 460MW Grand Katsina-Ala hydropower project located in Benue State, Federal Republic of Nigeria.",
    image: "/mep-media/image14.png",
  },
  {
    title: "",
    date: "22nd August 2025",
    description:
      "On 22nd August 2025, Another key milestone was achieved with the issuance of the Full Business Case (FBC) Compliance Certificate to FMWR&S, authorizing the implementation of the project's development concession.",
    image: "/mep-media/image15.png",
  },
  {
    title: "",
    date: "10th December 2025",
    description:
      "The Federal Executive Council (FEC) at its 11th meeting finally approved the Contract for the Development and Concession of the 460MW Katsina-Ala Dam and Hydropower Plant Project in Benue State, in favour of Messrs. Maverick Energy Partners Limited for a Concession period of Thirty-Five (35) years following financial Commitments.",
    image: "/mep-media/image16.jpeg",
  },
  {
    title: "",
    date: "13th February 2026",
    description:
      "The Federal Ministry of Environment (FMEnv) has issued approval for an Environmental Impact Assessment (EIA) Permit to Maverick Energy Partners for the proposed 460 MW Grand Katsina-Ala Hydroelectric Power Plant project on the Katsina-Ala River, located within Ushongo, Katsina-Ala, and Kwande Local Government Areas.",
    image: "/mep-media/image17.png",
    fitImageFull: true,
  },
];

type NewsroomProps = {
  /** From Firestore; when provided and non-empty, overrides default news. */
  news?: NewsroomItem[] | null;
};

function NewsCard({ item }: { item: NewsroomItem }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const fitFull = "fitImageFull" in item && item.fitImageFull;
  const altText = item.title || `News - ${item.date}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:border-secondary/30 hover:shadow-md"
    >
      <div className="flex flex-col md:flex-row">
        <div
          className={
            fitFull
              ? "relative aspect-video w-full shrink-0 overflow-hidden bg-background md:w-80 md:aspect-video md:max-h-52 lg:w-96"
              : "relative h-56 w-full shrink-0 md:h-72 md:w-80 lg:w-96"
          }
        >
          {!imageLoaded && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-[#F4F6F8]"
              aria-hidden
            >
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
          )}
          <Image
            src={item.image}
            alt={altText}
            fill
            className={`${fitFull ? "object-contain" : "object-cover"} ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}
            sizes="(max-width: 768px) 100vw, 384px"
            unoptimized={isRemoteUrl(item.image)}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 md:p-8 min-w-0">
          {item.title ? (
            <h3 className="font-(family-name:--font-poppins) text-lg font-bold text-primary">
              {item.title}
            </h3>
          ) : null}
          <time
            dateTime={item.date.replace(/\s/g, "-")}
            className="block text-sm font-semibold uppercase tracking-wider text-secondary mt-1"
          >
            Date: {item.date}
          </time>
          <p className="mt-3 text-text leading-relaxed wrap-break-words">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function Newsroom({ news }: NewsroomProps) {
  const items = news && news.length > 0 ? news : DEFAULT_NEWS;

  return (
    <section
      id="newsroom"
      className="relative bg-background px-6 py-20 md:py-28"
      aria-labelledby="newsroom-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="newsroom-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-(family-name:--font-poppins) text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl"
        >
          Newsroom
        </motion.h2>
        <div className="mt-14 space-y-6">
          {items.map((item, i) => (
            <NewsCard key={`${item.date}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function isRemoteUrl(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}
