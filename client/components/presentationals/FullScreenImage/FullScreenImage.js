import React, { PropTypes } from 'react';
// Import Style
import styles from './FullScreenImage.css';
import logoColor from './../../../assets/images/logo-color.svg';

const FullScreenImage = ({ windowHeight, bg, splashScreenVisibility, handleClick }) => (
  <div
    className={!splashScreenVisibility ? styles.FullScreenImageHidden : styles.FullScreenImage}
    style={{ height: windowHeight, backgroundImage: bg }}
    onClick={handleClick}
  >
    <button className={styles.FullScreenImage__btn}>
      <img src={logoColor} alt="logo" />
    </button>
  </div>
);

FullScreenImage.propTypes = {
  windowHeight: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
  splashScreenVisibility: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FullScreenImage;
