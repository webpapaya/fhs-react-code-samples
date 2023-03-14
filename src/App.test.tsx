import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


const TestComponent = () => {
  return (
    <div>
      hallo
    </div>
  )
}

test('renders learn react link', () => {
  render(<TestComponent />);
  const linkElement = screen.getByText('hallo');
  expect(linkElement).toBeInTheDocument();
});
