import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchRandomSong, triggerEditMode } from '../../actions/SongActions';
import { getSongContainerPos } from '../../actions/pageActions';

import Song from '../presentationals/Song/Song';

class SongContainer extends Component {
  constructor(props) {
    super(props);
    props.fetchRandomSong();
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  componentDidUpdate() {
    const elemHeight = this.refs.song.getBoundingClientRect();
    const offset = elemHeight.top - document.body.getBoundingClientRect().top;
    const height = this.refs.song.offsetHeight;
    this.props.getSongContainerPos(offset, height);
  }

  handleUpdateClick(editMode) {
    this.props.triggerEditMode(editMode);
  }

  render() {
    return (
      <div ref="song">
        <Song
          song={this.props.song}
          editMode={this.props.editMode}
          handleUpdateClick={this.handleUpdateClick}
        />
      </div>
    );
  }
}

SongContainer.propTypes = {
  song: PropTypes.object.isRequired,
  fetchRandomSong: PropTypes.func.isRequired,
  getSongContainerPos: PropTypes.func.isRequired,
  triggerEditMode: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
};

SongContainer.defaultProps = {
  song: {},
};

const mapStateToProps = ({ songs: { song, editMode } }) => {
  return {
    song,
    editMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomSong: () => dispatch(fetchRandomSong()),
    getSongContainerPos: (pos, height) => dispatch(getSongContainerPos(pos, height)),
    triggerEditMode: (titleId) => dispatch(triggerEditMode(titleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);
