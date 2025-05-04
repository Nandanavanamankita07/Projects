import React from 'react';
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

interface OceanData {
  time: string;
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
}

interface OceanVisualizationProps {
  data: OceanData[]; // Data prop to be passed from the parent (App)
}

const OceanVisualization: React.FC<OceanVisualizationProps> = ({ data }) => {
  if (data.length === 0) {
    return <div>No data available</div>; // Fallback if there's no data
  }

  // Map time strings to Date objects for the X-axis
  const chartData = data.map(item => ({
    ...item,
    time: new Date(item.time).toLocaleTimeString() // Converts string to readable date string
  }));

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>🌊 Ocean Data Visualization</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
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
