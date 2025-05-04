// src/components/DataFetcher.tsx
import React, { useEffect } from 'react';

type OceanData = {
  time: string; // Add the time property
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
};

type DataFetcherProps = {
  onDataUpdate: (data: OceanData) => void; // Function to handle data update
};

const DataFetcher: React.FC<DataFetcherProps> = ({ onDataUpdate }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const newData: OceanData = {
        time: new Date().toLocaleTimeString(), // Include time in the generated data
        tide: parseFloat((Math.random() * 5).toFixed(2)),
        temperature: parseFloat((Math.random() * 30 + 10).toFixed(2)),
        salinity: parseFloat((Math.random() * 10 + 30).toFixed(2)),
        waveHeight: parseFloat((Math.random() * 3).toFixed(2)),
        currentSpeed: parseFloat((Math.random() * 2).toFixed(2)),
      };
      onDataUpdate(newData); // Call the onDataUpdate function when new data is generated
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [onDataUpdate]);

  return <div>Fetching Data...</div>;
};

export default DataFetcher;
