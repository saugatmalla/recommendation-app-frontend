import './App.css';
import React from 'react';
import Homepage from './views/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registration from './views/registration';
import Login from './views/login';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/registration" exact element={<Registration />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
