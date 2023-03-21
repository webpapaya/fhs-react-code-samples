import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const buildUser = (initialName: string) => {
  let name = initialName
  console.log('test')

  return {
   name,
   changeName: (newName: string) => {
     name = newName
   }
  }
}

const user1 = buildUser("Mike1")
user1.changeName("MikeUpdated")

const user2 = buildUser("Mike2")


//
// const myList = {
//   list: [1,2,3,4],
//   nextReference: null
// }
//
// const pushToList = (list, element) => {
//   return {
//     ...list,
//     nextReference: {
//       list: [element],
//       nextReference: null
//     }
//   }
// }
//
// const myObject = Object.freeze({ test: 1, object: { hallo: 1}})
// myObject.object.hallo = 2

type CreateStore = <T>(stateFactory: () => T) => {
  set: (updateFn: (state: T) => T) => unknown
  get: () => T
}


const logDecorator = <A, B, Rtn>(fn: (a: B, b: B) => Rtn) => {
  return (a: B, b: B): Rtn => {
    console.log("params are", a, b)
    const result = fn(a, b)
    console.log("result is", result)
    return result
  };
}
const add = logDecorator((a: number, b: number) => a + b)
const sub = logDecorator((a: number, b: number) => a - b)

add(1, 2)



const createStore: CreateStore = <T,>(stateFactory: () => T) => {
  let value = stateFactory()

  return {
    set: (updateFn: (state: T) => T) => { value = updateFn(value) },
    get: () => value,
  }
}
const myState = createStore(() => 1)
myState.get() // 1
// myState.set(2)
myState.get() // 2



function App() {
  const [value, setValue] = useState(1)

  function handleClick() {
    myState.set((newValue) => newValue + 1)
    myState.set((newValue) => newValue + 1)

    console.log(myState.get())
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
