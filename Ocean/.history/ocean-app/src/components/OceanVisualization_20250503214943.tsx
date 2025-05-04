import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface OceanData {
  time: string;
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
}

interface OceanVisualizationProps {
  data: OceanData[];
}

const OceanVisualization: React.FC<OceanVisualizationProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: '80vh' }}>
      <h2>Ocean Data Visualization</h2>
      <ResponsiveContainer width="100%" height="100%">
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
