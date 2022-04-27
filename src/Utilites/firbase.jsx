import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBAJ4e5tEg6tTwdOoQ1yX7WP0CkNK7gBCY",
  authDomain: "cufo-fc91a.firebaseapp.com",
  databaseURL: "https://cufo-fc91a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cufo-fc91a",
  storageBucket: "cufo-fc91a.appspot.com",
  messagingSenderId: "803971455545",
  appId: "1:803971455545:web:af016095f686176b2b8be8",
  measurementId: "G-XBTPD7SG8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCards(db) {
    const cardCol = collection(db, 'Card Details');
    const cardSnapshot = await getDocs(cardCol);
    const cardList = cardSnapshot.docs.map(doc => doc.data());
    return cardList;
  }
 
async function getData(){
    return getCards(db);
}


export default getData;
