import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7JWdwp5lyVTesSRMFi2J2U_aVYV0Xg5o",
  authDomain: "olxclone-47f0d.firebaseapp.com",
  projectId: "olxclone-47f0d",
  storageBucket: "olxclone-47f0d.appspot.com",
  messagingSenderId: "776013901402",
  appId: "1:776013901402:web:d90f74228e7ab488dbb263",
  measurementId: "G-F2BLS13728"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };
