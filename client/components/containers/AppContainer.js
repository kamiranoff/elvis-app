import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
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

export default connect(null, null)(LayoutContainer);
