// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbwXyLc-OVwm7Ay9k_GBYD4mQfcNLIJZ0",
  authDomain: "toy-products-shop.firebaseapp.com",
  projectId: "toy-products-shop",
  storageBucket: "toy-products-shop.firebasestorage.app",
  messagingSenderId: "268761035419",
  appId: "1:268761035419:web:b5885378cbe8a7a2910c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;