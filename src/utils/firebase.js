// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKsg9R_Xd91A-Hr_SbtwV2Rl79bmmSFvU",
  authDomain: "netflixgpt-1a756.firebaseapp.com",
  projectId: "netflixgpt-1a756",
  storageBucket: "netflixgpt-1a756.appspot.com",
  messagingSenderId: "485142808712",
  appId: "1:485142808712:web:c32c62354adf5d067a373d",
  measurementId: "G-L4Y7DGLWL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();