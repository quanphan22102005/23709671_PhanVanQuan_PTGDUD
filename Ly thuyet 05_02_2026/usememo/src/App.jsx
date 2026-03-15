import React from 'react'
import { useState, useMemo } from 'react';

function slowCalculate(num) {
  for(let i = 0; i < 100000000; i++) {

  }
  return num * 2;
}

const App = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const result = useMemo(() => {
    return slowCalculate(count);
  }, [count])

  return (
    <div>
      <h3>{count}</h3>
      <button onClick = {() => setCount(count + 1)}>+ count</button>
      <button onClick = {() => setCount(count - 1)}>- count</button>
      <br />
      <br />
      <h3>{other}</h3>
      <button onClick = {() => setOther(other + 1)}>+ other</button>
      <button onClick = {() => setOther(other - 1)}>- other</button>
    </div>
  )
}

export default App
