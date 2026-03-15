import React from 'react'
import { useReducer } from 'react';

function testReducer(state, action) {
  switch(action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
}

const App = () => {
  const [count, dispatch] = useReducer(testReducer, 0);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick = {() => dispatch({type: "dec"})}>-</button>
      <button onClick = {() => dispatch({type: "inc"})}>+</button>
    </div>
  );
}

export default App
