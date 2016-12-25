import React, { PropTypes } from 'react';
import './ParallaxImage.css';

const ParallaxImage = ({ imageUrl }) => (
  <div
    className="parallax"
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  />
);

ParallaxImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ParallaxImage;

