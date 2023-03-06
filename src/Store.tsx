import {useSyncExternalStore} from "react";

// Memoization
// Functional programming
// Building a simple store in plain JS
// Connect to React
// Introduce Middlewares
// Rehydrate from local storage

const memoize = <Arg, Return>(fn: (arg: Arg) => Return) => {
  let cache: [Arg, Return]
  return (arg: Arg) => {
    const [cacheKey, cacheValue] = cache ?? []
    if (cacheKey === arg) { return cacheValue }
    const value = fn(arg)
    cache = [arg, value]
    return value
  }
}


type Middleware = <T>(state: T) => unknown


export const createStore = <T extends {}>(stateFactory: () => T, middlewares: Middleware[] = []) => {
  let internalState = stateFactory()
  const set = (updateFn: (state: T) => T) => {
    internalState = updateFn(internalState)
    middlewares.forEach((middleware) => middleware(internalState))
  }

  const get = () => internalState

  return {
    set,
    get
  };
};
type Listener = () => void;



export const create = <T extends {}>(stateFactory: () => T, middlewares: Middleware[]) => {
  let listeners: Array<Listener> = []
  const store = createStore(stateFactory, middlewares)
  const emitChanges = () => listeners.forEach((listener) => listener())

  const getSnapshot = memoize((value: T) => [
    value,
    (updateFn: (state: T) => T) => {
      store.set(updateFn)
      emitChanges()
    }
  ] as const)

  const subscribe = (listener: Listener) => {
    listeners = [...listeners, listener]
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return () => useSyncExternalStore(
    subscribe,
    () => getSnapshot(store.get())
  )
}