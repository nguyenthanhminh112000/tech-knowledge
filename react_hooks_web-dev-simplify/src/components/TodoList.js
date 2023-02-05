import React from 'react';
import { useStateTodos, useDispatchTodos } from '../Context';
import * as ACTION from './../constants/action';
const TodoList = () => {
  const todos = useStateTodos();
  const dispatchTodos = useDispatchTodos();

  const [name, setName] = React.useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatchTodos({ type: ACTION.ADD_TODO, payload: { name: name } });
          setName('');
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.name}</p>
            <button
              onClick={() => {
                dispatchTodos({
                  type: ACTION.TOGGLE_TODO,
                  payload: { id: todo.id },
                });
              }}
            >
              {todo.complete ? 'Complete' : 'Progress'}
            </button>
            <button
              onClick={() => {
                dispatchTodos({
                  type: ACTION.DELETE_TODO,
                  payload: { id: todo.id },
                });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
