import React, { PropTypes } from 'react';
import './Header.css';

const Header = ({ title }) => (
  <header className="header">
    <div className="inner row">
      <div className="col-sm-12">
        <h1 className="heading">{title}</h1>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

