import React, { Component } from "react";
import { connect } from "react-redux";
import CardsContainer from "./CardsContainer";
import { getDeck, startGame } from "../actions/cardsActions";

export class Room extends Component {
  componentDidMount() {
    this.props.getDeck(this.props.match.params.roomId);
  }

  startGame = () => {
    this.props.startGame();
  };

  render() {
    return (
      <div>
        <CardsContainer />

        <button onClick={this.props.startGame}>Start the game</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { getDeck, startGame };

export default connect(mapStateToProps, mapDispatchToProps)(Room);
