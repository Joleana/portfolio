import React from "react";
import { Navbar } from '../../common'

import './Header.css'

function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">joleana shurley</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__github">
          <a href="https://github.com/Joleana" target="_blank">
            <i className="fab fa-github-square"></i>
          </a>
        </section>
        <section className="header-bottom__linkedin">
          <a href="https://www.linkedin.com/in/joleana-shurley/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </section>
      </section>
    </section>
  )
}

export default Header;
