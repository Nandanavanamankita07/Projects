// src/components/DataFetcher.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

type OceanData = {
  tide: number;
  temperature: number;
  salinity: number;
};

const DataFetcher = () => {
  const [oceanData, setOceanData] = useState<OceanData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOceanData = async () => {
      try {
        // Replace with your actual API URL
        const response = await axios.get('https://api.oceanographydata.com/get_data');
        setOceanData(response.data); // Assume the API returns data in this format
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOceanData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Ocean Data</h1>
      <p>Tide Level: {oceanData?.tide} meters</p>
      <p>Water Temperature: {oceanData?.temperature} °C</p>
      <p>Water Salinity: {oceanData?.salinity} PSU</p>
    </div>
  );
};

export default DataFetcher;
