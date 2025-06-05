import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBqxPO-UPRoXgtNCPcYnKpI_Of4UeUyGAg",
  authDomain: "echo-safe-bbf9e.firebaseapp.com",
  projectId: "echo-safe-bbf9e",
  storageBucket: "echo-safe-bbf9e.appspot.com",
  messagingSenderId: "368915484383",
  appId: "1:368915484383:web:a57e97259eea20930ae36a",
  measurementId: "G-8F7PCCQEQT"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser les services Firebase
const db = getFirestore(app);
getAuth(app);

export { db as d };
