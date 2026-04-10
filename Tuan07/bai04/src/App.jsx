import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App = () => {
  return (
    <div>
      <TodoInput></TodoInput>
      <h2>Danh sách todos</h2>
      <TodoList></TodoList>
    </div>
  );
};

export default App;
