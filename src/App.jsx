import React from 'react';
import './App.css';
import { useCreateUserWithEmailAndPassword, useAuthState} from 'react-firebase-hooks/auth'
import {auth} from "./firebase";

function App() {
  const [signUp, loading, error] = useCreateUserWithEmailAndPassword(auth)
  const [user] = useAuthState(auth)

  console.log(loading, error)
  return (
    <div className="App">
      <button onClick={() => signUp("thomas@mayrhofer.at", "test123!&dse12")
          .then((x) => console.log(x))
          .catch((x) => console.log(x))}>
        Sign up
      </button>
    </div>
  );
}

export default App;
