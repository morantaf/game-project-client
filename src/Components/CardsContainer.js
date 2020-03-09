import React, { Component } from "react";
import { connect } from "react-redux";
import { getDeck, getCard } from "../actions/cardsActions";
import Cards from "./Cards";

export class CardsContainer extends Component {
  componentDidMount() {
    this.props.getDeck();
  }

  drawCard = () => {
    this.props.getCard(this.props.cards.deck.deck_id);
  };

  render() {
    return (
      <div>
        <Cards drawCard={this.drawCard} cards={this.props.cards.list} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = {
  getDeck,
  getCard
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
