import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Menu.css';
import logo from './../../../../assets/images/logo.svg';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <h1 className={styles['site-title']}>

        <Link to="/">
          <img src={logo} alt="logo" />
          <FormattedMessage
            id="siteTitle"
          />
        </Link>
      </h1>

      <ul className={styles.menu__nav}>
        <li><Link to="/posts"> Blog </Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
