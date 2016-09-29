import React, { PropTypes } from 'react';

import SongsListContainer from '../../containers/SongsListContainer';
import FullScreenImageContainer from '../../containers/FullScreenImageContainer';

import styles from './Layout.css';

const Layout = ({ children, dispatch, splashScreenVisibility }) => (
  <div className={styles.Layout}>
    <FullScreenImageContainer />
    <div
      className={!splashScreenVisibility ?
        styles.Layout__container : styles.Layout__containerHidden}
    >
      <SongsListContainer dispatch={dispatch} />
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
  splashScreenVisibility: PropTypes.bool.isRequired,
};

Layout.defaultProps = {
  currentPageName: '',
};

export default Layout;
