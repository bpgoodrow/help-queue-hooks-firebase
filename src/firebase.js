import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfjn8R9A1PsOKziO014Sq-iyjKtCyiGdg",
  authDomain: "help-queue-b304a.firebaseapp.com",
  projectId: "help-queue-b304a",
  storageBucket: "help-queue-b304a.appspot.com",
  messagingSenderId: "552181735785",
  appId: "1:552181735785:web:ac3254baf2c66c8843ddf8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };