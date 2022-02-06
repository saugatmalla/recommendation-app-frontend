import './App.css';
import Homepage from './views/Homepage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" exact element={<Homepage/>} />
          </Routes>
      </Router>
  );
}

export default App;
