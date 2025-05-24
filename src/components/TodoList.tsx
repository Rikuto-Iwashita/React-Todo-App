import React from 'react';
import { Todo } from '../App';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onComplete: (id: number) => void;
  onDelete: (id: number, isCompleted: boolean) => void;
}

const TodoList: React.FC<Props> = ({ todos, onComplete, onDelete }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onComplete={onComplete}
        onDelete={onDelete}
        isCompleted={false}
      />
    ))}
  </ul>
);

export default TodoList;
