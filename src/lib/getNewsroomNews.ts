import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { getDb } from "./firebase";
import type { NewsroomItem } from "@/types/newsroom";

const COLLECTION = "newsroom";

/**
 * Fetches newsroom entries from Firestore (server-side).
 * Expects field createdAt (timestamp) for ordering; falls back to unordered fetch if needed.
 * Returns empty array on missing config, empty collection, or error → caller uses fallback.
 */
export async function getNewsroomNews(): Promise<NewsroomItem[]> {
  console.log("[getNewsroomNews] start");
  const db = getDb();
  if (!db) {
    console.log("[getNewsroomNews] db is null, returning []");
    return [];
  }
  console.log("[getNewsroomNews] db ok, fetching collection:", COLLECTION);

  try {
    const coll = collection(db, COLLECTION);
    let snapshot;
    try {
      const q = query(coll, orderBy("createdAt", "desc"));
      snapshot = await getDocs(q);
      console.log("[getNewsroomNews] query with orderBy(createdAt) succeeded, snapshot.size:", snapshot.size);
    } catch (orderByErr) {
      console.log("[getNewsroomNews] orderBy failed, falling back to getDocs(coll). Error:", orderByErr);
      snapshot = await getDocs(coll);
      console.log("[getNewsroomNews] fallback getDocs snapshot.size:", snapshot.size);
    }
    if (snapshot.empty) {
      console.log("[getNewsroomNews] snapshot.empty, returning []");
      return [];
    }

    const items: NewsroomItem[] = snapshot.docs.map((doc) => {
      const d = doc.data();
      let image = typeof d.image === "string" ? d.image : "";
      if (image && !image.startsWith("http://") && !image.startsWith("https://")) {
        image = "https://" + image.replace(/^\/+/, "");
      }
      return {
        title: typeof d.title === "string" ? d.title : "",
        description: typeof d.description === "string" ? d.description : "",
        date: typeof d.date === "string" ? d.date : "",
        image,
      };
    });
    console.log("[getNewsroomNews] returning", items.length, "items. First item title:", items[0]?.title);
    return items;
  } catch (err) {
    console.log("[getNewsroomNews] catch error:", err);
    return [];
  }
}
