import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from "./firebase";

function App() {
  const [signUp] = useCreateUserWithEmailAndPassword(auth)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => signUp("thomas@mayrhofer.at", "test1234!@&")}>
          sign up
        </button>
      </header>
    </div>
  );
}

export default App;
