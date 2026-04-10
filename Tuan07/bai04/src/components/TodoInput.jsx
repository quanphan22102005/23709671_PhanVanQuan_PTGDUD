import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todos } from "../globalState/store";

const TodoInput = () => {
  const [myTodos, setMyTodos] = useRecoilState(todos);
  const [todoName, setTodoName] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      name: todoName,
      status: "In Progress",
    };

    setMyTodos([...myTodos, newTodo]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Todo Name"
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button onClick={() => addTodo()}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
