import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDPWR6TNlC7kJ08xb4tC4e74Jhk5Ok8GXI",
    authDomain: "fhs-2023-04-17.firebaseapp.com",
    databaseURL: "https://fhs-2023-04-17-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fhs-2023-04-17",
    storageBucket: "fhs-2023-04-17.appspot.com",
    messagingSenderId: "63479148002",
    appId: "1:63479148002:web:f25b1e46e29f18e524ddbb",
    measurementId: "G-JFCL05JG5D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)