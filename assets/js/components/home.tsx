import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Welcome from './welcome'; 
import Counter from './counter'; 

const home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Exchange</Link>
        <div id="navbarText" className="d-flex">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">Counter</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
};

export default home;