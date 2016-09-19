import React from 'react';
import { Link } from 'react-router';

import styles from './Menu.css';
import logo from './../../../assets/images/logo.svg';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <h1 className={styles['site-title']}>

        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </h1>
    </nav>
  );
};

export default Menu;
