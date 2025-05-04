// src/components/DataFetcher.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

type OceanData = {
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
};

const DataFetcher = () => {
  const [oceanData, setOceanData] = useState<OceanData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate real-time data with setInterval
    const interval = setInterval(() => {
      const newData: OceanData = {
        tide: parseFloat((Math.random() * 5).toFixed(2)),  // Simulating tide height between 0 and 5 meters
        temperature: parseFloat((Math.random() * 30 + 10).toFixed(2)),  // Temperature between 10°C and 40°C
        salinity: parseFloat((Math.random() * 10 + 30).toFixed(2)),  // Salinity between 30 PSU and 40 PSU
        waveHeight: parseFloat((Math.random() * 3).toFixed(2)),  // Wave height between 0 and 3 meters
        currentSpeed: parseFloat((Math.random() * 2).toFixed(2))  // Current speed between 0 and 2 m/s
      };
      setOceanData(newData);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Real-time Ocean Data</h1>
      <p>Tide Level: {oceanData?.tide} meters</p>
      <p>Water Temperature: {oceanData?.temperature} °C</p>
      <p>Water Salinity: {oceanData?.salinity} PSU</p>
      <p>Wave Height: {oceanData?.waveHeight} meters</p>
      <p>Current Speed: {oceanData?.currentSpeed} m/s</p>
    </div>
  );
};

export default DataFetcher;
