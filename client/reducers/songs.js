import {
  REQUEST_SONGS,
  RECEIVE_SONGS,
  REQUEST_SONG,
  RECEIVE_SONG,
  RECEIVE_SONG_UPDATE,
  REQUEST_SONG_UPDATE,
  SEARCH,
  TRIGGER_EDIT_MODE,
} from '../constants/actionTypes';

const initialState = {
  loading: true,
  songs: [],
  song: {},
  editMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_SONGS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_SONGS:
      return {
        ...state,
        songs: action.songs,
      };

    case REQUEST_SONG:
      return {
        ...state,
        loading: false,
      };

    case RECEIVE_SONG:
      return {
        ...state,
        song: action.song,

      };

    case REQUEST_SONG_UPDATE:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_SONG_UPDATE:
      return {
        ...state,
        loading: false,
        song: action.song,
        editMode: true,
      };

    case SEARCH:
      return {
        ...state,
        searchTerm: action.term,
      };

    case TRIGGER_EDIT_MODE:
      return {
        ...state,
        editMode: action.editMode,
      };

    default:
      return state;
  }
};
