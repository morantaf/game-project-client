import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div>
        {this.props.cards.map(card => {
          const image = card.cards[0].image;
          return <img src={image} />;
        })}

        <div>
          <button onClick={this.props.drawCard}>Draw</button>
        </div>
      </div>
    );
  }
}
