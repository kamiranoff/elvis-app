import { ON_SCROLL, GET_SONG_CONTAINER_POS, SET_SPLASHSCREEN_VISIBILITY } from '../constants/actionTypes';

export const onScroll = (scroll) => {
  return {
    type: ON_SCROLL,
    scroll,
  };
};

export const getSongContainerPos = (pos, height) => {
  return {
    type: GET_SONG_CONTAINER_POS,
    pos,
    height,
  };
};

export const setSplashScreenVisibility = (visibility) => {
  return {
    type: SET_SPLASHSCREEN_VISIBILITY,
    visibility,
  };
};
