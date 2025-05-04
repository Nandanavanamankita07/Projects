import { useEffect } from 'react';

type OceanData = {
  time: string;
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
};

interface DataFetcherProps {
  onDataUpdate: (newData: OceanData) => void;
}

const DataFetcher = ({ onDataUpdate }: DataFetcherProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const newData: OceanData = {
        time,
        tide: parseFloat((Math.random() * 5).toFixed(2)),
        temperature: parseFloat((Math.random() * 30 + 10).toFixed(2)),
        salinity: parseFloat((Math.random() * 10 + 30).toFixed(2)),
        waveHeight: parseFloat((Math.random() * 3).toFixed(2)),
        currentSpeed: parseFloat((Math.random() * 2).toFixed(2))
      };
      onDataUpdate(newData);
    }, 5000);

    return () => clearInterval(interval);
  }, [onDataUpdate]);

  return <p>Fetching simulated ocean data...</p>;
};

export default DataFetcher;
