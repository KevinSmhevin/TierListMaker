import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

// const database = firebase.database();
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true })
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const anonymousLogin = new firebase.auth().signInAnonymously();


export { firebase, googleAuthProvider, anonymousLogin, db as default };
