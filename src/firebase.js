import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDWHf78Yn70Cx1vEydW3gmA7l6757EnzVs",
	authDomain: "whatsapp-clone-c080b.firebaseapp.com",
	databaseURL: "https://whatsapp-clone-c080b.firebaseio.com",
	projectId: "whatsapp-clone-c080b",
	storageBucket: "whatsapp-clone-c080b.appspot.com",
	messagingSenderId: "999377998425",
	appId: "1:999377998425:web:3927f2282e1e61997f5748",
	measurementId: "G-WTTF1PYXBS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
