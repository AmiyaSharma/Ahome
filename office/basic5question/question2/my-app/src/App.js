
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function addition() {
    setCount(count + 1);
  }

  function subtraction() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={addition}>+</button>
      <button onClick={subtraction}>-</button>
    </div>
  );
}

export default App;
