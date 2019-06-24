export const SET_PLAYLIST = 'SET_PLAYLIST';
export const SET_PLAYLIST_ITEM = 'SET_PLAYLIST_ITEM';

const initialState = {
  items: [],
  playlistId: '',
  selectedItem: {},
};

const playlist = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return Object.assign({}, state, {
        items: action.items,
        playlistId: action.playlistId,
      });
    case SET_PLAYLIST_ITEM:
      return Object.assign({}, state, {
        selectedItem: action.selectedItem,
      });
    default:
      return state;
  }
};

export default playlist;
