import {
  REQUEST_SONGS,
  RECEIVE_SONGS,
  REQUEST_SONG,
  RECEIVE_SONG,
  RESIZE,
} from '../constants/actionTypes';

const initialState = {
  loading: true,
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
        songsTitle: action.data,
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

    case RESIZE:
      return {
        ...state,
        width: action.width,
      };

    default:
      return state;
  }
};
