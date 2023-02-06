const counter = (
  state: number = 0,
  action: { type: 'INCREASE' | 'DECREASE' },
) => {
  if (typeof state === 'undefined') {
    return state;
  }
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
};

/// store
const createStore = (reducer: typeof counter) => {
  let state: number;
  let listeners: (() => void)[] = [];

  const getState = () => {
    return state;
  };
  const dispatch = (action: { type: 'INCREASE' | 'DECREASE' }) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  const subscribe = (listener: () => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };
  return { getState, dispatch, subscribe };
};

export default counter;
