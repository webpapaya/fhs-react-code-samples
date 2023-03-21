import React, {useDebugValue, useEffect, useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
//
// const c = 3
// const add = (a, b) => a + b + c
//
//
// const myFunction = (isTrue) => {
//   let hallo
//   if (isTrue) {
//     hallo = "is true"
//   } else {
//     hallo = "is False"
//   }
//   return hallo
// }

const fakeApi = (id) => new Promise((resolve) => setTimeout(() => {
  resolve({
    id: id,
    firstname: 'hubert',
    friends: Array.from({ length: 1000 }).map((_, index) => index),
  })
}, 400))

const add = (a) => {
  return (b) => a + b
}

const useHttpValue = (httpUrl) => {
  const [httpResponse, setHttpResponse] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fakeApi(httpUrl)
        .then((httpResponse) => {
          setHttpResponse(httpResponse)
          setLoading(false)
        })

  }, [httpUrl])

  return { httpResponse, loading }
}

function App() {
  const [userId, forceRerender] = useState(Math.random())
  const {httpResponse: user, loading: isUserLoading} = useHttpValue(`http://localhost:3001/user/${userId}`)
  const {httpResponse: moneyTransactions, loading: isMoneyTransactionsLoading} = useHttpValue(`http://localhost:3001/moneyTransactions`)

  useEffect(() => {
    const intervalId = setInterval(() => console.log("interval", userId), 1000)

    return () => clearInterval(intervalId)
  }, [userId])

  console.log(httpResponse)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       <button onClick={() => forceRerender(Math.random())}>update</button>
      </header>
    </div>
  );
}

export default App;
