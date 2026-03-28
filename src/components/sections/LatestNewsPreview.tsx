"use client";

import { useEffect, useState } from "react";
import { LoadingImage } from "@/components/ui/LoadingImage";
import Link from "next/link";
import { motion } from "framer-motion";
import type { NewsroomItem } from "@/types/newsroom";
import { getNewsroomNews } from "@/lib/getNewsroomNews";

const DEFAULT_NEWS: NewsroomItem[] = [
   {
    title: "",
    date: "",
    description: "A delegation paid a courtesy visit to the Governor of Benue State to brief the state government on the proposed concession of the Grand Katsina-Ala Hydroelectric Power Project (GKHPP) and seek the state’s support for the initiative. The meeting provided an opportunity to outline the objectives of the concession, underscore the project’s strategic importance, and highlight its potential benefits for Benue State and its surrounding communities.",
    image: "/mep-media/image19.png",
  },
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
  const [liveNews, setLiveNews] = useState<NewsroomItem[] | null>(news ?? null);

  useEffect(() => {
    let mounted = true;

    if (news && news.length > 0) return;

    getNewsroomNews()
      .then((items) => {
        if (!mounted) return;
        if (items.length > 0) setLiveNews(items);
      })
      .catch(() => {
        // Keep fallback content when request fails.
      });

    return () => {
      mounted = false;
    };
  }, [news]);

  const sourceNews = liveNews && liveNews.length > 0 ? liveNews : news;
  const items = (sourceNews && sourceNews.length > 0 ? sourceNews : DEFAULT_NEWS).slice(0, 3);

  return (
    <section
      className="relative bg-white px-6 py-20 md:py-28"
      aria-labelledby="latest-news-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
          Latest News
        </p>
        <motion.h2
          id="latest-news-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-2 font-[--font-poppins] text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl"
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
            className="inline-flex rounded-md border-2 border-secondary bg-secondary px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0e6b7a] hover:border-[#0e6b7a] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            View All News
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function PreviewCard({ item, index }: { item: NewsroomItem; index: number }) {
  const altText = item.title || `News - ${item.date}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:border-secondary/30 hover:shadow-md"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-background">
        <LoadingImage
          src={item.image}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={isRemoteUrl(item.image)}
        />
      </div>
      <div className="p-5">
        {item.title ? (
          <h3 className="font-[--font-poppins] font-bold text-primary line-clamp-2">
            {item.title}
          </h3>
        ) : null}
        <time dateTime={item.date.replace(/\s/g, "-")} className="mt-1 block text-xs font-semibold uppercase tracking-wider text-secondary">
          {item.date}
        </time>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}
