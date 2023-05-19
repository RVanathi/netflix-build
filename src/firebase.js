import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//like a key to log into firebase
const firebaseConfig = {
  apiKey: "AIzaSyCaBWj_PCl7NlnqJ4Qij5IZ9v5ULh6xcQw",
  authDomain: "vr-netflix-build.firebaseapp.com",
  projectId: "vr-netflix-build",
  storageBucket: "vr-netflix-build.appspot.com",
  messagingSenderId: "895237942836",
  appId: "1:895237942836:web:b264b48fedf8452be26461",
};
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER,
//   appId: process.env.APP_ID,
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //realtime database
const auth = firebase.auth();

export { auth };
export default db;
