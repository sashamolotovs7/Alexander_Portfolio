import React from 'react';
import './Header.css'; // Import a separate CSS file for the header styles

const Header = () => (
  <header>
    <a href="#" className="logo-holder">
      <div className="logo">( : )</div>
      <div className="logo-text">My Portfolio</div>
    </a>
    <nav>
      <ul id="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/resume">Resume</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
