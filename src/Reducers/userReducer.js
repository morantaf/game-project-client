import { JWT, SIGN_UP } from "../actions";

const initialState = {
  auth: "",
  createdUser: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case JWT: {
      return { ...state, auth: action.payload };
    }
    case SIGN_UP: {
      return { ...state, createdUser: action.payload };
    }
    default: {
      return state;
    }
  }
}
