import React from "react";
import "./TodoInput.css";

const TodoInput = () => {
  return (
    <div>
      <input
        type="text"
        className="todo-input"
        placeholder="Type your task here..."
      />
    </div>
  );
};

export default TodoInput;
