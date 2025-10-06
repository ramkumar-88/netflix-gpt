// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYoI9XHa_0WfQHgSFUWLALmy79g1USQqk",
  authDomain: "netflixgpt-be3c2.firebaseapp.com",
  projectId: "netflixgpt-be3c2",
  storageBucket: "netflixgpt-be3c2.firebasestorage.app",
  messagingSenderId: "439890050719",
  appId: "1:439890050719:web:dcaf1468d54125d19d6caa",
  measurementId: "G-QDRZ058QM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();