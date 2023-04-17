import React from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

export const SignIn = () => {
    const [signIn] = useSignInWithEmailAndPassword(auth)

    return (
        <button onClick={() => signIn("thomas2@mayrhofer.at", "test1234!&*")}>
            sign in
        </button>
    )
}