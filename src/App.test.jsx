import React from 'react';
import { render, screen } from '@testing-library/react';


const Button = ({ children, onClick }) => {
  return (
      <button onClick={onClick}>{children}</button>
  )
}


it('when button is rendered, given text is displayed', () => {
  const givenText = "some text";
  render(<Button>{givenText}</Button>);

  const buttonElement = screen.getByText(givenText);
  expect(buttonElement).toBeInTheDocument();
});

it('using jest.fn()', () => {
  const myFunctionSpy = jest.fn()
  myFunctionSpy(1, 2)
  expect(myFunctionSpy).toHaveBeenCalledWith(1, 2)
})


it('when button was clicked, then onClick is called', () => {
  const onClick = jest.fn()
  const text = "irrelevant";
  render(<Button onClick={onClick}>{text}</Button>)

  screen.getByText(text).click()

  expect(onClick).toHaveBeenCalledTimes(1)
})