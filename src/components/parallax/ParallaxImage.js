import React, { PropTypes } from 'react';
import './ParallaxImage.css';

const ParallaxImage = ({ imageUrl, desktopImageUrl }) => {
  const src = window.innerWidth > 1000 && desktopImageUrl ? desktopImageUrl : imageUrl;
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
};

ParallaxImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  desktopImageUrl: PropTypes.string,
};

export default ParallaxImage;

