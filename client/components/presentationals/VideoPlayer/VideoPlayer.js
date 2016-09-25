import React, { PropTypes, Component } from 'react';
import YouTube from 'react-youtube';

import styles from './VideoPlayer.css';

class VideoPlayer extends Component {

  constructor(props) {
    super(props);
    this.translation = 0;
    this._handleScroll = this._handleScroll.bind(this);
    this.counter = 0;
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('scroll', this._handleScroll);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('scroll', this._handleScroll);
    }
  }

  _handleScroll(event) {
    if (this.refs.videoPlayer) {
      const playerFromTop = this.refs.videoPlayer.getBoundingClientRect().top;
      const scrollTop = event.srcElement.body.scrollTop;
      const translation = Math.round(Math.min(20000, scrollTop / 3 - 200));
      if (playerFromTop < 100) {
        console.log(translation);
        // this.refs.videoPlayer.style.transform = `translateY(${translation}px)`;
        // this.refs.videoPlayer.style.position = 'fixed';
        // this.refs.videoPlayer.style.right = 0;
        // this.refs.videoPlayer.style.top = "105px";
      } else {
        // this.refs.videoPlayer.style.transform = `translateY(-${translation}px)`;
      }
    }
  }

  render() {
    console.log(this);
    const opts = {
      height: '600',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const videoId = this.props.videoId;
    console.log('here', this.props.videoId);
    if (!videoId) { // wait for video to load...
      return (<div>Loading</div>);
    }
    return (
      <div className={styles.VideoPlayer} ref="videoPlayer" style={{ transform: this.translation }}>
        <YouTube
          videoId={videoId}
          opts={opts}
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

VideoPlayer.defaultProps = {
  videoId: '',
};

export
default
VideoPlayer;
