// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3Tb5Ddl1sImD_SQHIQu1Hw196maqwG08",
    authDomain: "fb-spm.firebaseapp.com",
    projectId: "fb-spm",
    storageBucket: "fb-spm.appspot.com",
    messagingSenderId: "583845690214",
    appId: "1:583845690214:web:ea5596cc58ff5dcf3f26a7",
    measurementId: "G-CNXKWC3DK9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 

  export {auth, provider};
  export default db;

 
