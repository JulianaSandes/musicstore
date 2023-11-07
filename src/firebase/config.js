// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC7hFd4nZ42hrnGh7h8FLV5iPAMJ85synw",
  authDomain: "musicstore-afcbb.firebaseapp.com",
  projectId: "musicstore-afcbb",
  storageBucket: "musicstore-afcbb.appspot.com",
  messagingSenderId: "1073350955223",
  appId: "1:1073350955223:web:465d62d7d54fd1119aa092"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); 

export { db };