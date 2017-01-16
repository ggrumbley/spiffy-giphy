const initialState = {
  data: []
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_GIFS':
      return {
        ...state, data: action.payload
      }
    default:
      return state;
  }
}
