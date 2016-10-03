import {
  GET_SONG_CONTAINER_POS,
  SET_SPLASHSCREEN_VISIBILITY,
  ON_DOCUMENT_SIZE_CHANGED,
} from '../constants/actionTypes';
import Helpers from '../util/Helpers';

export const setDocumentSize = (width, height) => {
  Helpers.getDocumentSize(document);
  return {
    type: ON_DOCUMENT_SIZE_CHANGED,
    documentWidth: width,
    documentHeight: height,
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
