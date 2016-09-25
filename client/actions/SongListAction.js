import { EXPAND_MENU } from '../constants/actionTypes';

export const expandMenu = (expanded) => {
  return {
    type: EXPAND_MENU,
    expanded,
  };
};
