import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEgVjlnlDMjBoVGTHfCkywR32KGEC1Meo",
  authDomain: "pc-hardware-store-8f03c.firebaseapp.com",
  projectId: "pc-hardware-store-8f03c",
  storageBucket: "pc-hardware-store-8f03c.firebasestorage.app",
  messagingSenderId: "782734861068",
  appId: "1:782734861068:web:4338effeab6faec269df29"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);