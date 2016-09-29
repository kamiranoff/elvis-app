import {
  EXPAND_MENU,
  RESIZE,
  ON_SCROLL,
  GET_SONG_CONTAINER_POS,
  SET_SPLASHSCREEN_VISIBILITY,
} from '../constants/actionTypes';

const initialState = {
  expanded: true,
  scroll: 0,
  splashScreenVisibility: true,
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

    case RESIZE:
      return {
        ...state,
        width: action.width,
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
