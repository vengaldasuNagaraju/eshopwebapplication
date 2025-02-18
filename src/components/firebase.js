import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2c9nBwytb6O2bDdbriZhw6IWp2RVB2ig",
  authDomain: "eshop-947fc.firebaseapp.com",
  projectId: "eshop-947fc",
  storageBucket: "eshop-947fc.firebasestorage.app",
  messagingSenderId: "424713655615",
  appId: "1:424713655615:web:70f68b4868c9db061daf8a",
  measurementId: "G-PYTSY28L1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
