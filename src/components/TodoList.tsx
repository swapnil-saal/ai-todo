import React, { useState } from 'react';
import TodoItem from './TodoItem';
import FilterOptions from './FilterOptions';
import styles from '../styles/TodoList.module.css';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      addTodo(target.value);
      target.value = '';
    }
  };

  return (
    <div className={styles.todoList}>
      <input
        className={styles.addTodoInput}
        type="text"
        placeholder="Add a new todo..."
        onKeyDown={handleAddTodo}
      />
      <div className={styles.todos}>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
      <FilterOptions filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default TodoList;