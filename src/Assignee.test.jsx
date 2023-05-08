import React, {useState} from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {act} from "react-dom/test-utils";

const MAX_ASSIGNEES = 3;
const Assignee = ({ assignees }) => {
  const [showAll, setShowAll] = useState(false)

  const assigneesToDisplay = showAll
    ? assignees
    : assignees.slice(0, MAX_ASSIGNEES)

  return (
      <>
        <ul>
          { assigneesToDisplay.map((assignee) => (
              <li key={assignee}>{assignee}</li>
          ))}
        </ul>
        { assignees.length > MAX_ASSIGNEES && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              data-testid="show more button"
            >
              show more
            </button>
        )}

        { assignees.length > MAX_ASSIGNEES && showAll && (
            <button
                onClick={() => setShowAll(false)}
                data-testid="show less button"
            >
              show less
            </button>
        )}

      </>
  )
}

it('when assignees are given, renders list of assignees', () => {
  const assignees = [
      'Sepp',
      'Sos',
      'Sehs',
  ]

  render(<Assignee assignees={assignees} />);

  expect(screen.getByText(assignees[0])).not.toBeNull()
  expect(screen.getByText(assignees[1])).not.toBeNull()
  expect(screen.getByText(assignees[2])).not.toBeNull()
});

it('when more than 3 assignees are given, then only 3 assignees are displayed', () => {
  const assignees = [
    'Sepp',
    'Sos',
    'Sehs',
    'Sars'
  ]

  render(<Assignee assignees={assignees} />);

  expect(screen.queryByText(assignees[3])).toBeNull()
})

describe("when more than 3 assignees are given", () => {
  it('then show more button is displayed', () => {
    const assignees = [
      'Sepp',
      'Sos',
      'Sehs',
      'Sars'
    ]

    render(<Assignee assignees={assignees} />);

    expect(screen.getByTestId("show more button")).not.toBeNull()
  })

  it('and show more button is clicked, all assignees are displayed', () => {
    const assignees = [
      'Sepp',
      'Sos',
      'Sehs',
      'Sars'
    ]

    render(<Assignee assignees={assignees} />);

    act(() => screen.getByTestId("show more button").click())

    expect(screen.getByText(assignees[3])).not.toBeNull()
  })

  it('and show more button is clicked, show less button is displayed', () => {
    const assignees = [
      'Sepp',
      'Sos',
      'Sehs',
      'Sars'
    ]

    render(<Assignee assignees={assignees} />);

    act(() => screen.getByTestId("show more button").click())

    expect(screen.getByTestId("show less button")).not.toBeNull()
  })

  it('and show less button is clicked, 4th assignee is not displayed', () => {
    const assignees = [
      'Sepp',
      'Sos',
      'Sehs',
      'Sars'
    ]

    render(<Assignee assignees={assignees} />);

    act(() => screen.getByTestId("show more button").click())
    act(() => screen.getByTestId("show less button").click())

    expect(screen.queryByText(assignees[3])).toBeNull()
  })

})


