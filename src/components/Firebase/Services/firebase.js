// firebase.utils.js
import firebase from 'firebase/app';
import 'firebase/auth';
import { useContext } from 'react';
import {backendAuth} from '../../../api';
import { UserContext } from '../Providers/UserProvider';

const config = {
  apiKey: "AIzaSyAYFhDv2sQ2N4MR7R7cXTIWuufW4Nli0EU",
    authDomain: "acteauto-73416.firebaseapp.com",
    projectId: "acteauto-73416",
    storageBucket: "acteauto-73416.appspot.com",
    messagingSenderId: "732465732932",
    appId: "1:732465732932:web:aa1c3f680b8d6dc6e1cb11"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    
    return true;
  }).catch((error) => {
    return false;
  })
}

export default firebase;