// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvTRDvcIiZW3ovS-rdEOlw3T9cSpGXy5U",
    authDomain: "avengers-636d5.firebaseapp.com",
    projectId: "avengers-636d5",
    storageBucket: "avengers-636d5.firebasestorage.app",
    messagingSenderId: "456398581432",
    appId: "1:456398581432:web:f49b26f306f1754592ce4d",
    measurementId: "G-WZNDR03WYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

