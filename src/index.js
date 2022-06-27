import './sass/main.scss';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4G6oYT3GHGmM1NJQp8KepidoC2N7J58s",
  authDomain: "natours-119f0.firebaseapp.com",
  projectId: "natours-119f0",
  storageBucket: "natours-119f0.appspot.com",
  messagingSenderId: "342483324668",
  appId: "1:342483324668:web:dad697ea08abfd82d79179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);