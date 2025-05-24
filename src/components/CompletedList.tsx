import React from 'react';
import { Todo } from '../App';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onDelete: (id: number, isCompleted: boolean) => void;
}

const CompletedList: React.FC<Props> = ({ todos, onDelete }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        isCompleted
      />
    ))}
  </ul>
);

export default CompletedList;
