import React, { PropTypes } from 'react';

import SongsListContainer from '../../containers/SongsListContainer';
import FullScreenImageContainer from '../../containers/FullScreenImageContainer';
// import NotificationContainer from '../../containers/NotificationContainer';

import styles from './Layout.css';

const Layout = ({ children, splashScreenVisibility }) => (
  <div className={styles.Layout}>
    <FullScreenImageContainer />
    <div
      className={!splashScreenVisibility ?
        styles.Layout__container : styles.Layout__containerHidden}
    >
      <SongsListContainer />
      {children}
    </div>

  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  splashScreenVisibility: PropTypes.bool.isRequired,
};

Layout.defaultProps = {
  currentPageName: '',
};

export default Layout;
