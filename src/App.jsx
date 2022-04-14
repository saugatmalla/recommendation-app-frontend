import './App.css';
import React from 'react';
import Homepage from './views/Homepage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Registration from './views/registration';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" exact element={<Homepage/>} />
            <Route path="/registration" exact element={<Registration/>} />
          </Routes>
      </Router>
  );
}

export default App;
