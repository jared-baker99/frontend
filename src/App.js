import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Learn from './pages/Learn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Register />} />
        <Route path="/home" index element={<HomePage />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/Learn" index element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
