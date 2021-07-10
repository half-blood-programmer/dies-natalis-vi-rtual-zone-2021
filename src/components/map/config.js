
      import firebase from 'firebase';

    

        const firebaseApp = firebase.initializeApp({
          apiKey: "AIzaSyByhAuHmVZ7HUFBKBIXnj1NtT0Lepi8w4I",
          authDomain: "dn-vi-2021.firebaseapp.com",
          databaseURL: "https://dn-vi-2021-default-rtdb.firebaseio.com",
          projectId: "dn-vi-2021",
          storageBucket: "dn-vi-2021.appspot.com",
          messagingSenderId: "203502573890",
          appId: "1:203502573890:web:21c8b60d482ebb8f7250db",
          measurementId: "G-NSW1CFTT7J"
        });
        
        const db = firebaseApp.firestore();
        
        export default db ;