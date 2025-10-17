// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLBbrZSRouNxmLCBWMH7jN3GFzqqnfpQo",
  authDomain: "fir-figter.firebaseapp.com",
  projectId: "fir-figter",
  storageBucket: "fir-figter.firebasestorage.app",
  messagingSenderId: "180648172327",
  appId: "1:180648172327:web:7223d6eb19a43307cf6702",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
