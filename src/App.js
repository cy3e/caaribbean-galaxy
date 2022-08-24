
import { Router, Routes } from 'react-router-dom';

import './App.css';

import AR from './pages/ar/AR'
import Scan from './pages/sccannqr/scann'
import Main from './pages/main/main'


function App() {
  return (
    <div className="App">
          <Routes>
              <Router path="/" elements={<Main/>} />
              <Router path="scan" elements={<Scan/>} />
              <Router path="ar" elements={<AR/>} />
          </Routes>
    </div>
  );
}

export default App;
