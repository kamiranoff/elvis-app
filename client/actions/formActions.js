import callApi from '../util/apiCaller';

import {
  REQUEST_SONG_UPDATE,
  RECEIVE_SONG_UPDATE,
} from '../constants/actionTypes';

import { SONGS } from '../constants/api';

const requestSongUpdate = () => {
  return {
    type: REQUEST_SONG_UPDATE,
  };
};

const receiveSongUpdate = song => {
  return {
    type: RECEIVE_SONG_UPDATE,
    song,
  };
};

export function updateSong(song) {
  const songId = song.songId;
  return dispatch => {
    dispatch(requestSongUpdate());
    return callApi(`${SONGS}/${songId}`, 'PUT', song).then(updatedSong => {
      dispatch(receiveSongUpdate(updatedSong));
    });
  };
}
