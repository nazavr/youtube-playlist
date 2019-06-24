import { combineReducers } from 'redux';

import playlist from './playlistReducer';
import error from './errorReducer';

const allReducers = combineReducers({
  playlist,
  error,
});

export default allReducers;
