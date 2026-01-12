import React, { useState } from 'react';
import Modal from './components/Modal';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Welcome to React with Vite and TypeScript</h1>
      <button onClick={openModal}>Add New Todo</button>
      {isModalOpen && <Modal closeModal={closeModal} />}
      <TodoList />
    </div>
  );
};

export default App;