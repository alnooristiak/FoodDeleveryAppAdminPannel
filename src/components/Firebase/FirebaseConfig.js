import { initializeApp } from "firebase/app";
import {Firestore, getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB_vHw7UcfWPsHdA52pWO5q2nVZinJwXvo",
  authDomain: "fooddeleveryapp-b7f46.firebaseapp.com",
  projectId: "fooddeleveryapp-b7f46",
  storageBucket: "fooddeleveryapp-b7f46.appspot.com",
  messagingSenderId: "61919609802",
  appId: "1:61919609802:web:aac87125eb357b27c14533"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};
