import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
