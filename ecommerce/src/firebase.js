import firebase from 'firebase'
require('firebase/firestore')
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZFtLqq2KAIn_iaOYFFqvuILbaoyS4cAE",
    authDomain: "vue-shop-dimas.firebaseapp.com",
    databaseURL: "https://vue-shop-dimas.firebaseio.com",
    projectId: "vue-shop-dimas",
    storageBucket: "",
    messagingSenderId: "690686302007",
    appId: "1:690686302007:web:125c4f466515536a"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  export{fb,db}