import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "mundogaming-99abe.firebaseapp.com",
    projectId: "mundogaming-99abe",
    storageBucket: "mundogaming-99abe.appspot.com",
    messagingSenderId: "565759667801",
    appId: "1:565759667801:web:9d30866acd6a32f1840b48",
    measurementId: "G-5XZKCRNRKR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db