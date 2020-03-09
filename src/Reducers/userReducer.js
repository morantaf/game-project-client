import { JWT, SIGN_UP } from "../actions/userActions";

const initialState = {
  auth: "",
  createdUser: "",
  loggedInUser: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case JWT: {
      return {
        ...state,
        auth: action.payload.jwt,
        loggedInUser: action.payload.user
      };
    }
    case SIGN_UP: {
      return { ...state, createdUser: action.payload };
    }
    default: {
      return state;
    }
  }
}
