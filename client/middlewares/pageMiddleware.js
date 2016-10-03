import Helpers from '../util/Helpers';
import { RECEIVE_SONG } from '../constants/actionTypes';
import { setDocumentSize } from '../actions/pageActions';

const pageMiddleware = store => next => action => {
  const { type } = action;
  if (type === RECEIVE_SONG) {
    store.dispatch(setDocumentSize('100%', '100vh'));
    setTimeout(() => {
      const documentSize = Helpers.getDocumentSize();
      store.dispatch(setDocumentSize(documentSize.width, `${documentSize.height}px`));
    }, 10);
  }

  return next(action);
};

export default pageMiddleware;
