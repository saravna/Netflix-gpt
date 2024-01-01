// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlA4rSCQLBMB9BElqV7CmnF5_TwouXI6w",
  authDomain: "netflix-gpt-7c8be.firebaseapp.com",
  projectId: "netflix-gpt-7c8be",
  storageBucket: "netflix-gpt-7c8be.appspot.com",
  messagingSenderId: "854334030677",
  appId: "1:854334030677:web:88b2575847dfc9571265dc",
  measurementId: "G-23X2LEKKMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
