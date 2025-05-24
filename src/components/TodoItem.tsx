import React from 'react';
import { Todo } from '../types'; // 👈 ここも変更！

interface Props {
  todo: Todo;
  onComplete?: (id: number) => void;
  onDelete: (id: number, isCompleted: boolean) => void;
  isCompleted?: boolean;
}

const TodoItem: React.FC<Props> = ({ todo, onComplete, onDelete, isCompleted = false }) => (
  <li>
    {todo.text}
    {!isCompleted && onComplete && (
      <button type="button" onClick={() => onComplete(todo.id)}>
        完了
      </button>
    )}
    <button type="button" onClick={() => onDelete(todo.id, isCompleted)}>
      削除
    </button>
  </li>
);

export default TodoItem;
