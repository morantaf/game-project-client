import request from "superagent";

//const baseUrl = "https://murmuring-plains-65052.herokuapp.com";
const baseUrl = "http://localhost:4000";

export const fetchDeck = payload => ({
  type: "FETCH_DECK",
  payload
});

export const fetchCards = payload => ({
  type: "FETCH_CARDS",
  payload
});

export const getDeck = roomId => (dispatch, GetState) => {
  console.log("room id ?", roomId);
  request.get(`${baseUrl}/rooms/${roomId}`).then(response => {
    console.log("response getDeck ?", response.body);
    const action = fetchDeck(response.body);

    dispatch(action);
  });
};

export const getCards = numberOfCard => (dispatch, getState) => {
  const state = getState();
  const deckId = state.cards.deck;
  request
    .get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCard}`
    )
    .then(response => {
      const action = fetchCards(response.body);
      dispatch(action);
    });
};

export const startGame = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const deckId = state.cards.deck;
    await request.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);

    const get4Cards = await request.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`
    );
    console.log("get4cards", get4Cards.body);

    const action = fetchCards(get4Cards.body);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
