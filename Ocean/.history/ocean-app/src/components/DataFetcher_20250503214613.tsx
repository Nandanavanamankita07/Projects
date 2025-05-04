import React, { useEffect, useState } from 'react';

interface OceanData {
  time: string;
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<OceanData[]>([]);

  useEffect(() => {
    // Fetch data from an API
    const fetchData = async () => {
      const response = await fetch('/api/ocean-data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      {/* Display fetched data here */}
    </div>
  );
};

export default DataFetcher;
