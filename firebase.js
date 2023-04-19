
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDI5JCdv8FmgyM4PstknwX6_9tg-QAYdtE",
  authDomain: "twitter-clone-ee34b.firebaseapp.com",
  projectId: "twitter-clone-ee34b",
  storageBucket: "twitter-clone-ee34b.appspot.com",
  messagingSenderId: "179514260695",
  appId: "1:179514260695:web:2957c35140b04423f40492"
};



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };


