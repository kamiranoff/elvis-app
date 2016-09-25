import React, { PropTypes } from 'react';

import SongsListContainer from '../../containers/SongsListContainer';
import FullScreenImage from '../FullScreenImage/FullScreenImage';

import styles from './Layout.css';

const Layout = ({ children, dispatch }) => {
  return (
    <div className={styles.Layout}>
      <FullScreenImage />
      <div className={styles.Layout__container}>
        <SongsListContainer dispatch={dispatch} />
          {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  currentPageName: '',
};

export default Layout;
