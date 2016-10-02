import callApi from '../util/apiCaller';

import {
  REQUEST_SONGS,
  RECEIVE_SONGS,
  REQUEST_SONG,
  RECEIVE_SONG,
  TRIGGER_EDIT_MODE,
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

const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs,
  };
};

export function fetchSongs(fields, filter) {
  let apiString = SONGS;
  if (fields) {
    apiString = `${SONGS}?fields=${fields}`;
  }
  if (fields && filter) {
    apiString = `${SONGS}?fields=${fields}&filter=${filter}`;
  }

  return dispatch => {
    dispatch(requestSongs());
    return callApi(apiString).then(songs => {
      dispatch(receiveSongs(songs));
    });
  };
}

export function fetchSong(songId) {
  return dispatch => {
    dispatch(requestSong());
    return callApi(`${SONGS}/${songId}`).then(song => {
      dispatch(receiveSong(song));
    });
  };
}

export function fetchRandomSong() {
  return dispatch => {
    dispatch(requestSong());
    return callApi(`${SONGS}/random`).then(song => {
      dispatch(receiveSong(song));
    });
  };
}

export const triggerEditMode = (editMode) => {
  return {
    type: TRIGGER_EDIT_MODE,
    editMode,
  };
};
