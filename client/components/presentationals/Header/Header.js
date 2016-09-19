import React from 'react';
import FullScreenImage from '../FullScreenImage/FullScreenImage';
import Menu from '../Menu/Menu';

// Import Style
import styles from './Header.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <FullScreenImage />
      <Menu />
    </div>
  );
};

Header.contextTypes = {
  router: React.PropTypes.object,
};

export default Header;
