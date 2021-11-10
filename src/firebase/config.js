// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  firebase from 'firebase/compat/app'
import 'firebase/compat/storage';
import 'firebase/compat/firestore'
// import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdTyvaIXe-XWWsAi0_ebAIMPlSATvjEbI",
  authDomain: "fir-tutorial-55a4f.firebaseapp.com",
  projectId: "fir-tutorial-55a4f",
  storageBucket: "fir-tutorial-55a4f.appspot.com",
  messagingSenderId: "59098832642",
  appId: "1:59098832642:web:39e9de4677647a3cd66c1b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {projectStorage,projectFirestore,timestamp};
