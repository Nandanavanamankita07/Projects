// src/App.tsx
import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [oceanData, setOceanData] = useState<OceanData[]>([]);

  return (
    <div className="App">
      <h1 className="title">🌊 OceanEye: Real-time Oceanography Dashboard</h1>
      <div className="content">
        <DataFetcher onDataUpdate={(data) => setOceanData((prev) => [...prev.slice(-19), data])} />
        <OceanVisualization data={oceanData} />
      </div>
    </div>
  );
};

export default App;
