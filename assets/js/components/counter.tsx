import React, { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

const counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="container mt-5">
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default counter;