export const SET_ERROR = 'SET_ERROR';

const initialState = {
  isError: null,
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return Object.assign({}, state, {
        isError: action.error,
      });
    default:
      return state;
  }
};

export default error;
