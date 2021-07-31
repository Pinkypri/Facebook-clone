import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyDHoWwB8rEsfc0-VC5f7a2H0pZh0urHSg0",
    authDomain: "facebook-clone-35547.firebaseapp.com",
    projectId: "facebook-clone-35547",
    storageBucket: "facebook-clone-35547.appspot.com",
    messagingSenderId: "109330018161",
    appId: "1:109330018161:web:1caa6b0dfabea0adc590d0"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp();

  export {db,auth,provider,storage,timestamp};