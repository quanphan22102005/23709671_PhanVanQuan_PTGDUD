import React, { useReducer } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
};

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const handleAdd = (text) =>
    dispatch({ type: ACTIONS.ADD_TODO, payload: text });
  const handleToggle = (id) =>
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  const handleDelete = (id) =>
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });

  return (
    <div>
      <h1>Todo App</h1>

      <TodoInput onAdd={handleAdd} />

      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />

      <div>
        Tổng số công việc: {todos.length} | Hoàn thành:{" "}
        {todos.filter((t) => t.completed).length}
      </div>
    </div>
  );
}

export default App;
