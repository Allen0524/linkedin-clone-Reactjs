import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1rzsVtHyJioJVIhQX-Lq9VAT_0rOZ_ks",
    authDomain: "linkedinclone-69d8b.firebaseapp.com",
    projectId: "linkedinclone-69d8b",
    storageBucket: "linkedinclone-69d8b.appspot.com",
    messagingSenderId: "629493630683",
    appId: "1:629493630683:web:499fef49b471ed1ce86efe"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};