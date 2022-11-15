import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAejkIkfKqBv6m8Mg_tLBzRd6eaSCoW07E",
  authDomain: "chat-app-5ceb8.firebaseapp.com",
  projectId: "chat-app-5ceb8",
  storageBucket: "chat-app-5ceb8.appspot.com",
  messagingSenderId: "111031024411",
  appId: "1:111031024411:web:dccd0774dd1eb872b271be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
