import React, { PropTypes } from 'react';
import './TextCard.css';

const TextCard = ({ title, text }) => (
  <section className="section">
    <div className="textcard-inner">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </section>
);

TextCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextCard;
