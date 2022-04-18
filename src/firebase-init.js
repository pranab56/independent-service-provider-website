import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBagY0AmxnVz-HxtVq1qt8A4FoYrrpoyAw",
  authDomain: "wedding-photographer-fef88.firebaseapp.com",
  projectId: "wedding-photographer-fef88",
  storageBucket: "wedding-photographer-fef88.appspot.com",
  messagingSenderId: "321842680984",
  appId: "1:321842680984:web:8c14f1074702db68cd2ced"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 