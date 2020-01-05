import React, { Component } from 'react';
import { retrieveCardsForBoard } from '@lib/utils';

import CardElement from '@presentational/CardElement';

class BoardContainer extends Component {
  constructor() {
    super();

    this.state = {
      cardsLoaded: false,
      frontCard: null,
      backCards: null,
      // boardSize: null,
    };
  }

  componentDidMount() {
    retrieveCardsForBoard()
      .then((cardData) => {
        if (cardData) {
          this.setState({
            cardsLoaded: true,
            frontCard: cardData.front,
            backCards: cardData.cards,
            // boardSize: cardData.backCards.length * 2,
          });
        }
      });
  }

  render() {
    const { cardsLoaded, frontCard, backCards } = this.state;

    if (cardsLoaded) {
      return (
        <div>
          <CardElement flip={false} front={frontCard} back={backCards[0]} />
          <CardElement flip={false} front={frontCard} back={backCards[1]} />
          <CardElement flip front={frontCard} back={backCards[2]} />
          <CardElement flip={false} front={frontCard} back={backCards[3]} />
          <CardElement flip front={frontCard} back={backCards[4]} />
          <CardElement flip={false} front={frontCard} back={backCards[5]} />
        </div>
      );
    }

    return (
      <div>
        Waiting for things to load!
      </div>
    );
  }
}

export default BoardContainer;
