import { SET_PLAYLIST, SET_PLAYLIST_ITEM } from '../reducers/playlistReducer';
import { SET_ERROR } from '../reducers/errorReducer';
import { SET_NEXT_VIDEO } from '../reducers/nextVideoReducer';

export const setPlaylist = (items, playlistId) => ({
  type: SET_PLAYLIST,
  items,
  playlistId,
});

export const setPlaylistItem = selectedItem => ({
  type: SET_PLAYLIST_ITEM,
  selectedItem,
});

export const setError = error => ({
  type: SET_ERROR,
  error,
});

export const setNextVideo = (isNext, nextVideoData) => ({
  type: SET_NEXT_VIDEO,
  isNext,
  nextVideoData,
});
