import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl5pV-44-Ypp-q1UxdQF7UohMNFLbtCbA",
  authDomain: "login-authentication-81a71.firebaseapp.com",
  projectId: "login-authentication-81a71",
  storageBucket: "login-authentication-81a71.firebasestorage.app",
  messagingSenderId: "733797123254",
  appId: "1:733797123254:web:4f393721008a50fd791217",
  measurementId: "G-P0C0SV3EC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);