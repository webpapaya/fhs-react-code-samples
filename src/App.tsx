import React from 'react';
import './App.css';
import {create} from "./Store";

const useValue = create(() => ({
  value: 0
}), [
  (state) => console.log('stateChange', state)
]);

const Component1 = () => {
  const [value] = useValue()
  return <div>1: {value.value}</div>
};

const Component2 = () => {
  const [value] = useValue()
  return <div>2: {value.value}</div>
};

const Component3 = () => {
  const [_, setValue] = useValue()
  return (
    <div onClick={() => setValue((value) => ({ value: value.value + 1 }))}>
      Update
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export default App;
