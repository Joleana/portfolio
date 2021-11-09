import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.scss'

function Navbar () {
  return (
    <section className="navbar">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/resume" className="navbar-item">Resumé</Link>
      <Link to="/projects" className="navbar-item">Projects</Link>
      <Link to="/blog" className="navbar-item">Blog</Link>
      <Link to="/about" className="navbar-item">About</Link>
      <Link to="/contact" className="navbar-item">Contact</Link>
    </section>
  );
}

export default Navbar;
