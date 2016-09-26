import { ON_SCROLL, GET_SONG_CONTAINER_POS } from '../constants/actionTypes';

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
