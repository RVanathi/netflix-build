import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaBWj_PCl7NlnqJ4Qij5IZ9v5ULh6xcQw",
  authDomain: "vr-netflix-build.firebaseapp.com",
  projectId: "vr-netflix-build",
  storageBucket: "vr-netflix-build.appspot.com",
  messagingSenderId: "895237942836",
  appId: "1:895237942836:web:b264b48fedf8452be26461",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
