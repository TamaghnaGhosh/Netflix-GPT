// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-ac9da.firebaseapp.com",
  projectId: "netflixgpt-ac9da",
  storageBucket: "netflixgpt-ac9da.appspot.com",
  messagingSenderId: "380851630813",
  appId: "1:380851630813:web:236b1f5c6dd52e54726134",
  measurementId: "G-RW4903CPZ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
