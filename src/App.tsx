import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import exp from "constants";

function App() {
  return (
    <div className="App">
      {new Date().toLocaleDateString()}
    </div>
  );
}



const users = [
  {
    id: 1,
    name: 'test1',
    friends: [
      { id: 1, name: 'test1'},
      { id: 2, name: 'test2'}
    ]
  },
  { id: 2, name: 'test2', friends: [] }
]

const FriendsList = () => {
  return (
    <>
      <ul>
        { users.map((user) => (
          <li key={user.id}>
            {user.name} {
            user.friends.map((friend) => <span key={friend.id}>{friend.name}</span>)
          }
          </li>
        ))}
      </ul>
      <Button>Add Friend</Button>
    </>
  )
}


class Button extends React.Component {
  state = { color: 'red' }

  handleClick = () => {
    this.setState({ color: this.state.color === 'blue' ? 'red' : 'blue' })
  }

  set color(color: string) {
    this.setState({ color: color })
  }

  render() {
    return (
      <button
        style={{ background: this.state.color }}
        onClick={() => { this.color = 'green' }}
      >
        test
      </button>
    )
  }
}

function useCounter() {
  const [counter, setCounter] = useState(0)
  const increaseCounter = () => setCounter(counter + 1)

  return {counter, increaseCounter};
}

const CounterButton = () => {
  const counter1 = useCounter();
  const counter2 = useCounter();

  return (
    <>
      <button onClick={counter1.increaseCounter}>{ counter1.counter }</button>
      <button onClick={counter2.increaseCounter}>{ counter2.counter }</button>
      <CounterIncrease onClick={counter1.increaseCounter}/>
      <CounterDisplayComponent counter={counter1.counter}/>
    </>
  )
}

const CounterIncrease = ({ onClick }: { onClick: () => unknown }) => {
  return (
    <button onClick={onClick}>increase</button>
  )
}

const CounterDisplayComponent = ({ counter }: { counter: number }) => {
  return (
    <span>count is: { counter }</span>
  )
}

const Form = () => {
  const [formValue, setFormValue] = useState("initial value")

  return (
    <input
      type="text"
      onChange={(evt) => setFormValue(evt.target.value)}
    />
  )
}

const UseEffectComponent = () => {
  const { counter, increaseCounter } = useCounter()

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('hallo')
    }, 1000)

    return () => { clearInterval(interval) }
  }, [counter])

  return (
    <button onClick={increaseCounter}>{ counter }</button>
  )
}

export default UseEffectComponent
