
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBMO-pSy6HKIF3bxIdQBSF3CnCtdDdI42Q",
  authDomain: "coderhouse-ecommerce-9dc6f.firebaseapp.com",
  projectId: "coderhouse-ecommerce-9dc6f",
  storageBucket: "coderhouse-ecommerce-9dc6f.appspot.com",
  messagingSenderId: "184882940252",
  appId: "1:184882940252:web:aace5f787594ba205e9999"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

