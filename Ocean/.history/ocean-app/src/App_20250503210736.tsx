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

const App: React.FC = () => {
  const [oceanData, setOceanData] = useState<OceanData[]>([]);

  const handleDataUpdate = (newData: OceanData) => {
    setOceanData((prev) => [...prev.slice(-19), newData]); // keep last 20 readings
  };

  return (
    <div className="App" style={styles.app}>
      <h1 style={styles.title}>🌊 OceanEye: Real-time Oceanography Dashboard</h1>
      <div style={styles.content}>
        <DataFetcher onDataUpdate={handleDataUpdate} />
        <OceanVisualization data={oceanData} />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  app: {
    backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
    padding: '2rem',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default App;
