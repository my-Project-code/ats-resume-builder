import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCfttCQROxHjhKAGOeVqvSgfXvECkyK2kQ",
  authDomain: "atsresumebuilder-main.firebaseapp.com",
  projectId: "atsresumebuilder-main",
  storageBucket: "atsresumebuilder-main.appspot.com",
  messagingSenderId: "512714928984",
  appId: "1:512714928984:web:8d105083579877b72b6b2d",
  measurementId: "G-ER40S427L4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider
};