import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvTB_dkhBgbmxIxjlMBgq7cR2GnIkACAk",
  authDomain: "rizk-f6e3f.firebaseapp.com",
  projectId: "rizk-f6e3f",
  storageBucket: "rizk-f6e3f.appspot.com",
  messagingSenderId: "33854154011",
  appId: "1:33854154011:web:3f87627638fa99e3259fbe",
  measurementId: "G-258SL712EF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, storage };
