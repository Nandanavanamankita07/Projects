import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import OceanVisualization from './components/OceanVisualization';
import DataFetcher from './components/DataFetcher';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const Home: React.FC = () => (
  <div>
    <h1 className="title">🌊 OceanEye: Real-time Oceanography Dashboard</h1>
    <p>Welcome to OceanEye! Your real-time source for oceanographic data and research.</p>
  </div>
);

const Research: React.FC = () => (
  <div>
    <h1 className="title">Research</h1>
    <OceanVisualization />
  </div>
);

const Learn: React.FC = () => (
  <div>
    <h1 className="title">Learn About Oceans</h1>
    <p>Learn about the oceans, corals, tides, and waves...</p>
  </div>
);

const Analysis: React.FC = () => (
  <div>
    <h1 className="title">Analysis</h1>
    <p>Advanced analysis tools to forecast ocean trends and patterns.</p>
  </div>
);

export default App;
