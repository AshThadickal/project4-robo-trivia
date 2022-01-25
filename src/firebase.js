// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy_F7Oa_CborQ6T_Bmcg3VDhEpEAtCjgQ",
  authDomain: "robo-trivia-app.firebaseapp.com",
  projectId: "robo-trivia-app",
  storageBucket: "robo-trivia-app.appspot.com",
  messagingSenderId: "948833770442",
  appId: "1:948833770442:web:093209c94da18f0de7cd33",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;