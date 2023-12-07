import React from 'react';
// import TodoList from './TodoList';

const App = () => {
  const todos = [
    { id: 1, task: 'Buy groceries' },
    { id: 2, task: 'Write code' },
    { id: 3, task: 'Read a book' },
  ];
  const TodoList = ({ todos }) => {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <h2>My Todo List</h2>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
