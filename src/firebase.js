import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config

  const firebaseConfig = {
    apiKey: "AIzaSyAdJE76dGKUoAnbvAiHevmsAmdwuCoz4rs",
    authDomain: "chatdesk-e53bb.firebaseapp.com",
    projectId: "chatdesk-e53bb",
    storageBucket: "chatdesk-e53bb.appspot.com",
    messagingSenderId: "877344459874",
    appId: "1:877344459874:web:7026a693e9ecde2c2a953b",
    measurementId: "G-ZDC7179CZ6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
