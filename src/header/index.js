import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import CSS file for styling

const Header = () => {
  return (
    <header className="header">
 {/* Wrap the entire application with the BrowserRouter component */}
        <nav className="navbar">
          <ul className="menu">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/about">About</Link>
            </li>
            <li className="menu-item">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
