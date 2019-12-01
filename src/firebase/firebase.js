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

//-- Google Sign In --//
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

//-- Create User Profile --//
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

//-- Add Collection & Documents --//
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocumentRef = collectionRef.doc();
    batch.set(newDocumentRef, obj);
  });

  return await batch.commit();
};

//-- Convert Collections Snapshot --//
export const convertCollectionsSnapshot = collectionsSnapshot => {
  const transformCollection = collectionsSnapshot.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  });

  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
