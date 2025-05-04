// src/components/OceanVisualization.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type OceanData = {
  time: string;
  tide: number;
  temperature: number;
  salinity: number;
  waveHeight: number;
  currentSpeed: number;
};

const OceanVisualization = ({ data }: { data: OceanData[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="tide" stroke="#8884d8" />
        <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
        <Line type="monotone" dataKey="salinity" stroke="#ff7300" />
        <Line type="monotone" dataKey="waveHeight" stroke="#ff0000" />
        <Line type="monotone" dataKey="currentSpeed" stroke="#00ff00" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OceanVisualization;
