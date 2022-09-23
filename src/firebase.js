import { dblClick } from "@testing-library/user-event/dist/click";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//i added
import {initializeApp} from 'firebase/app'
import{ getFirestore} from 'firebase/firestore'

// import dp

const firebaseConfig = {
    apiKey: "AIzaSyDU8u3M33INXtuBoXEVcPKTuJ1LN6Gjke0",
    authDomain: "facebook-clone-9795f.firebaseapp.com",
    projectId: "facebook-clone-9795f",
    storageBucket: "facebook-clone-9795f.appspot.com",
    messagingSenderId: "493106332465",
    appId: "1:493106332465:web:9421086e0eeec41d612610",
    measurementId: "G-5Y7TVN6V5H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


// i added
export const app = initializeApp(firebaseConfig)

const db = getFirestore();

export {auth, provider};
export  default db;