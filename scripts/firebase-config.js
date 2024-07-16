// scripts/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAK0mP5w6lM2iiKeQ1CB_C5ioAaL_bHYvk",
    authDomain: "auth-6d815.firebaseapp.com",
    projectId: "auth-6d815",
    storageBucket: "auth-6d815.appspot.com",
    messagingSenderId: "518272025027",
    appId: "1:518272025027:web:bade58467c388fe1b43d76",
    measurementId: "G-3WTYL1FCGV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
