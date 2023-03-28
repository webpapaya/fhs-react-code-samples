import React, {useEffect} from 'react';
import './App.css';
import {create} from 'zustand'
import {produce} from 'immer'



const memoize = (fn) => {
    let cacheArgs = null
    let cacheResult = null
    const memoized = (...args) => {
        const newCacheArgs = args.join(',')
        if (cacheArgs === newCacheArgs) {
            return cacheResult
        }
        cacheResult = fn(...args)
        cacheArgs = newCacheArgs
        return cacheResult
    };

    memoized.unmemoized = (...args) => {
        cacheArgs = null
        cacheResult = null
        return memoize(...args)
    }

    return memoized
}

const updateUserName = (users, id, newName) => {
    return produce(users, (draft) => {
        const userToUpdate = draft.find((user) => user.id === id)
        userToUpdate.name = newName
    })
}

const useUsers = create((set) => {
    return {
        users: [],
        fetch: memoize(async () => {
            const response = await fetch("http://localhost:3001/user", {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            set({ users: await response.json()})
        }),
        updateUserName: (users) => {
            set({ users: updateUserName(users, 2, "new name") })
        }
    }
})

const myUsers = [{id: 1, name: "sepp"}, {id: 2, name: "hallo"}]

const changeName = (users, id, newName) => {
    const userToUpdate = users.find((user) => user.id === id)
    const userWithTheOneToUpdate = users.filter((user) => user.id !== id)
    const newUser = { ...userToUpdate, name: newName }
    return [newUser, ...userWithTheOneToUpdate]
}



const Component1 = React.memo(() => {
    const users = useUsers((state) => state.users)
    const fetchUsers = useUsers((state) => state.fetch)
    useEffect(() => { fetchUsers() }, [fetchUsers])
    useEffect(() => { fetchUsers.unmemoized() }, [fetchUsers])
    useEffect(() => { fetchUsers.unmemoized() }, [fetchUsers])
    useEffect(() => { fetchUsers.unmemoized() }, [fetchUsers])


    return (
        <div>
            User 1
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </div>
    )
})

const Component2 = React.memo(() => {
    const users = useUsers((state) => state.users)
    const fetchUsers = useUsers((state) => state.fetch)
    const updateUsername = useUsers((state) => state.updateUserName)
    useEffect(() => { fetchUsers() }, [fetchUsers])

    return (
        <div>
            User 2
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
            <button onClick={() => updateUsername(users)}>update username</button>
        </div>
    )
})

function App() {
    return (
        <>
            <Component1/>
            <Component2/>
        </>
    );
}

export default App;
