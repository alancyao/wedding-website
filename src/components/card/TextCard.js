import React, { PropTypes } from 'react';
import './TextCard.css';

const TextCard = ({ title, text }) => (
  <section className="section">
    <div className="textcard-inner">
      <h3>{title}</h3>
      <div>{text}</div>
    </div>
  </section>
);

TextCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.any.isRequired,
};

export default TextCard;
