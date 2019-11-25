import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const config = {
  apiKey: "AIzaSyBo6BC6AKs2jroibZfutUKKlBRUFoc9YBk",
  authDomain: "clothing-7d9c1.firebaseapp.com",
  databaseURL: "https://clothing-7d9c1.firebaseio.com",
  projectId: "clothing-7d9c1",
  storageBucket: "clothing-7d9c1.appspot.com",
  messagingSenderId: "853354817615",
  appId: "1:853354817615:web:4f8994f92e64138f6a223a",
  measurementId: "G-TVTZ4KGQYS"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
