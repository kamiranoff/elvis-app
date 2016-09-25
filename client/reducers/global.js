import {
  EXPAND_MENU,
  RESIZE,
} from '../constants/actionTypes';

const initialState = {
  expanded: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_MENU:
      return {
        ...state,
        expanded: action.expanded,
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
