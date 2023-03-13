import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useFormik} from "formik";
import {object, string} from "yup";

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

const formValidations = object({
  email: string()
    .min(2)
    .max(10)
})

const SignInForm = () => {
  const form = useFormik({
    validationSchema: formValidations,
    initialValues: {
      email: ''
    },
    onSubmit: (evt) => console.log(evt)
  })

  return (
    <form onSubmit={form.handleSubmit}>
      <input
        name="email"
        onChange={form.handleChange}
        value={form.values.email}
        type="email"
      />
      { form.errors.email && (
        <span>{form.errors.email}</span>
      )}
      <button type="submit">Sign in</button>
    </form>
  )
}

export default SignInForm;