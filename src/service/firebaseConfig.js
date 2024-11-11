import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDcDkGg8wH4ehYo3da8qUCjupMwftOTpSI",
//   authDomain: "wildlifesurveillance-8ea80.firebaseapp.com",
//   databaseURL: "https://wildlifesurveillance-8ea80-default-rtdb.firebaseio.com",
//   projectId: "wildlifesurveillance-8ea80",
//   storageBucket: "wildlifesurveillance-8ea80.appspot.com",
//   messagingSenderId: "582982353984",
//   appId: "1:582982353984:web:9c59042d7dbb8614f9cba5",
//   measurementId: "G-S29SK2M5XE"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig=VITE_FIREBASE_CONFIG;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);