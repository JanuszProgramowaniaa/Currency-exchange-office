import React, { Component } from 'react';
import Counter from './counter'; 
const welcome = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to Exchange</h1>
      <Counter />
    </div>
  );
};

export default welcome;