import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCYt0X3J_z2vYaJptUss8xPCldDOWfgspA",
  authDomain: "e-commerc-db.firebaseapp.com",
  databaseURL: "https://e-commerc-db.firebaseio.com",
  projectId: "e-commerc-db",
  storageBucket: "e-commerc-db.appspot.com",
  messagingSenderId: "318596837953",
  appId: "1:318596837953:web:1dda3c71e9a3343b844cc0",
  measurementId: "G-CH1QC88KT4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error wile catching user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
