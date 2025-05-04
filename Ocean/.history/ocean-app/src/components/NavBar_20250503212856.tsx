// src/components/NavBar.tsx
import React from 'react';
import './NavBar.css'; // If you have a corresponding CSS file for styling

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/research">Research</a></li>
        <li><a href="/ocean-data">Ocean Data</a></li>
        <li><a href="/analysis">Analysis</a></li>
      </ul>
    </div>
  );
};

export default NavBar;  // Ensure this export is here
