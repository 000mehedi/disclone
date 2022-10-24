import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBjpzQqwx8W4f3rs12duk0_NzJm1xbpSb8",
  authDomain: "discord-clone-c032b.firebaseapp.com",
  projectId: "discord-clone-c032b",
  storageBucket: "discord-clone-c032b.appspot.com",
  messagingSenderId: "219948908258",
  appId: "1:219948908258:web:bc288745392fd2bffea8bb",
  measurementId: "G-W1CTRBMC0R"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;
 