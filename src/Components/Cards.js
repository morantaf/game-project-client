import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div>
        {this.props.cards.map(card => {
          return card.cards.map(card => <img src={card.image} />);
        })}

        <div>
          <button onClick={this.props.drawCard}>Draw</button>
          <button onClick={this.props.draw4Card}>Start the game</button>
        </div>
      </div>
    );
  }
}
