// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmbiYwkbUw3iUrYVuHAyh6t3L2darw5jM",
  authDomain: "trocatroca-a1e30.firebaseapp.com",
  databaseURL: "https://trocatroca-a1e30-default-rtdb.firebaseio.com",
  projectId: "trocatroca-a1e30",
  storageBucket: "trocatroca-a1e30.appspot.com",
  messagingSenderId: "162738529644",
  appId: "1:162738529644:web:e893dda6f1002a1adcff49"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);