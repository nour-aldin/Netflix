// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const APIKEY = import.meta.env.VITE_FIREBASE_API_KEY
const AUTHDOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
const PROJECTID = import.meta.env.VITE_FIREBASE_PROJECT_ID
const STORAGEBUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
const MESSAGINGSENDERID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
const APPID = import.meta.env.VITE_FIREBASE_APP_ID


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);