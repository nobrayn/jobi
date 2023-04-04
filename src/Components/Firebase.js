// modules
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHrsA2moFGRUC5GN9BARuXJg6tl1Lz-as",
  authDomain: "jobi-3706b.firebaseapp.com",
  projectId: "jobi-3706b",
  storageBucket: "jobi-3706b.appspot.com",
  messagingSenderId: "567325485551",
  appId: "1:567325485551:web:29eed9a9abf374d573ee1a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;