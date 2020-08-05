import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB9-ASXQwjk-MzcvKjrb_6AVInWcVRXDDU",
    authDomain: "tiktokclone-aac28.firebaseapp.com",
    databaseURL: "https://tiktokclone-aac28.firebaseio.com",
    projectId: "tiktokclone-aac28",
    storageBucket: "tiktokclone-aac28.appspot.com",
    messagingSenderId: "539452964380",
    appId: "1:539452964380:web:5fa562ee201a3b485469d9",
    measurementId: "G-XWG673317H"
  };


  const firebaseApp =
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;