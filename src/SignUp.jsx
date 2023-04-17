import React from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

export const SignUp = () => {
    const [signUp] = useCreateUserWithEmailAndPassword(auth)

    return (
        <button onClick={() => signUp("thomas@mayrhofer.at", "test1234!&*")}>
            sign up
        </button>
    )
}