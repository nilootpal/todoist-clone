import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDYHF4Zfw7kf0YDv3op9t0cXz3slf3aBnI",
    authDomain: "todolist-86c6a.firebaseapp.com",
    projectId: "todolist-86c6a",
    storageBucket: "todolist-86c6a.appspot.com",
    messagingSenderId: "780310231857",
    appId: "1:780310231857:web:89e34d229dfacc63f18e10",
    measurementId: "G-49H9ZGWK0P"
});

export { firebaseConfig as firebase };