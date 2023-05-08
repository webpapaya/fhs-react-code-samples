import React, {useState} from 'react';
import { render, screen } from '@testing-library/react';
import {act} from "react-dom/test-utils";


const Assignees = ({ assignees }) => {
  const [showAll, setShowAll] = useState(false)

  const assigneesToDisplay = showAll
    ? assignees
    : assignees.slice(0, 3)

  return (
      <>
        <ul>
          { assigneesToDisplay.map((assignee) => {
            return <li key={assignee}>{assignee}</li>
          })}
        </ul>
        <button
          data-testid="show more button"
          onClick={() => setShowAll(true)}
        >
          show more
        </button>
      </>
  )
}

it('when Assignee is rendered, all assignees are displayed', () => {
  const assignees = [
    'sepp',
    'mike',
    'sus'
  ];

  render(<Assignees assignees={assignees} />)

  expect(screen.getByText(assignees[0])).toBeInTheDocument()
  expect(screen.getByText(assignees[1])).toBeInTheDocument()
  expect(screen.getByText(assignees[2])).toBeInTheDocument()
})

it('when more than 3 assignees given, then only first 3 are displayed', () => {
  const assignees = [
    'sepp',
    'mike',
    'sus',
    'mike2'
  ];

  render(<Assignees assignees={assignees} />)

  expect(screen.queryByText(assignees[3])).not.toBeInTheDocument()
})

it('when show more button is clicked, then all assignees are displayed', () => {
  const assignees = [
    'sepp',
    'mike',
    'sus',
    'mike2'
  ];

  render(<Assignees assignees={assignees} />)

  act(() => screen.getByTestId("show more button").click())

  expect(screen.getByText(assignees[3])).toBeInTheDocument()
})
