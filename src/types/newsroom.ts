/**
 * Display shape for a single newsroom item (used by UI).
 * Matches Firestore: title, description, date, image, createdAt.
 */
export type NewsroomItem = {
  title: string;
  description: string;
  date: string;
  image: string;
  /** From Firestore createdAt; optional for fallback items. */
  createdAt?: { seconds: number; nanoseconds: number };
  /** Optional: use object-contain and fit image fully (e.g. 4th item). */
  fitImageFull?: boolean;
};
