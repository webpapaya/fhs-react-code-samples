import React from 'react';
import './App.css';
import {SignUp} from "./SignUp";
import {SignIn} from "./SignIn";
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from "./firebase";
import {SignOut} from "./SignOut";

function App() {
  const [user, loading] = useAuthState(auth)

    const signedIn = Boolean(user)

  return (
    <div className="App">
      <header className="App-header">
        {user?.email}
          {signedIn && <SignOut />}
          {!signedIn && (
              <>
                  <SignUp />
                  <SignIn />
              </>
          )}
      </header>
    </div>
  );
}

export default App;
