import React from "react";
import TodoItem from "./TodoItem";
import { useRecoilState } from "recoil";
import { todos } from "../globalState/store";

const TodoList = () => {
  const [myTodos, setMyTodos] = useRecoilState(todos);

  const deleteTodo = (id) => {
    const newTodos = myTodos.filter((todo) => todo.id !== id);

    setMyTodos(newTodos);
  };

  const setFinished = (id) => {
    const newTodos = myTodos.map((item) => {
      if (item.id === id) {
        return { ...item, status: "Finished" };
      }
      return item;
    });

    setMyTodos(newTodos);
  };
  return (
    <div>
      <ul>
        {myTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onFinished={setFinished}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
