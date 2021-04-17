import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCCDu9DwO_wSqdnkLxz9-3RLyAu6grBJhM",
  authDomain: "travelgallery-d504b.firebaseapp.com",
  projectId: "travelgallery-d504b",
  storageBucket: "travelgallery-d504b.appspot.com",
  messagingSenderId: "911497793140",
  appId: "1:911497793140:web:24b2e3b3e8459781500b21"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };