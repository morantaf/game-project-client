import request from "superagent";

export const fetchDeck = payload => ({
  type: "FETCH_DECK",
  payload
});

export const fetchCards = payload => ({
  type: "FETCH_CARDS",
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

export const getCards = (deckId, numberOfCard) => (dispatch, getState) => {
  request
    .get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCard}`
    )
    .then(response => {
      const action = fetchCards(response.body);
      dispatch(action);
    });
};
