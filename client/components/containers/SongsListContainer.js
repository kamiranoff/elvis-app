import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SongsList from '../presentationals/SongsList/SongsList';

import { fetchSongs, fetchSong } from '../../actions/SongActions';

class SongsListContainer extends Component {
  constructor(props) {
    super(props);
    this.props.fetchSongs();
  }

  render() {
    return (
      <SongsList songsTitle={this.props.songsTitle} fetchSong={this.props.fetchSong} />
    );
  }
}

SongsListContainer.propTypes = {
  songsTitle: PropTypes.array.isRequired,
  fetchSongs: PropTypes.func.isRequired,
  fetchSong: PropTypes.func.isRequired,
};

SongsListContainer.defaultProps = {
  songsTitle: [],
};

function mapStateToProps({ songs }) {
  return {
    songsTitle: songs.songsTitle,
  };
}

export default connect(mapStateToProps, { fetchSongs, fetchSong })(SongsListContainer);
