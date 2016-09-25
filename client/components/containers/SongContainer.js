import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchRandomSong } from '../../actions/SongActions';

import Song from '../presentationals/Song/Song';

class SongContainer extends Component {
  constructor(props) {
    super(props);
    props.fetchRandomSong();
  }

  render() {
    return (
      <Song song={this.props.song} />

    );
  }
}

SongContainer.propTypes = {
  song: PropTypes.object.isRequired,
  fetchRandomSong: PropTypes.func.isRequired,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);
