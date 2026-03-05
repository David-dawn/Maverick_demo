import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

function getFirebaseConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
}

/** Call at request time (e.g. in getNewsroomNews) so env vars are available. */
export function getDb(): Firestore | null {
  const config = getFirebaseConfig();
  console.log("[Firebase] getDb called. Has apiKey:", !!config.apiKey, "Has projectId:", !!config.projectId);
  if (!config.apiKey || !config.projectId) {
    console.log("[Firebase] getDb returning null (missing config)");
    return null;
  }
  const existing = getApps();
  const app: FirebaseApp =
    existing.length > 0
      ? (existing[0] as FirebaseApp)
      : initializeApp(config);
  console.log("[Firebase] getDb returning Firestore instance");
  return getFirestore(app);
}
