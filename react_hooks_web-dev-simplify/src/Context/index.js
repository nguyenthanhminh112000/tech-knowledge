import React from 'react';
import * as ACTION from './../constants/action';

const Context = React.createContext();

const reducer = (currentState, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [
        ...currentState,
        { id: Date.now(), name: action.payload.name, complete: false },
      ];
    case ACTION.TOGGLE_TODO:
      return currentState.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTION.DELETE_TODO:
      return currentState.filter((todo) => todo.id !== action.payload.id);
    default:
      return currentState;
  }
};
const initialState = [];

export const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={React.useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  );
};

export const useStateTodos = () => {
  return React.useContext(Context)[0];
};
export const useDispatchTodos = () => {
  return React.useContext(Context)[1];
};
