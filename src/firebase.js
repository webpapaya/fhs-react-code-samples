// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWiV8dp6v2QZooh8WByGlTndlNAeX4dks",
    authDomain: "fhs-2023-04-18-b.firebaseapp.com",
    databaseURL: "https://fhs-2023-04-18-b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fhs-2023-04-18-b",
    storageBucket: "fhs-2023-04-18-b.appspot.com",
    messagingSenderId: "309862764464",
    appId: "1:309862764464:web:9c7441dee4a3cedda45075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)