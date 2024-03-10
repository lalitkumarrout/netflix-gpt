// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_OCgEc1t-x7fOhScfZydzbCH5qxXdvx8",
  authDomain: "netflix-gpt-8f83d.firebaseapp.com",
  projectId: "netflix-gpt-8f83d",
  storageBucket: "netflix-gpt-8f83d.appspot.com",
  messagingSenderId: "136693586750",
  appId: "1:136693586750:web:e289d5c20698a4b2272a6f",
  measurementId: "G-J1X76VJHM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();