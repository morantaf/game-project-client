import request from "superagent";

export const JWT = "JWT";
export const SIGN_UP = "SIGN_UP";

const baseUrl = "http://localhost:4000";

function loginUser(payload) {
  return {
    type: JWT,
    payload
  };
}

function newUser(payload) {
  return {
    type: SIGN_UP,
    payload
  };
}

export const signUp = data => dispatch => {
  console.log("this is", data);
  request
    .post(`${baseUrl}/signup`)
    .send(data)
    .then(res => {
      const action = newUser(res.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const login = data => (dispatch, getState) => {
  const state = getState();
  if (!state) {
    console.log("does not exist");
  } else {
    console.log("user", data);
    request
      .post(`${baseUrl}/login`)
      .send(data)
      .then(res => {
        const action = loginUser(res.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
