// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add your own Firebase configuration from your Firebase project settings
const firebaseConfig = {
   apiKey: "AIzaSyDl0JKRYl3srD1s0m7ZSW1DW8JpJ0i2Bvg",
  authDomain: "lost-and-found-webapp.firebaseapp.com",
  projectId: "lost-and-found-webapp",
  storageBucket: "lost-and-found-webapp.firebasestorage.app",
  messagingSenderId: "934509308455",
  appId: "1:934509308455:web:056e3d4cd55dc41679fc02",
  measurementId: "G-HMRV38P2E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
