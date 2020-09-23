/**
 * Firebase details, you need to add your firebase project details here
 */
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCibpo-xdaqnfTd_LS4Xst0dhTu8AtS4fw",
	authDomain: "hulk-c6f83.firebaseapp.com",
	databaseURL: "https://hulk-c6f83.firebaseio.com",
	projectId: "hulk-c6f83",
	storageBucket: "hulk-c6f83.appspot.com",
	messagingSenderId: "90673078764",
	appId: "1:90673078764:web:8ea39349049ffefc51a0c9",
	measurementId: "G-6LG67VEQF9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const database = firebase.database();

export {
	auth,
	googleAuthProvider,
	githubAuthProvider,
	facebookAuthProvider,
	twitterAuthProvider,
	database
};