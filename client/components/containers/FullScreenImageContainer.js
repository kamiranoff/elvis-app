import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setSplashScreenVisibility } from '../../actions/pageActions';

import FullScreenImage from '../presentationals/FullScreenImage/FullScreenImage';

class FullScreenImageContainer extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomBackgroundImage() {
    const bg = `url(elvis-bg/${Math.floor(Math.random() * 14 + 1)}.jpg)`;
    return bg;
  }

  getWindowHeight() {
    if (typeof window !== 'undefined') {
      const w = window;
      const d = document;
      const e = d.documentElement;
      const g = d.getElementsByTagName('body')[0];
      const y = w.innerHeight || e.clientHeight || g.clientHeight;
      return y;
    }

    return 0;
  }

  handleClick() {
    this.props.onSplashScreenClick(false);
  }

  render() {
    return (
      <FullScreenImage
        bg={this.getRandomBackgroundImage()}
        windowHeight={this.getWindowHeight()}
        onClick={this.handleClick}
        splashScreenVisibility={this.props.splashScreenVisibility}
        handleClick={this.handleClick}
      />
    );
  }
}

FullScreenImageContainer.propTypes = {
  splashScreenVisibility: PropTypes.bool.isRequired,
  onSplashScreenClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({ global: { splashScreenVisibility } }) => {
  return {
    splashScreenVisibility,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSplashScreenClick: (visibility) => {
      dispatch(setSplashScreenVisibility(visibility));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullScreenImageContainer);

