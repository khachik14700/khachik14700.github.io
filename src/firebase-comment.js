import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiaa_GmE_2gbrWQ_K6ulSYvIMTWHkMZLE",
    authDomain: "portfolio-c2ad2.firebaseapp.com",
    projectId: "portfolio-c2ad2",
    storageBucket: "portfolio-c2ad2.firebasestorage.app",
    messagingSenderId: "54255840535",
    appId: "1:54255840535:web:7e505c971c8b9213dedb52"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };