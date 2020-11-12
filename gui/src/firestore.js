import firebase from 'firebase'
import "firebase/database";

const config = {
   apiKey: "AIzaSyACJGJfDmnA8ugJBwRMZLG3cuIRRUaoTAA",
   authDomain: "soda-machine-gui.firebaseapp.com",
   databaseURL: "https://soda-machine-gui.firebaseio.com",
   projectId: "soda-machine-gui",
   storageBucket: "soda-machine-gui.appspot.com",
   messagingSenderId: "226652364092",
   appId: "1:226652364092:web:5f9c8e6cdcf02e91ae1239"
};

const database = firebase.initializeApp(config);
const db = firebase.database();
export default db;