import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface OceanData {
  tideHeight: number;
  waterQuality: number;
  waveHeight: number;
}

const fetchOceanData = async (): Promise<OceanData> => {
  const response = await axios.get('https://api.example.com/ocean-data');  // Replace with actual API
  return response.data;
};

const DataFetcher: React.FC = () => {
  const [oceanData, setOceanData] = useState<OceanData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchOceanData();
      setOceanData(data);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading ocean data...</div>;
  }

  return (
    <div>
      <h2>Ocean Data</h2>
      <p>Tide Height: {oceanData?.tideHeight} meters</p>
      <p>Water Quality: {oceanData?.waterQuality}</p>
      <p>Wave Height: {oceanData?.waveHeight} meters</p>
    </div>
  );
};

export default DataFetcher;
