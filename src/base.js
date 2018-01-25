import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAeqx00zagwfRaCz07lD3f47XnXN9PhtNA",
    authDomain: "aggiedefenders.firebaseapp.com",
    databaseURL: "https://aggiedefenders.firebaseio.com",
    projectId: "aggiedefenders",
    storageBucket: "aggiedefenders.appspot.com",
    messagingSenderId: "126742858839"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { app, base, facebookProvider }
