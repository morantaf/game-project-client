import request from "superagent";

//const baseUrl = "https://murmuring-plains-65052.herokuapp.com";
const baseUrl = "http://localhost:4000";

export const createRoom = data => (dispatch, getState) => {
  console.log("data ?", data);
  request
    .post(`${baseUrl}/rooms`)
    .send({ name: data })
    .then(response => {
      console.log("response body ?", response.body);
      dispatch(response.body);
    })
    .catch(console.error);
};
