import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAksK415BCPbKaXY-AM4jQB0_wgHRF0i8c",
  authDomain: "fir-course-37ae6.firebaseapp.com",
  projectId: "fir-course-37ae6",
  storageBucket: "fir-course-37ae6.appspot.com",
  messagingSenderId: "139789726532",
  appId: "1:139789726532:web:d88b88a09a9f2f51ed5d11",
  measurementId: "G-70BPH2W44N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);