import React, { PropTypes } from 'react';
import HelmetContainer from '../containers/HelmetContainer';
import LayoutContainer from '../containers/LayoutContainer';

const AppContainer = ({ children }) => {
  return (
    <LayoutContainer>
      <HelmetContainer />
      {children}
    </LayoutContainer>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
