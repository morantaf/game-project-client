import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../actions/cardsActions";
import Cards from "./Cards";

class CardsContainer extends Component {
  drawCard = numberOfCard => {
    this.props.getCards(numberOfCard);
  };

  render() {
    return (
      <div>
        <Cards
          drawCard={() => this.drawCard(1)}
          cards={this.props.cards.list}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = {
  getCards
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
