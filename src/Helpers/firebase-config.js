// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNgPzDtGjAZ8xjthWgQ32Vz8v-nToqiP4",
  authDomain: "firstproject-d2d2b.firebaseapp.com",
  projectId: "firstproject-d2d2b",
  storageBucket: "firstproject-d2d2b.appspot.com",
  messagingSenderId: "720669678251",
  appId: "1:720669678251:web:b17255947415cefe0335ee",
  measurementId: "G-EDJE7MWC30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
