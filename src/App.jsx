import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Outlet/>,
        children: [
            {path: '/sign-in', element: <div>SignIn</div>},
            {path: '/sign-out', element: <div>SignOut</div>}
        ]
    }
])

function App() {
    const [userId, setUserId] = useState(Math.random())

    useEffect(() => {
        console.log("setup", userId)
        return () => console.log("teardown", userId)
    }, [userId])

    const handlePost = () => {
        fetch("http://localhost:3001/money-transaction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                creditorId: 1,
                debitorId: 2,
                amount: 10000000000.00,
                paidAt: null
            })
        })
    }


    return (
        <button onClick={handlePost}>
            send money transaction
        </button>
    );
}

export default App;
