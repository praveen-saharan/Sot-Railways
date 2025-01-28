import React from 'react';
import '../Navbar.css';  // Import the CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Booking</li>
        <li className="nav-item">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
