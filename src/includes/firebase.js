import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARRXLMOPpCMXa_MrAntaznaw71hLoHsnk",
  authDomain: "music-a3ab5.firebaseapp.com",
  projectId: "music-a3ab5",
  storageBucket: "music-a3ab5.appspot.com",
  appId: "1:187086036749:web:01560a09af1be773a0da44",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
