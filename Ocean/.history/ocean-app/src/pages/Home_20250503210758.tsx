// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to OceanEye 🌊</h1>
      <p>Explore ocean data, visualize phenomena, and assist researchers.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
