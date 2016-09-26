import {
  REQUEST_SONGS,
  RECEIVE_SONGS,
  REQUEST_SONG,
  RECEIVE_SONG,
  SEARCH,
} from '../constants/actionTypes';

const initialState = {
  loading: true,
  songs: [],
  song: {},
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
        loading: true,
      };

    case RECEIVE_SONG:
      return {
        ...state,
        song: action.song,
      };

    case SEARCH:
      return {
        ...state,
        searchTerm: action.term,
      };

    default:
      return state;
  }
};
