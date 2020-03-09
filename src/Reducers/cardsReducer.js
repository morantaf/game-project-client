const initialState = {
  deck: {},
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_DECK":
      return { ...state, deck: payload };
    case "FETCH_CARDS":
      return { ...state, list: [...state.list, payload] };
    default:
      return state;
  }
};
