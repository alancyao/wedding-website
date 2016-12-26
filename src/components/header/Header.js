import React, { PropTypes } from 'react';
import './Header.css';

const Header = ({ title }) => (
  <header className="header">
    <div className="header-inner">
      <h1 className="heading">{title}</h1>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

