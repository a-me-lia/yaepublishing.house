// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCf-xKTh6C7uWJWfkxViEEPZYnl4klxbko',
  authDomain: 'yaepublishinghouse-db0ae.firebaseapp.com',
  projectId: 'yaepublishinghouse-db0ae',
  storageBucket: 'yaepublishinghouse-db0ae.appspot.com',
  messagingSenderId: '879256354065',
  appId: '1:879256354065:web:d28baac4fa437b30ace0b0',
  measurementId: 'G-BCVDCB7B9Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app.name && typeof window !== 'undefined') {
  getAnalytics(app);
}

const db = getFirestore(app);
const auth = getAuth(app);

export { db };
export { auth };