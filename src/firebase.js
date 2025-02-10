import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiaa_GmE_2gbrWQ_K6ulSYvIMTWHkMZLE",
  authDomain: "portfolio-c2ad2.firebaseapp.com",
  projectId: "portfolio-c2ad2",
  storageBucket: "portfolio-c2ad2.firebasestorage.app",
  messagingSenderId: "54255840535",
  appId: "1:54255840535:web:7e505c971c8b9213dedb52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };