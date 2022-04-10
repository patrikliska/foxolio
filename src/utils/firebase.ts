import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBaUBXyCTdYHEwa8YHRyTy3lNo_URAR6Kc',
  authDomain: 'foxolio.firebaseapp.com',
  databaseURL: 'https://foxolio-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'foxolio',
  storageBucket: 'foxolio.appspot.com',
  messagingSenderId: '596670541130',
  appId: '1:596670541130:web:eb9958e675fc761b16a5b3',
  measurementId: 'G-8VJ1QE020Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
