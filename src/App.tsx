import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function useCounter() {
  const [count, setCount] = useState(0)
  const increaseCount = () => setCount(count + 1)

  return {count, increaseCount};
}

function App() {
  const counter1 = useCounter();
  const counter2 = useCounter();

  return (
    <div className="App">
      <button onClick={counter1.increaseCount}>{counter1.count}</button>
      <button onClick={counter2.increaseCount}>{counter2.count}</button>
    </div>
  );
}



const Page = () => {
  const [heading, setHeading] = useState('myHeading')
  return (
    <div>
      <h1>{heading}</h1>
      <p onClick={() => setHeading('updated heading')}>some paragraph</p>
    </div>
  )
}


const istZustand = [
  { tagName: 'div', children: [
      { tagName: 'h1', children: [ 'myHeading' ] }  ,
      { tagName: 'p', children: [ 'some paragraph' ] }
  ]}
]

const sollZustand = [
  { tagName: 'div', children: [
      { tagName: 'h1', children: [ 'updated heading' ] }  ,
      { tagName: 'p', children: [ 'some paragraph' ] }
    ]}
]

const SignInForm = () => {
  const [email, setEmail] = useState('')

  return (
    <form>
      <input
        onChange={(evt) => setEmail(evt.target.value.slice(0, 5))}
        type="email"

      />
      {
        email.length === 0 && (
          <div>
            Email can't be blank
          </div>
        )
      }
      <button type="submit">Sign in</button>
    </form>
  )
}

export default SignInForm;