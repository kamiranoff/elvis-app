import React, { PropTypes } from 'react';

import Header from './../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ currentPageName, children, intl, switchLanguage }) => {
  return (
    <div>
      <Header />
      <h1 className="Layout__title">{currentPageName}</h1>
      {children}
      <Footer intl={intl} switchLanguage={switchLanguage} />
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
