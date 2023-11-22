// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3ha-uUX3qYe0ZaV2Hzh5olTjKpUS0vYM",
    authDomain: "gym-project-2dd17.firebaseapp.com",
    projectId: "gym-project-2dd17",
    storageBucket: "gym-project-2dd17.appspot.com",
    messagingSenderId: "978007201939",
    appId: "1:978007201939:web:7660c38f7d248e07565566",
    measurementId: "G-MJ2MCFSGMY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)