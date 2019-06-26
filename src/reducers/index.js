import { combineReducers } from 'redux';

import playlist from './playlistReducer';
import error from './errorReducer';
import nextVideo from './nextVideoReducer';

const allReducers = combineReducers({
  playlist,
  error,
  nextVideo,
});

export default allReducers;
