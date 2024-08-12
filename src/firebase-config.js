
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBm4doekL9W3Jr9jpblTacyzBm35aJMC4g",
    authDomain: "nitropay-f1182.firebaseapp.com",
    projectId: "nitropay-f1182",
    storageBucket: "nitropay-f1182.appspot.com",
    messagingSenderId: "549275767693",
    appId: "1:549275767693:web:4b344eb7432c728e8363c4",
    measurementId: "G-ZNW4K9JETN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

const usersCollectionRef = collection(db, "userscoins");

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(profilePic);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    
      window.location.reload();
   
     


    })
    .catch((error) => {
      console.log(error);
    })
}