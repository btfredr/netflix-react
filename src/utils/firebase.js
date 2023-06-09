import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmp2Zy6pE0vUvqAB2c7Bx3yVXwl_YxNVE",
  authDomain: "netflix-clone-c7b4e.firebaseapp.com",
  projectId: "netflix-clone-c7b4e",
  storageBucket: "netflix-clone-c7b4e.appspot.com",
  messagingSenderId: "1098989822317",
  appId: "1:1098989822317:web:fa4a5263ef6df9839c3a64",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
