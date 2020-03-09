import React, { Component } from "react";
import { connect } from "react-redux";
import { getDeck, getCards } from "../actions/cardsActions";
import Cards from "./Cards";

export class CardsContainer extends Component {
  componentDidMount() {
    this.props.getDeck();
  }

  drawCard = numberOfCard => {
    this.props.getCards(this.props.cards.deck.deck_id, numberOfCard);
  };

  render() {
    return (
      <div>
        <Cards
          drawCard={() => this.drawCard(1)}
          cards={this.props.cards.list}
          draw4Card={() => this.drawCard(4)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = {
  getDeck,
  getCards
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
