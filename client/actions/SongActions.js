import callApi from '../util/apiCaller';

import {
  REQUEST_SONGS,
  RECEIVE_SONGS,
  REQUEST_SONG,
  RECEIVE_SONG,
} from '../constants/actionTypes';
import { SONGS } from '../constants/api';

const requestSong = () => {
  return {
    type: REQUEST_SONG,
  };
};

const receiveSong = song => {
  return {
    type: RECEIVE_SONG,
    song,
  };
};

const requestSongs = () => {
  return {
    type: REQUEST_SONGS,
  };
};

const receiveSongs = data => {
  return {
    type: RECEIVE_SONGS,
    data,
  };
};

export function fetchSongs() {
  return dispatch => {
    dispatch(requestSongs());
    return callApi(SONGS).then(res => {
      dispatch(receiveSongs(res.songsTitle));
    });
  };
}

export function fetchSong(songId) {
  return dispatch => {
    dispatch(requestSong());
    return callApi(`${SONGS}/${songId}`).then(res => {
      dispatch(receiveSong(res.song));
    });
  };
}
