import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchRandomSong } from '../../actions/SongActions';
import { getSongContainerPos } from '../../actions/pageActions';

import Song from '../presentationals/Song/Song';

class SongContainer extends Component {
  constructor(props) {
    super(props);
    props.fetchRandomSong();
  }

  componentDidUpdate() {
    const elemHeight = this.refs.song.getBoundingClientRect();
    const offset = elemHeight.top - document.body.getBoundingClientRect().top;
    const height = this.refs.song.offsetHeight;
    this.props.getSongContainerPos(offset, height);
  }

  render() {
    return (
      <div ref="song">
        <Song song={this.props.song} />
      </div>
    );
  }
}

SongContainer.propTypes = {
  song: PropTypes.object.isRequired,
  fetchRandomSong: PropTypes.func.isRequired,
  getSongContainerPos: PropTypes.func.isRequired,
};

SongContainer.defaultProps = {
  song: {},
};

const mapStateToProps = ({ songs: { song } }) => {
  return {
    song,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomSong: () => dispatch(fetchRandomSong()),
    getSongContainerPos: (pos, height) => dispatch(getSongContainerPos(pos, height)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);
