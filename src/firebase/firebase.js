import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6U_SNC25onkyI4-6tDmiyyflPRqOTFAY",
  authDomain: "safar-tours-and-travels.firebaseapp.com",
  projectId: "safar-tours-and-travels",
  storageBucket: "safar-tours-and-travels.firebasestorage.app",
  messagingSenderId: "910246767288",
  appId: "1:910246767288:web:552c256e7937389621a24d",
  measurementId: "G-BWG3YGT8ER"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;