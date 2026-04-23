"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { LoadingImage } from "@/components/ui/LoadingImage";
import { motion } from "framer-motion";
import type { NewsroomItem } from "@/types/newsroom";
import { getNewsroomNews } from "@/lib/getNewsroomNews";

/** Fallback when Firestore is empty or fails.  */
const DEFAULT_NEWS: NewsroomItem[] = [
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
  {
    title: "",
    date: "20th November 2023",
    description:
      "Engagements were held with the Federal Ministry of Water Resources and Sanitation (FMWR&S) on the proposed concession of the Grand Katsina-Ala Hydroelectric Power Project (GKHPP). The discussions focused on exploring a Public-Private Partnership (PPP) framework to support the development, operation, and long-term sustainability of the hydropower project",
    image: "/mep-media/image18.png",
  },
  {
    title: "",
    date: "25th September 2024",
    description:
      "A delegation paid a courtesy visit to the Governor of Benue State to brief the state government on the proposed concession of the Grand Katsina-Ala Hydroelectric Power Project (GKHPP) and seek the state's support for the initiative. The meeting provided an opportunity to outline the objectives of the concession, underscore the project's strategic importance, and highlight its potential benefits for Benue State and its surrounding communities.",
    image: "/mep-media/image19.png",
  },
];

type NewsroomProps = {
  /** From Firestore; when empty or null/undefined, fallback to DEFAULT_NEWS. */
  news?: NewsroomItem[] | null;
};

function parseDateForSort(dateStr: string): number {
  if (!dateStr || !dateStr.trim()) return 0;
  const monthMap: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const cleaned = dateStr
    .trim()
    .toLowerCase()
    .replace(/^date:\s*/i, "")
    .replace(/,/g, " ")
    .replace(/\s+/g, " ")
    .replace(/(\d{1,2})(st|nd|rd|th)\b/g, "$1");

  // "25 october 2024"
  const dmy = cleaned.match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/);
  if (dmy) {
    const day = Number(dmy[1]);
    const month = monthMap[dmy[2]];
    const year = Number(dmy[3]);
    if (month != null) return Date.UTC(year, month, day);
  }

  // "october 25 2024"
  const mdy = cleaned.match(/^([a-z]+)\s+(\d{1,2})\s+(\d{4})$/);
  if (mdy) {
    const month = monthMap[mdy[1]];
    const day = Number(mdy[2]);
    const year = Number(mdy[3]);
    if (month != null) return Date.UTC(year, month, day);
  }

  // "25/10/2024" or "25-10-2024"
  const numeric = cleaned.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (numeric) {
    const day = Number(numeric[1]);
    const month = Number(numeric[2]) - 1;
    const year = Number(numeric[3]);
    return Date.UTC(year, month, day);
  }

  const parsed = Date.parse(cleaned);
  return Number.isNaN(parsed) ? 0 : parsed;
}

/** Use Firestore news when non-empty; otherwise use fallback. Sort newest first. */
function mergeAndSortNews(firestoreNews: NewsroomItem[] | null | undefined): NewsroomItem[] {
  const source =
    firestoreNews != null && firestoreNews.length > 0 ? firestoreNews : DEFAULT_NEWS;
  return [...source].sort((a, b) => parseDateForSort(b.date) - parseDateForSort(a.date));
}

function NewsCard({ item }: { item: NewsroomItem }) {
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
          <LoadingImage
            src={item.image}
            alt={altText}
            fill
            className={fitFull ? "object-contain" : "object-cover"}
            sizes="(max-width: 768px) 100vw, 384px"
            unoptimized={isRemoteUrl(item.image)}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 md:p-8 min-w-0">
          {item.title ? (
            <h3 className="font-[--font-poppins] text-lg font-bold text-primary">
              {item.title}
            </h3>
          ) : null}
          <time
            dateTime={item.date.replace(/\s/g, "-")}
            className="block text-sm font-semibold uppercase tracking-wider text-secondary mt-1"
          >
            {item.date ? `Date: ${item.date}` : ""}
          </time>
          <p className="mt-3 text-text leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function isRemoteUrl(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}

export function Newsroom({ news }: NewsroomProps) {
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
  const sortedItems = useMemo(() => mergeAndSortNews(sourceNews), [sourceNews]);
  const featured = sortedItems[0];
  const rest = sortedItems.slice(1);

  const featuredFitImage = featured && "fitImageFull" in featured && featured.fitImageFull;

  return (
    <>
      {/* Hero section: breadcrumb, heading, intro, image, featured news (mobile: image before description) */}
      <section
        className="relative bg-white px-6 pt-16 pb-12 md:pt-20 md:pb-16"
        aria-labelledby="newsroom-heading"
      >
        <div className="mx-auto max-w-6xl">
          <motion.nav
            aria-label="Breadcrumb"
            className="hidden lg:flex lg:pt-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ol className="flex items-center gap-2 text-sm text-[#6B7280]">
              <li>
                <Link href="/" className="hover:text-primary font-semibold text-black focus:outline-none focus:underline">
                  Homepage
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-[#C2C9D6]">Newsroom</li>
            </ol>
          </motion.nav>
          {/* Grid: mobile = heading, intro, IMAGE, featured details. Desktop = (heading+intro, featured) | image */}
          <div className="grid grid-cols-1 gap-8 pt-16  lg:grid-cols-2 lg:pt-16 lg:gap-12 lg:items-start">
            {/* Block A: heading + intro — mobile order 1, lg col 1 row 1 */}
            <motion.div
              className="order-1 lg:row-start-1"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1
                id="newsroom-heading"
                className="font-[--font-poppins] text-[3rem] font-bold text-black md:text-4xl lg:text-[6rem]"
              >
                Newsroom
              </h1>
              <p className="mt-4 text-lg text-text">
                Our latest <span className="text-secondary font-semibold">news</span>.
              </p>
            </motion.div>

            {/* Block B: featured image — mobile order 2, lg col 2 spanning 2 rows */}
            {featured?.image && (
              <motion.div
                className="relative order-2 aspect-video overflow-hidden rounded-xl bg-background lg:order-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:aspect-4/3 lg:min-h-70 lg:mt-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <LoadingImage
                  src={featured.image}
                  alt={featured.title || "Latest news"}
                  fill
                  className={featuredFitImage ? "object-contain" : "object-cover"}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={isRemoteUrl(featured.image)}
                />
              </motion.div>
            )}

            {/* Block C: featured news details — mobile order 3, lg col 1 row 2 */}
            {featured && (
              <motion.div
                className="order-3 mt-6 lg:mt-40 lg:row-start-2 lg:pb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <h2 className="font-[--font-poppins] text-xl font-bold text-primary md:text-2xl leading-tight">
                  {featured.title || "Latest update"}
                </h2>
                {featured.date && (
                  <time
                    dateTime={featured.date.replace(/\s/g, "-")}
                    className="mt-2 block text-sm font-semibold uppercase tracking-wider text-secondary"
                  >
                    {featured.date}
                  </time>
                )}
                <p className="mt-3 text-text leading-relaxed line-clamp-3">
                  {featured.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Additional news list (newest → oldest) */}
      <section
        id="newsroom"
        className="relative bg-background px-6 py-16 md:py-24"
        aria-labelledby="all-news-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="all-news-heading"
            className="font-[--font-poppins] text-2xl font-bold uppercase tracking-wide text-primary md:text-3xl"
          >
            All articles
          </h2>
          {rest.length === 0 ? (
            <p className="mt-6 text-text">No additional articles at this time.</p>
          ) : (
            <div className="mt-10 space-y-6">
              {rest.map((item, i) => (
                <NewsCard key={`${item.date}-${i}-${item.description.slice(0, 30)}`} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
