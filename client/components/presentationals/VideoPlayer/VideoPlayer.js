import React, { PropTypes, Component } from 'react';
import { debounce } from 'lodash';
import YouTube from 'react-youtube';
import styles from './VideoPlayer.css';

class VideoPlayer extends Component {

  constructor(props) {
    super(props);
    this.translation = 0;
    this._handleScroll = this._handleScroll.bind(this);
    this._createTranslation = debounce(this._createTranslation.bind(this), 10);
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

  _createTranslation(ref, translation) {
    const el = ref;
    el.style.transform = `translateY(${translation}px)`;
  }

  _handleScroll(event) {
    if (this.refs.videoPlayer) {
      const player = this.refs.videoPlayer;
      const songContainerPosition = this.props.songContainerPosition;
      const songContainerHeight = this.props.songContainerHeight;
      const scrollTop = event.srcElement.scrollingElement.scrollTop;
      const translation = scrollTop - songContainerPosition;
      if (scrollTop > songContainerPosition && scrollTop < songContainerHeight + 300) {
        this._createTranslation(player, translation);
      } else if (scrollTop > songContainerHeight + 300) {
        player.style.transform = 'translateY(0)px)';
      } else {
        player.style.transform = 'translateY(0px)';
      }
    }
  }

  render() {
    const opts = {
      height: '600',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        rel: 0,
      },
    };
    const videoId = this.props.videoId;
    if (!videoId) { // wait for video to load...
      return null;
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
  songContainerPosition: PropTypes.number.isRequired,
  songContainerHeight: PropTypes.number.isRequired,
};

VideoPlayer.defaultProps = {
  videoId: '',
  songContainerPosition: 0,
  songContainerHeight: 0,

};

export default VideoPlayer;
