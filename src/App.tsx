import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import CompletedList from './components/CompletedList';
import { Todo } from './types'; // 👈 ここ変更！

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completed, setCompleted] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const handleComplete = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    setTodos(todos.filter((t) => t.id !== id));
    setCompleted([...completed, todo]);
  };

  const handleDelete = (id: number, isCompleted: boolean) => {
    if (isCompleted) {
      setCompleted(completed.filter((t) => t.id !== id));
    } else {
      setTodos(todos.filter((t) => t.id !== id));
    }
  };

  return (
    <div>
      <h1>TODO App</h1>
      <TodoInput onAdd={handleAdd} />
      <h2>未完了</h2>
      <TodoList todos={todos} onComplete={handleComplete} onDelete={handleDelete} />
      <h2>完了</h2>
      <CompletedList todos={completed} onDelete={handleDelete} />
    </div>
  );
};

export default App;
