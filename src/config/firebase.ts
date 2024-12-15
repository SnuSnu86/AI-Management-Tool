import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCWRWM_f1E7xmHw0-GlaXehCW0Kz-Sf08Q",
  authDomain: "ai-management-tool.firebaseapp.com",
  projectId: "ai-management-tool",
  storageBucket: "ai-management-tool.firebasestorage.app",
  messagingSenderId: "757519389812",
  appId: "1:757519389812:web:a99f5b5fac5348a5dead21",
  measurementId: "G-KGZJX0FY5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);