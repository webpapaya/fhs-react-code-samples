import React from 'react'
import {useAuthState, useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth, database } from './firebase'
import { ref, push } from 'firebase/database'

export const MoneyTransactionCreate = () => {
    const [user] = useAuthState(auth)
    const moneyTransactionsRef = ref(database, `users/${user?.uid}/transactions`)
    const createMoneyTransaction = () => {
        push(moneyTransactionsRef, {
            debitorId: 1,
            creditorId: 1,
            amount: 1000,
            createdAt: new Date().toISOString()
        })
    }

    return (
        <button onClick={createMoneyTransaction}>
            create transaction
        </button>
    )
}