import { EXPAND_MENU } from '../constants/actionTypes';

export const expandMenu = (expanded) => {
  return dispatch => {
    dispatch({
      type: EXPAND_MENU,
      expanded,
    });
  };
};
