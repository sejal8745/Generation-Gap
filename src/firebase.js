// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBegh8i3EEVmJ8FV1O2leVbMvT1pWqNpkw",
    authDomain: "shehacks-9a721.firebaseapp.com",
    projectId: "shehacks-9a721",
    storageBucket: "shehacks-9a721.appspot.com",
    messagingSenderId: "850533225065",
    appId: "1:850533225065:web:2f785140693ac48c9cc8f8",
    measurementId: "G-Q4PT4P98PV"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth, provider};