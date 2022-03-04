import firebase from "firebase";
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBlr2navyHzwxb_HLMKLdEOpwW8PRlGyZ8",
    authDomain: "linkedin-clone-f4d24.firebaseapp.com",
    projectId: "linkedin-clone-f4d24",
    storageBucket: "linkedin-clone-f4d24.appspot.com",
    messagingSenderId: "519022823488",
    appId: "1:519022823488:web:59a2fc4cc5494d76e337a5"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const fetchPosts = async (prop) => {
    const dbFirebase = []
    const response = await db.collection('linkedin-posts').orderBy('timestamp', 'desc').get();
    response.docs.forEach(doc => {
        dbFirebase.push(
            {
                id: doc.ref.id,
                data: doc.data()
            }
        )
    })
    prop(dbFirebase)
}

export { db, app, fetchPosts };