import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick = {() => setCount(count - 1)}>-</button>
      <button onClick = {() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default App
