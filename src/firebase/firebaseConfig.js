// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4sX5I8PdfxXu0wScvxvUFGlJVvgM8aHM",
  authDomain: "ifood-ea9bf.firebaseapp.com",
  projectId: "ifood-ea9bf",
  storageBucket: "ifood-ea9bf.appspot.com",
  messagingSenderId: "409902870434",
  appId: "1:409902870434:web:cfdea0f6c54cf300c8ccfb",
  measurementId: "G-XRFWT757GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
