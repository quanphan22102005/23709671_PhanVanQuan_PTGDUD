import React from "react";
import { useState } from "react";
import Button from "./components/Button/Button.jsx";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const isDanger = count > 10;

  return (
    <div
      style={{ padding: "20px" }}
      className={`container ${isDanger ? "danger" : ""}`}
    >
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <h3>Count: {count}</h3>
      <Button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        -
      </Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </div>
  );
};

export default App;
