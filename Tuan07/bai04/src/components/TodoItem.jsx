import React from "react";

const TodoItem = ({ todo, onDelete, onFinished }) => {
  return (
    <div>
      <li>
        {todo.id} - {todo.name} - {todo.status}
        <button onClick={() => onDelete(todo.id)}>Delete this todo</button>
        <button onClick={() => onFinished(todo.id)}>Finished</button>
      </li>
    </div>
  );
};

export default TodoItem;
