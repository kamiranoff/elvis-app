import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SongsList from '../presentationals/SongsList/SongsList';

import { fetchSongs, fetchSong } from '../../actions/SongActions';

class SongsListContainer extends Component {
  constructor(props) {
    super(props);
    this.props.fetchSongs();
    this.state = {
      expanded: true,
    };

    this.expandSongList = this.expandSongList.bind(this);
  }

  expandSongList() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    return (
      <SongsList
        songsTitle={this.props.songsTitle}
        fetchSong={this.props.fetchSong}
        expandSongList={this.expandSongList}
        expanded={this.state.expanded}
      />
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
