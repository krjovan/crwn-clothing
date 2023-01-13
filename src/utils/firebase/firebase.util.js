import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtHzUyD5gULKe7PVSl6IZ4vMCTi8_YdoM",
    authDomain: "crwn-clothing-db-d5f02.firebaseapp.com",
    projectId: "crwn-clothing-db-d5f02",
    storageBucket: "crwn-clothing-db-d5f02.appspot.com",
    messagingSenderId: "780796013614",
    appId: "1:780796013614:web:9a795a55dc06f7855a83bf"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);
