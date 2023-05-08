import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const Button = ({ children, onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
          {children}
        </button>
    )
}

test('renders learn react link', () => {
  const buttonText = "Learn React";
  render(<Button>{buttonText}</Button>);

  const linkElement = screen.getByText(buttonText);
  expect(linkElement).toBeInTheDocument();
});

test('when button is clicked, onClick handler is executed', () => {
  const myMockedFunction = jest.fn()
  render(<Button onClick={myMockedFunction}>Whatever</Button>)
  screen.getByText("Whatever").click()

  expect(myMockedFunction).toHaveBeenCalledTimes(1)
});

test('when button is disabled and clicked, onClick handler is not executed', () => {
  const myMockedFunction = jest.fn()
  render(<Button onClick={myMockedFunction} disabled>Whatever</Button>)
  screen.getByText("Whatever").click()

  expect(myMockedFunction).toHaveBeenCalledTimes(0)
});



test('learn how to use jest.mock()', () => {
  const myMockedFunction = jest.fn()
  myMockedFunction(1, 2)

  expect(myMockedFunction).toHaveBeenCalledWith(1, 2)
});
