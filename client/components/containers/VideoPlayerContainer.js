import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import VideoPlayer from '../presentationals/VideoPlayer/VideoPlayer';

const VideoPlayerContainer = ({ videoId }) => {
  return (
    <VideoPlayer videoId={videoId} />
  );
};

VideoPlayerContainer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

VideoPlayerContainer.defaultProps = {
  videoId: '',
};

const mapStateToProps = ({ songs }) => {
  return {
    videoId: songs && songs.song ? songs.song.youtube_video_id : '',
  };
};

export default connect(mapStateToProps)(VideoPlayerContainer);
