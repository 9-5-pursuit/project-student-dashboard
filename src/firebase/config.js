import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0HUR2gLPK7iB1TuD6DRNV0gPqmXNXvLQ",
  authDomain: "student-dashboard-site.firebaseapp.com",
  projectId: "student-dashboard-site",
  storageBucket: "student-dashboard-site.appspot.com",
  messagingSenderId: "184082397188",
  appId: "1:184082397188:web:ea95adcbd384cfe2d89d51",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
