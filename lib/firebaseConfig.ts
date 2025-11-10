// lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClsQBTUwR5QBXhIurVjhdp_-3qF2ahnns",
  authDomain: "flavr-f30a8.firebaseapp.com",
  projectId: "flavr-f30a8",
  storageBucket: "flavr-f30a8.firebasestorage.app",
  messagingSenderId: "426982101423",
  appId: "1:426982101423:web:bfcc3c7ed6be1ba6759f5a",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
