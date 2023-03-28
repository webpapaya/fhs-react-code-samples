import React, {useMemo} from 'react';
import logo from './logo.svg';
import './App.css';
import {create} from 'zustand'

const useUsers = create((set) => {
    return {
        users: [{id: 1, name: "sepp"}, {id: 2, name: "hallo"}],
        removeAll: () => {
            set({ users: [] })
        }
    }
})

const Component1 = React.memo(() => {
    const users = useUsers((state) => state.users)
    const removeAll = useUsers((state) => state.removeAll)

    return (
        <div>
            User 1
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
            <button onClick={removeAll}> remove all</button>
        </div>

    )
})

const Component2 = React.memo(() => {
    const users = useUsers((state) => state.users)
    return (
        <div>
            User 2
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
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
