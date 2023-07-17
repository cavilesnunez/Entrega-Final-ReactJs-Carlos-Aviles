
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider  } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAU-BRPteo9sUoA6Ag2rkcOEnhLz-99dBY",
    authDomain: "rj-43225-70085.firebaseapp.com",
    projectId: "rj-43225-70085",
    storageBucket: "rj-43225-70085.appspot.com",
    messagingSenderId: "640070838446",
    appId: "1:640070838446:web:3faa8f53f87bd00338653f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()