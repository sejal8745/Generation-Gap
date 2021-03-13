import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBegh8i3EEVmJ8FV1O2leVbMvT1pWqNpkw",
    authDomain: "shehacks-9a721.firebaseapp.com",
    projectId: "shehacks-9a721",
    storageBucket: "shehacks-9a721.appspot.com",
    messagingSenderId: "850533225065",
    appId: "1:850533225065:web:2f785140693ac48c9cc8f8",
    measurementId: "G-Q4PT4P98PV"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
