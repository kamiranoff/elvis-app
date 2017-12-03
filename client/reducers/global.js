import {
  EXPAND_MENU,
  ON_SCROLL,
  GET_SONG_CONTAINER_POS,
  SET_SPLASHSCREEN_VISIBILITY,
  ON_DOCUMENT_SIZE_CHANGED,
} from '../constants/actionTypes';

const initialState = {
  expanded: true,
  scroll: 0,
  splashScreenVisibility: true,
  documentHeight: '1000px',
  documentWidth: 1000,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_MENU:
      return {
        ...state,
        expanded: action.expanded,
      };

    case GET_SONG_CONTAINER_POS:
      return {
        ...state,
        songContainerPosition: action.pos,
        songContainerHeight: action.height,
      };

    case SET_SPLASHSCREEN_VISIBILITY:
      return {
        ...state,
        splashScreenVisibility: action.visibility,
      };

    case ON_DOCUMENT_SIZE_CHANGED:
      return {
        ...state,
        documentWidth: action.documentWidth,
        documentHeight: action.documentHeight,
      };

    case ON_SCROLL:
      return {
        ...state,
        srcoll: action.scroll,
      };

    default:
      return state;
  }
};
