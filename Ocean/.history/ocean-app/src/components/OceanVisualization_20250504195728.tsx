import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Define the type for the ocean data
interface OceanData {
  time: string;
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
}

const OceanVisualization: React.FC = () => {
  const [data, setData] = useState<OceanData[]>([]); // Set the initial state with an empty array

  useEffect(() => {
    // Fetch the ocean data from the backend API
    fetch('http://localhost:5000/data/ocean_data.json')
      .then((res) => res.json()) // Parse the response as JSON
      .then((fetchedData: OceanData[]) => { // Ensure the fetched data is typed as OceanData[]
        console.log("Fetched ocean data:", fetchedData);
        setData(fetchedData); // Update the state with the fetched data
      })
      .catch((err) => console.error("Error fetching ocean data:", err));
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>🌊 Ocean Data Visualization</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="tide" stroke="#8884d8" />
          <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
          <Line type="monotone" dataKey="waveHeight" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OceanVisualization;
