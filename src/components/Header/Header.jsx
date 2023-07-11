import React from "react";
import Navbar from '../Navbar/Navbar'; // up 2 directories


import './Header.scss'; // in same directory

function Header() {
  return (
    <section className="header">
      <p>joleana's navbar?</p>
      <Navbar />
    </section>
  );
}

export default Header;