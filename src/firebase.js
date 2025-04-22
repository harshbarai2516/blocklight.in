// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRbi57FvbqePXAJ6ejUqdScNRjQZRtS_E",
  authDomain: "blocklight-9401c.firebaseapp.com",
  projectId: "blocklight-9401c",
  storageBucket: "blocklight-9401c.firebasestorage.app",
  messagingSenderId: "467966017402",
  appId: "1:467966017402:web:1d5dcedaac8ddb137e20c3",
  measurementId: "G-ELX2F0T887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);