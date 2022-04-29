import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBAJ4e5tEg6tTwdOoQ1yX7WP0CkNK7gBCY",
    authDomain: "cufo-fc91a.firebaseapp.com",
    databaseURL: "https://cufo-fc91a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cufo-fc91a",
    storageBucket: "cufo-fc91a.appspot.com",
    messagingSenderId: "803971455545",
    appId: "1:803971455545:web:af016095f686176b2b8be8",
    measurementId: "G-XBTPD7SG8Q"
})

var db = firebaseApp.firestore();

export default { db };