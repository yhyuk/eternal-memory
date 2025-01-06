import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import TributePage from './pages/TributePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<TributePage />} />
      </Routes>
    </Router>
  );
}

export default App;
