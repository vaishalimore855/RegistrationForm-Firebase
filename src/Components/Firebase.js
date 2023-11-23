import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCryA69n_KsX3ty4JdRfSLFs1bexwOhHqg",
    authDomain: "react-assignment-71ca0.firebaseapp.com",
    projectId: "react-assignment-71ca0",
    storageBucket: "react-assignment-71ca0.appspot.com",
    messagingSenderId: "1057244824844",
    appId: "1:1057244824844:web:9bfd9a1c6cec1610f3f529",
    measurementId: "G-2YBMTGR3TG"
  };
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
