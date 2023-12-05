import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDcLAXzOclzlPRU00FA4EvzksBimiGpDNc",
  authDomain: "poised-rock-406902.firebaseapp.com",
  databaseURL: "https://poised-rock-406902-default-rtdb.firebaseio.com",
  projectId: "poised-rock-406902",
  storageBucket: "poised-rock-406902.appspot.com",
  messagingSenderId: "277842077984",
  appId: "1:277842077984:web:8a6841f9b0ccac82480f45",
  measurementId: "G-NNHM21EX86",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { firestore, analytics };
