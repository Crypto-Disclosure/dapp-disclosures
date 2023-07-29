import React from 'react';
import './Header.css'; // Importing styles

const Header = ({ name, description }) => (
  <header className="header">
    <h1 className="header-title">{name}</h1>
    <p className="header-description">{description}</p>
  </header>
);

export default Header;
