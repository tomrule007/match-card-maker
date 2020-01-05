
import CardAngular from '@assets/card-angular.svg';
import CardGatsby from '@assets/card-gatsby.svg';
import CardJest from '@assets/card-jest.svg';
import CardNode from '@assets/card-node.svg';
import CardNpm from '@assets/card-npm.svg';
import CardReact from '@assets/card-react.svg';
import CardRedux from '@assets/card-redux.svg';
import CardVue from '@assets/card-vue.svg';
import CardFront from '@assets/front-card-js.svg';

export const retrieveCardsForBoard = async () => ({
  front: CardFront,
  cards: [
    CardAngular,
    CardGatsby,
    CardJest,
    CardNode,
    CardNpm,
    CardReact,
    CardRedux,
    CardVue,
  ],
});

export const something = '8';
