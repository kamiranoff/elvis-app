import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SongsList from '../presentationals/SongsList/SongsList';

import { fetchSongs, fetchSong } from '../../actions/SongActions';
import { expandMenu } from '../../actions/SongListAction';

class SongsListContainer extends Component {
  constructor(props) {
    super(props);
    this.props.fetchSongs('title');
    this.expandSongList = this.expandSongList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  expandSongList() {
    this.props.expandMenu(!this.props.expanded);
  }

  handleClick(titleId) {
    this.props.fetchSong(titleId);
  }

  render() {
    return (
      <SongsList
        songs={this.props.songs}
        expandSongList={this.expandSongList}
        expanded={this.props.expanded}
        handleClick={this.handleClick}
        documentHeight={this.props.documentHeight}
      />
    );
  }
}

SongsListContainer.propTypes = {
  songs: PropTypes.array.isRequired,
  fetchSongs: PropTypes.func.isRequired,
  fetchSong: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  expandMenu: PropTypes.func.isRequired,
  documentHeight: PropTypes.string.isRequired,
};

SongsListContainer.defaultProps = {
  songs: [],
};

const mapStateToProps = ({ songs: { songs }, global: { expanded, documentHeight } }) => {
  return {
    songs,
    expanded,
    documentHeight,
  };
};

export default connect(mapStateToProps,
  {
    fetchSongs,
    fetchSong,
    expandMenu,
  })(SongsListContainer);
