import React from 'react';
import styles from '../styles/TodoItem.module.css';

interface TodoItemProps {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
  toggleTodoCompletion: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodoCompletion, deleteTodo }) => {
  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoCompletion(todo.id)}
        className={styles.todoCheckbox}
      />
      <span className={`${todo.completed ? styles.completed : ''} ${styles.todoText}`}>
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className={styles.deleteButton}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;