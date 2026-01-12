import React, { useState } from 'react';
import Modal from './Modal';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add Todo</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} onSubmit={addTodo} />}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.title}: {todo.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;