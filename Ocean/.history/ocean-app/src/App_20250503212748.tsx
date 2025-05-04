// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import DataFetcher from './components/DataFetcher';
import OceanVisualization from './components/OceanVisualization';
import NavBar from './components/NavBar';
import TimeFilter from './components/TimeFilter';

type OceanData = {
  time: string;
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
};

const App: React.FC = () => {
  const [oceanData, setOceanData] = useState<OceanData[]>([]);
  const [filteredData, setFilteredData] = useState<OceanData[]>([]);

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
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleTimeFilter = (startTime: string, endTime: string) => {
    const filtered = oceanData.filter((data) => {
      return data.time >= startTime && data.time <= endTime;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <NavBar />
      <h1 className="title">🌊 OceanEye: Real-time Oceanography Dashboard</h1>
      <TimeFilter onFilter={handleTimeFilter} />
      <div className="content">
        <DataFetcher onDataUpdate={(data) => setOceanData((prev) => [...prev.slice(-19), data])} />
        <OceanVisualization data={filteredData.length > 0 ? filteredData : oceanData} />
      </div>
    </div>
  );
};

export default App;
