import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyFmutBlnD70fVrxhzeD02JJscs8cfkXc",
  authDomain: "agri-zone-2bf63.firebaseapp.com",
  projectId: "agri-zone-2bf63",
  storageBucket: "agri-zone-2bf63.appspot.com",
  messagingSenderId: "228253394460",
  appId: "1:228253394460:web:1359204ef76cc524cc61d9",
  measurementId: "G-LVC40KLN7L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, storage };
