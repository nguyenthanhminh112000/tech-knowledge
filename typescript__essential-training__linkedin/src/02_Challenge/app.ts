enum STATUS {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  TODO = 'TODO',
}

interface Todo {
  id: number;
  title: string;
  status: STATUS;
  completedOn?: Date;
}

const todoItems: Todo[] = [
  {
    id: 1,
    title: 'Learn HTML',
    status: STATUS.DONE,
    completedOn: new Date('2021-09-11'),
  },
  { id: 2, title: 'Learn TypeScript', status: STATUS.IN_PROGRESS },
  { id: 3, title: 'Write the best app in the world', status: STATUS.TODO },
];

function getNextId<T extends { id: number }[]>(items: T): number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

function addTodoItem(todo: string): Todo {
  const id: number = getNextId<Todo[]>(todoItems);

  const newTodo: Todo = {
    id,
    title: todo,
    status: STATUS.TODO,
  };

  todoItems.push(newTodo);

  return newTodo;
}

const newTodo: Todo = addTodoItem(
  'Buy lots of stuff with all the money we make from the app',
);

console.log(JSON.stringify(newTodo));
