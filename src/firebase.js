import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBpD_-YsB23SXsdSK1_Nk9HqqIpaBo9STI",
  authDomain: "facebook-clone-d5a56.firebaseapp.com",
  databaseURL: "https://facebook-clone-d5a56-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-d5a56",
  storageBucket: "facebook-clone-d5a56.appspot.com",
  messagingSenderId: "1051067286759",
  appId: "1:1051067286759:web:12a54d1e72f1eba0248e42",
  measurementId: "G-RXEPXNKZJD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//this is for the sign in for the app
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;