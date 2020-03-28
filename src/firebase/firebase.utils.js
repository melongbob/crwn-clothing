import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDC3s7YsB4hAIoEUHozsZ9vlyHdOl2Fmd0",
    authDomain: "crwn-db-1dbd6.firebaseapp.com",
    databaseURL: "https://crwn-db-1dbd6.firebaseio.com",
    projectId: "crwn-db-1dbd6",
    storageBucket: "crwn-db-1dbd6.appspot.com",
    messagingSenderId: "390303030135",
    appId: "1:390303030135:web:d6473d08c9b35030e75f72",
    measurementId: "G-F6TM8PRC0R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;