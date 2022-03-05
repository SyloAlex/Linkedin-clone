import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'
import { initializeApp } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlr2navyHzwxb_HLMKLdEOpwW8PRlGyZ8",
    authDomain: "linkedin-clone-f4d24.firebaseapp.com",
    projectId: "linkedin-clone-f4d24",
    storageBucket: "linkedin-clone-f4d24.appspot.com",
    messagingSenderId: "519022823488",
    appId: "1:519022823488:web:59a2fc4cc5494d76e337a5"
};

const app = initializeApp(firebaseConfig);
const db = app.firestore();


export { db, app };