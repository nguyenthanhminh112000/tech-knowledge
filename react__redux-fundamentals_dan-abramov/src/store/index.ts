//@ts-nocheck

import { createStore } from 'redux';
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
const combinedReducer = (
  state: AllState,
  action: CounterAction | TodoAction,
) => {
  return {
    todos: todosReducer(state.todos, action),
    count: counterReducer(state.count, action),
  };
};

//////create store
const store = createStore(combinedReducer);
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'DECREASE' });

// store;

////////////render

export default store;
