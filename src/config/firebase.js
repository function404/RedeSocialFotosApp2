import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7xRNg24zabr0YzrmkkfO2DWrDO3t57go",
  authDomain: "redesocialfotosapp-49174.firebaseapp.com",
  projectId: "redesocialfotosapp-49174",
  storageBucket: "redesocialfotosapp-49174.appspot.com",
  messagingSenderId: "348001145591",
  appId: "1:348001145591:web:075f5e6c640a313adc79f2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, app, auth, storage };
