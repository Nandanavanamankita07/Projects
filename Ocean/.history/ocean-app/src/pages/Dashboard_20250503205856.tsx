import { useState } from 'react';
import DataFetcher from '../components/DataFetcher';
import OceanVisualization from '../components/OceanVisualization';

type OceanData = {
  time: string;
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
};

export default function Dashboard() {
  const [data, setData] = useState<OceanData[]>([]);

  const handleNewData = (newData: OceanData) => {
    setData(prev => [...prev, newData]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Live Ocean Data Dashboard</h2>
      <DataFetcher onDataUpdate={handleNewData} />
      <OceanVisualization data={data} />
    </div>
  );
}
