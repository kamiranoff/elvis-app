import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import VideoPlayer from '../presentationals/VideoPlayer/VideoPlayer';

const VideoPlayerContainer = ({ videoId, songContainerPosition, songContainerHeight }) => (
  <VideoPlayer
    videoId={videoId}
    songContainerPosition={songContainerPosition}
    songContainerHeight={songContainerHeight}
  />
);

VideoPlayerContainer.propTypes = {
  videoId: PropTypes.string.isRequired,
  songContainerPosition: PropTypes.number.isRequired,
  songContainerHeight: PropTypes.number.isRequired,
};

VideoPlayerContainer.defaultProps = {
  videoId: '',
  songContainerPosition: 0,
  songContainerHeight: 0,
};

const mapStateToProps = ({ songs: { song }, global: { songContainerPosition, songContainerHeight } }) => {
  return {
    videoId: song.youtube_video_id,
    songContainerPosition,
    songContainerHeight,
  };
};

export default connect(mapStateToProps)(VideoPlayerContainer);
