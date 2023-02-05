// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC904AO75sT-fgoF8I50EkcAlQL64gm-xY",
  authDomain: "test-4f9ca.firebaseapp.com",
  projectId: "test-4f9ca",
  storageBucket: "test-4f9ca.appspot.com",
  messagingSenderId: "738135723381",
  appId: "1:738135723381:web:5faf9ea8ea146ba6c9d73c",
  measurementId: "G-6JXN73B0ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);