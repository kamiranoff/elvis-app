import React, { PropTypes } from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) { // wait for video to load...
    return (<div>Loading</div>);
  }

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={video.url} autoPlay="true" frameBorder="0" className="embed-responsive-item"></iframe>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoPlayer;
