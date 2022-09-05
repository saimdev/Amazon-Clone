// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHz9Xf_Wa6FxfePlAziuMt0mFzqsNDr30",
    authDomain: "clone-3facd.firebaseapp.com",
    projectId: "clone-3facd",
    storageBucket: "clone-3facd.appspot.com",
    messagingSenderId: "251468427652",
    appId: "1:251468427652:web:7bfa1775648953cee82dd1",
    measurementId: "G-Q9JN8DWC23"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export {db, auth};