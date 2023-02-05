import React from 'react';
import { ContextProvider } from './Context';
import TodoList from './components/TodoList';

// const initialState = [];
const App = () => {
  return (
    <>
      <ContextProvider>
        <TodoList />
      </ContextProvider>
    </>
  );
};

export default App;
