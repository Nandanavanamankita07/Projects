// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import DataFetcher from '../components/DataFetcher';
import OceanVisualization from '../components/OceanVisualization';

const Dashboard: React.FC = () => {
  const [oceanData, setOceanData] = useState<any[]>([]);

  const handleDataUpdate = (newData: any) => {
    setOceanData((prev) => [...prev.slice(-19), newData]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Live Ocean Data Dashboard</h2>
      <DataFetcher onDataUpdate={handleDataUpdate} />
      <OceanVisualization data={oceanData} />
    </div>
  );
};

export default Dashboard;
