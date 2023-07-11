import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss'

function Navbar () {
  return (
    <section className="navbar">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/projects" className="navbar-item">Projects</Link>
        <Link to="/about" className="navbar-item">About</Link>
        <Link to="/contact" className="navbar-item">Contact</Link>
    </section>
  );
}

export default Navbar;