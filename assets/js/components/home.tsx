import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Welcome from './welcome'; 

const home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Exchange</Link>
        <div id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
};

export default home;