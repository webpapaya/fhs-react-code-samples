import React from 'react';
import {createStore} from "./Store";


it('stores value', () => {
  const useMyGlobalValue = createStore(() => ({
    value: 0
  }))

  useMyGlobalValue.set((state) => ({ value: state.value + 1 }))
  expect(useMyGlobalValue.get()).toEqual({ value: 1})
})
