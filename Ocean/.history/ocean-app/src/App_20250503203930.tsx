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
};

function App() {
  const [oceanData, setOceanData] = useState<OceanData[]>([]);

  // Simulate fetching data for visualization
  useEffect(() => {
    const fetchOceanData = async () => {
      // Replace with actual data fetching logic
      const data: OceanData[] = [
        { time: '2025-05-01', tide: 2.4, temperature: 28, salinity: 35 },
        { time: '2025-05-02', tide: 2.6, temperature: 27, salinity: 34 },
        { time: '2025-05-03', tide: 2.5, temperature: 28, salinity: 33 },
      ];
      setOceanData(data);
    };

    fetchOceanData();
  }, []);

  return (
    <div className="App">
      <h1>Oceanography App</h1>
      <DataFetcher />
      <OceanVisualization data={oceanData} />
    </div>
  );
}

export default App;
