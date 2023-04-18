// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCp9Zhd8NF-4ENF8tOfCcHSyHSn2lgtT4g",
    authDomain: "fhs-2023-04-18.firebaseapp.com",
    databaseURL: "https://fhs-2023-04-18-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fhs-2023-04-18",
    storageBucket: "fhs-2023-04-18.appspot.com",
    messagingSenderId: "651721061801",
    appId: "1:651721061801:web:34a9266f40a232c42440b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)