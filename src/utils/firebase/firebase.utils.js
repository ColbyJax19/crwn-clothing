import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMyTgJjjdTKplRtx6_TRJKfOjnzHKt-HY',
  authDomain: 'crwn-db-b8c11.firebaseapp.com',
  projectId: 'crwn-db-b8c11',
  storageBucket: 'crwn-db-b8c11.appspot.com',
  messagingSenderId: '979396818028',
  appId: '1:979396818028:web:5566b7f2c6c5470d151449',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

//Open popup for Google login
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//Access database
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  //Declare user data variable
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //If user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  //If user data does NOT exist
  //Create user with data from userAuth in collection

  //Return user data
};
