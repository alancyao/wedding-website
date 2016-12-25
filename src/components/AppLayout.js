import React, { Component } from 'react';
import { title, cards } from '../content/content';
import Header from './header/Header';

class AppLayout extends Component {
  render() {
    const scrollingCards = cards.map(card => (
      <div key={card.id}>
        {card.parallaxImage}
        {card.card}
      </div>
    ));

    return (
      <div>
        <Header title={title} />
        {scrollingCards}
      </div>
    );
  }
}

export default AppLayout;
