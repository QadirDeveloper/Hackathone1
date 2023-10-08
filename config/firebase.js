// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALiSrKiR2mdXpLfHc8Z_NFGkLWuF3MOkU",
  authDomain: "form-78664.firebaseapp.com",
  projectId: "form-78664",
  storageBucket: "form-78664.appspot.com",
  messagingSenderId: "658678938783",
  appId: "1:658678938783:web:d30aafde0af3168153b6aa",
  measurementId: "G-NY7M18VJ4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);