// src/components/NavBar.tsx
import React from 'react';
import './NavBar.css'; // Make sure to import your CSS for styling

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

export default NavBar;
export {};  // This is to resolve the 'isolatedModules' issue
