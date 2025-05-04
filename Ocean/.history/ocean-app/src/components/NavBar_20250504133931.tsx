// NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

interface NavBarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="logo">🌊 OceanEye</div>
        <ul className="nav-links">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/research" onClick={toggleMenu}>Research</Link></li>
          <li><Link to="/learn" onClick={toggleMenu}>Learn</Link></li>
          <li><Link to="/analysis" onClick={toggleMenu}>Analysis</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
