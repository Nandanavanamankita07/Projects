// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import DataFetcher from './components/DataFetcher';
import OceanVisualization from './components/OceanVisualization';

type OceanData = {
  time: string;
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
};

function App() {
  const [oceanData, setOceanData] = useState<OceanData[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const data: OceanData = {
        time,
        tide: parseFloat((Math.random() * 5).toFixed(2)),
        temperature: parseFloat((Math.random() * 30 + 10).toFixed(2)),
        salinity: parseFloat((Math.random() * 10 + 30).toFixed(2)),
        waveHeight: parseFloat((Math.random() * 3).toFixed(2)),
        currentSpeed: parseFloat((Math.random() * 2).toFixed(2)),
      };
      setOceanData((prevData) => [...prevData, data]);
    }, 5000); // Add new data every 5 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="App">
      <h1>Real-time Oceanography Data</h1>
      <DataFetcher />
      <OceanVisualization data={oceanData} />
    </div>
  );
}

export default App;
