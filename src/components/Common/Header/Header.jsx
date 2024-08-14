import React from "react";
import Navbar from '../Navbar/Navbar'; // up 2 directories

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/"><h1>joleana temple shurley</h1></a>
      </div>
      <div className="header-right">
        <Navbar />
        <hr className="header-top__seperator" />
        </div>
    </header>
  );
}

export default Header;