import { noop } from "utils/noop";

interface Subscriber {
  (): void;
}

interface Reducer<State> {
  (state: State): State;
}

export interface Store<State> {
  subscribe(subscriber: Subscriber): void;
  getState(): State;
  setState(reducer: Reducer<State>): void;
}

export function createStore<State>(initialState: State): Store<State> {
  let subscriber = noop;
  let state = initialState;

  function subscribe(fn: Subscriber) {
    subscriber = fn;
  }

  function getState() {
    return state;
  }

  function setState(reducer: Reducer<State>) {
    state = reducer(state);
    subscriber();
  }

  return {
    subscribe,
    getState,
    setState,
  };
}
