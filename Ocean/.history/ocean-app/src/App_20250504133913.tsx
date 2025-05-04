// App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import OceanVisualization from './components/OceanVisualization';

interface OceanData {
  time: string;
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
}

const App: React.FC = () => {
  const [oceanData, setOceanData] = useState<OceanData[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData: OceanData = {
        time: new Date().toLocaleTimeString(),
        tide: parseFloat((Math.random() * 5).toFixed(2)),
        temperature: parseFloat((Math.random() * 30 + 10).toFixed(2)),
        salinity: parseFloat((Math.random() * 10 + 30).toFixed(2)),
        waveHeight: parseFloat((Math.random() * 3).toFixed(2)),
        currentSpeed: parseFloat((Math.random() * 2).toFixed(2)),
      };
      setOceanData((prev) => [...prev.slice(-19), newData]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <div className={`main-content ${menuOpen ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research oceanData={oceanData} />} />
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

const Research: React.FC<{ oceanData: OceanData[] }> = ({ oceanData }) => (
  <div>
    <h1 className="title">Research</h1>
    <OceanVisualization data={oceanData} />
  </div>
);

const Learn: React.FC = () => (
  <div>
    <h1 className="title">Learn About Oceans</h1>
    <div>
      <h2>Oceans</h2>
      <p>Oceans are vast bodies of saltwater that cover more than 70% of the Earth's surface...</p>
      <h2>Corals</h2>
      <p>Corals are marine invertebrates that form colonies...</p>
      <h2>Tides</h2>
      <p>Tides are the periodic rise and fall of sea levels...</p>
      <h2>Waves</h2>
      <p>Waves are disturbances on the surface of oceans...</p>
    </div>
  </div>
);

const Analysis: React.FC = () => (
  <div>
    <h1 className="title">Analysis</h1>
    <p>Advanced analysis tools to forecast ocean trends and patterns.</p>
  </div>
);

export default App;
