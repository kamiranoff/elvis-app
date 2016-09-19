import React, { PropTypes } from 'react';

import HelmetContainer from '../containers/HelmetContainer';
import LayoutContainer from '../containers/LayoutContainer';

const AppContainer = () => {
  return (
    <div>
      <LayoutContainer>
        <HelmetContainer />
        {this.props.children}
      </LayoutContainer>
    </div>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
