import React from 'react';
import './banner.scss';

function Banner({image,texte}) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner__img" />
      <div className="banner__sombre"></div>
      <div className="banner__txt">{texte}</div>
    </div>
  );
}

export default Banner;
