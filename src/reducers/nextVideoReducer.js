export const SET_NEXT_VIDEO = 'SET_NEXT_VIDEO';

const initialState = {
  isNext: false,
  nextVideoData: {},
};

const nextVideo = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEXT_VIDEO:
      return Object.assign({}, state, {
        isNext: action.isNext,
        nextVideoData: action.nextVideoData,
      });
    default:
      return state;
  }
};

export default nextVideo;
