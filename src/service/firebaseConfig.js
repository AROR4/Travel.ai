import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcDkGg8wH4ehYo3da8qUCjupMwftOTpSI",
  authDomain: "wildlifesurveillance-8ea80.firebaseapp.com",
  databaseURL: "https://wildlifesurveillance-8ea80-default-rtdb.firebaseio.com",
  projectId: "wildlifesurveillance-8ea80",
  storageBucket: "wildlifesurveillance-8ea80.appspot.com",
  messagingSenderId: "582982353984",
  appId: "1:582982353984:web:9c59042d7dbb8614f9cba5",
  measurementId: "G-S29SK2M5XE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);