import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import VideoPlayer from '../presentationals/VideoPlayer/VideoPlayer';

class VideoPlayerContainer extends Component {

  componentWillReceiveProps(nextProps) {
    this.video = {
      url: `https://www.youtube.com/embed/${nextProps.videoId}`, //ES6 == 'https://www.youtube.com/embed/ + {videoId}'
    };
  }

  render() {
    return (
      <VideoPlayer video={this.video} />
    );
  }
}

VideoPlayerContainer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

VideoPlayerContainer.defaultProps = {
  song: {
    youtube_video_id: '',
  },
  videoId: '',
};

const mapStateToProps = ({ songs }) => {
  return {
    videoId: songs && songs.song ? songs.song.youtube_video_id : '',
  };
};

export default connect(mapStateToProps)(VideoPlayerContainer);
