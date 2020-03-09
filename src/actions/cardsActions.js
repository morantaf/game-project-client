import request from "superagent";

export const fetchDeck = payload => ({
  type: "FETCH_DECK",
  payload
});

export const fetchCard = payload => ({
  type: "FETCH_CARD",
  payload
});

export const getDeck = () => (dispatch, GetState) => {
  request
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => {
      const action = fetchDeck(response.body);

      dispatch(action);
    });
};

export const getCard = deckId => (dispatch, getState) => {
  request
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => {
      const action = fetchCard(response.body);
      dispatch(action);
    });
};
