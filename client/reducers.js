/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import intl from './old.modules/Intl/IntlReducer';
import songs from './reducers/songs';
import global from './reducers/global';
import form from './reducers/form';

// Combine all reducers into one root reducer
export default combineReducers({
  intl,
  songs,
  form,
  global,
});
