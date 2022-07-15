import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAbIJiEj--Uxz1SVT9tn1I9xeXHWkiCei4",
    authDomain: "projeto-79252.firebaseapp.com",
    databaseURL: "https://projeto-79252.firebaseio.com",
    projectId: "projeto-79252",
    storageBucket: "projeto-79252.appspot.com",
    messagingSenderId: "847409158686",
    appId: "1:847409158686:web:4f87b1254e15ad498c2c0f"
  };

firebase.initializeApp(config);

export default firebase;