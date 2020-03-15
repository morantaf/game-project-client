const initialState = {
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_ROOMS":
      return { ...state, list: payload };
    case "NEW_ROOM":
      return { ...state, list: [payload, ...state.list] };
    default:
      return state;
  }
};
