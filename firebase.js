
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAqBYjIuAyeHp3BarmAV_ej1T8pPMcl7SI",
  authDomain: "react-native-contacts-5bc5b.firebaseapp.com",
  projectId: "react-native-contacts-5bc5b",
  storageBucket: "react-native-contacts-5bc5b.appspot.com",
  messagingSenderId: "618407687920",
  appId: "1:618407687920:web:2869045b92937c552e7435",
  databaseURL: "https://DATABASE_NAME.REGION.firebasedatabase.app",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
/*   measurementId: "G-MEASUREMENT_ID",
 */};

// Initialize Firebase with a default Firebase project
const app = initializeApp(firebaseConfig);
// Initialize Firebase with a second Firebase project
// Use the shorthand notation to access the default project's Firebase services
// const db = getFirestore(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth, db}









