"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { NewsroomItem } from "@/types/newsroom";

const DEFAULT_NEWS: NewsroomItem[] = [
  { title: "", date: "21st December 2021", description: "A Cooperation Agreement has been signed in Abuja between Maverick Energy Partners and PowerChina International for the development of the 460MW Grand Katsina-Ala hydropower project in Benue State, Nigeria.", image: "/mep-media/image14.png" },
  { title: "", date: "22nd August 2025", description: "Key milestone achieved with the issuance of the Full Business Case (FBC) Compliance Certificate to FMWR&S, authorizing the project development concession.", image: "/mep-media/image15.png" },
  { title: "", date: "10th December 2025", description: "The Federal Executive Council approved the Contract for the Development and Concession of the 460MW Katsina-Ala Dam and Hydropower Plant Project in favour of Maverick Energy Partners Limited.", image: "/mep-media/image16.jpeg" },
];

type LatestNewsPreviewProps = {
  news?: NewsroomItem[] | null;
};

function isRemoteUrl(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}

export function LatestNewsPreview({ news }: LatestNewsPreviewProps) {
  const items = (news && news.length > 0 ? news : DEFAULT_NEWS).slice(0, 3);

  return (
    <section
      className="relative bg-white px-6 py-20 md:py-28"
      aria-labelledby="latest-news-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#117A8B]">
          Latest News
        </p>
        <motion.h2
          id="latest-news-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-2 font-[--font-poppins] text-3xl font-bold uppercase tracking-wide text-[#0A2E4F] md:text-4xl"
        >
          News and updates
        </motion.h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <PreviewCard key={`${item.date}-${i}`} item={item} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/newsroom"
            className="inline-flex rounded-md border-2 border-[#117A8B] bg-[#117A8B] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0e6b7a] hover:border-[#0e6b7a] focus:outline-none focus:ring-2 focus:ring-[#117A8B] focus:ring-offset-2"
          >
            View All News
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function PreviewCard({ item, index }: { item: NewsroomItem; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const altText = item.title || `News - ${item.date}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:border-[#117A8B]/30 hover:shadow-md"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[#F4F6F8]">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#117A8B] border-t-transparent" />
          </div>
        )}
        <Image
          src={item.image}
          alt={altText}
          fill
          className={`object-cover ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={isRemoteUrl(item.image)}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-5">
        {item.title ? (
          <h3 className="font-[--font-poppins] font-bold text-[#0A2E4F] line-clamp-2">
            {item.title}
          </h3>
        ) : null}
        <time dateTime={item.date.replace(/\s/g, "-")} className="mt-1 block text-xs font-semibold uppercase tracking-wider text-[#117A8B]">
          {item.date}
        </time>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#333333]">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}
