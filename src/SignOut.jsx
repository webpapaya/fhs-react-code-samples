import React from 'react'
import {useSignOut} from 'react-firebase-hooks/auth'
import { auth } from './firebase'

export const SignOut = () => {
    const [signOut] = useSignOut(auth)

    return (
        <button onClick={signOut}>
            sign out
        </button>
    )
}