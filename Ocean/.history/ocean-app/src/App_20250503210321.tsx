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

      setOceanData((prev) => [...prev.slice(-19), newData]); // Keep last 20 readings
      console.log('New Ocean Data:', newData);  // Optional log for debugging
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App" style={styles.app}>
      <div style={styles.overlay}></div> {/* Background overlay */}
      <h1 style={styles.title}>🌊 OceanEye: Real-time Oceanography Dashboard</h1>
      <div style={styles.content}>
        <DataFetcher />
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
    padding: '2rem',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black overlay
  },
  title: {
    textAlign: 'center',
    fontSize: '3rem', // Increased size for visibility
    fontWeight: 'bold',
    marginBottom: '1rem',
    zIndex: 1,  // Title on top of the overlay
  },
  content: {
    zIndex: 1, // Content stays above the overlay
  },
};

export default App;
