// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD2YBdjN3PSzIabLaaSIyO8saBX1kVIH4",
  authDomain: "gonna-calendar.firebaseapp.com",
  projectId: "gonna-calendar",
  storageBucket: "gonna-calendar.firebasestorage.app",
  messagingSenderId: "694583284436",
  appId: "1:694583284436:web:9cbc80f86485b815e2e141",
  measurementId: "G-B7X3EG7Q52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
export const provider = new GoogleAuthProvider();
