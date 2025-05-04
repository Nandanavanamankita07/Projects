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

      setOceanData((prev) => [...prev.slice(-19), newData]); // keep last 20 readings

      // Optional: Log the latest data (for debug)
      console.log('New Ocean Data:', newData);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App" style={styles.app}>
      <h1 style={styles.title}>🌊 OceanEye: Real-time Oceanography Dashboard</h1>
      <DataFetcher />
      <OceanVisualization data={oceanData} />
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
};

export default App;
