//@ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware());

//@ts-nocheck
// type
type Todo = {
  id: number;
  text: string;
  complete: boolean;
};
type TodoPayload = {
  id?: number;
  text?: string;
  complete?: boolean;
};
type TodoAction = {
  type: 'ADD_TODO' | 'UPDATE_TODO';
  payload: TodoPayload;
};
type AllState = {
  count?: number;
  todos?: Todo[];
};
type CounterAction = { type: 'INCREASE' | 'DECREASE' };
////// reducer
const counterReducer = (state: number = 0, action: CounterAction | any) => {
  console.log('count counter reducer', state);

  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
};

const todoReducer = (state: Todo | undefined, action: TodoAction | any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.payload.id,
        text: action.payload.text,
        complete: action.payload.complete ? action.payload.complete : false,
      };
    case 'UPDATE_TODO':
      if (state?.id === action.payload.id) {
        return {
          ...state,
          complete: !state?.complete,
        };
      }
      return state;

    default:
      return state;
  }
};
///combine reducer by splitting code into many reducers
const todosReducer = (state: Todo[] = [], action: TodoAction | any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todoReducer(undefined, action)];
    case 'UPDATE_TODO':
      return state.map((t) => todoReducer(t, action));
    default:
      return state;
  }
};
/// our own-combined-reducer
const combinedReducer = (
  state: AllState = {},
  action: CounterAction | TodoAction,
) => {
  console.log('count all reducer', state.count);

  return {
    todos: todosReducer(state.todos, action),
    count: counterReducer(state.count, action),
  };
};
//(state,action)=>{return state}
//////create store
const store = createStore(combinedReducer, composedEnhancer);
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'ADD_TODO', payload: { id: 1, text: 'a' } });
store.dispatch({ type: 'ADD_TODO', payload: { id: 2, text: 'a' } });
//////create store

//////////////////App run
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App
      value={store.getState().count}
      onIncreasement={() => {
        store.dispatch({ type: 'INCREASE' });
      }}
      onDecreasement={() => {
        store.dispatch({ type: 'DECREASE' });
      }}
    />
  </React.StrictMode>,
);
