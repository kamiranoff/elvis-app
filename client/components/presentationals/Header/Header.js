import React from 'react';

import Menu from '../Menu/Menu';

// Import Style
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
    </header>
  );
};

Header.contextTypes = {
  router: React.PropTypes.object,
};

export default Header;
