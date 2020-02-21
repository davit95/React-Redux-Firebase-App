import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBfzwiC__JKpdVKDNWeeAZFAQbb7btMcdU",
  authDomain: "marioplan-f1458.firebaseapp.com",
  databaseURL: "https://marioplan-f1458.firebaseio.com",
  projectId: "marioplan-f1458",
  storageBucket: "marioplan-f1458.appspot.com",
  messagingSenderId: "915419530972",
  appId: "1:915419530972:web:c4c9c6a3b592cbda961619",
  measurementId: "G-00K0TFLPYX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase