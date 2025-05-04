import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/analysis">Analysis</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
