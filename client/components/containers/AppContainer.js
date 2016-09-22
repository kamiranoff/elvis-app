import React, { PropTypes } from 'react';

import HelmetContainer from '../containers/HelmetContainer';
import LayoutContainer from '../containers/LayoutContainer';

const AppContainer = ({ children }) => {
  return (
    <div>
      <LayoutContainer>
        <HelmetContainer />
        {children}
      </LayoutContainer>
    </div>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
