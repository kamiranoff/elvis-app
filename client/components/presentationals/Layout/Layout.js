import React, { PropTypes } from 'react';

import SongsListContainer from '../../containers/SongsListContainer';
import FullScreenImage from '../FullScreenImage/FullScreenImage';

import styles from './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <FullScreenImage />
      <div className={styles.Layout__container}>
        <SongsListContainer />
          {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  currentPageName: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
  switchLanguage: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  currentPageName: '',
};

export default Layout;
