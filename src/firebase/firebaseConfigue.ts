import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-Lvu5fiwDeYSBkdS7bEXUksPa0ie2XnU",
  authDomain: "sayedali-portfoilio.firebaseapp.com",
  projectId: "sayedali-portfoilio",
  storageBucket: "sayedali-portfoilio.firebasestorage.app",
  messagingSenderId: "910174535595",
  appId: "1:910174535595:web:46311cd5a0c8707e219cee",
  measurementId: "G-QJZB7CLRZ6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
