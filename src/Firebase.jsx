// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDM797fj8obvl_fEslRw23BKdQmG8eZ7Is",
  authDomain: "communitymeet-571ff.firebaseapp.com",
  projectId: "communitymeet-571ff",
  storageBucket: "communitymeet-571ff.appspot.com",
  messagingSenderId: "163279614704",
  appId: "1:163279614704:web:430dcad5ac68a942264835",
  measurementId: "G-JYS8C9TFG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default (auth)