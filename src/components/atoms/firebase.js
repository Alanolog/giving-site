import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDSAwhNNnJB8mx04z5xw51H7b6ZRPk41Uk",
  authDomain: "giving-site-a593d.firebaseapp.com",
  projectId: "giving-site-a593d",
  storageBucket: "giving-site-a593d.appspot.com",
  messagingSenderId: "491381958578",
  appId: "1:491381958578:web:f5ed964a22eb3dc8f926ab",
  measurementId: "G-D2JBYLQX3D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
