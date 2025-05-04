import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">🌊 OceanEye</div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link></li>
          <li><Link to="/learn" onClick={() => setMenuOpen(false)}>Learn</Link></li>
          <li><Link to="/analysis" onClick={() => setMenuOpen(false)}>Analysis</Link></li>
        </ul>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#8942;
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
