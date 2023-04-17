import React from 'react'
import {useAuthState, useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth, database } from './firebase'
import { ref, update } from 'firebase/database'
import {useList, useListVals, useObjectVal} from 'react-firebase-hooks/database'

export const MoneyTransactionList = () => {
    const [user] = useAuthState(auth)
    const moneyTransactionsRef = ref(database, `users/${user?.uid}/transactions`)
    const [transactions] = useObjectVal(moneyTransactionsRef)

    console.log(user.uid)
    const updateMoneyTransaction = (id) => {
        const moneyTransactionRef = ref(database, `users/${user?.uid}/transactions/${id}`)
        update(moneyTransactionRef, {
            createdAt: new Date().toISOString()
        })
    }

    return (
        <ul>
            {Object.entries(transactions ?? {}).map(([key, transaction]) => {
                return (
                    <li
                        key={key}
                        onClick={() => updateMoneyTransaction(key) }
                    >
                        {JSON.stringify(transaction)}
                    </li>
                )
            })}
        </ul>
    )
}
