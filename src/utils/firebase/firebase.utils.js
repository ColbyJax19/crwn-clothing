import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
