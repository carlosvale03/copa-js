// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6L0ODSbwU3T6qw7LSHOk1yKhmNLcM_FI",
    authDomain: "copa-bola-mucha.firebaseapp.com",
    projectId: "copa-bola-mucha",
    storageBucket: "copa-bola-mucha.appspot.com",
    messagingSenderId: "198476733631",
    appId: "1:198476733631:web:871c7a165e7e7a992e7a0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app