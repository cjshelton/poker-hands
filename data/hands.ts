import cards from './cards';

const hands = {
    'Royal Flush': {
        description: 'A Ten, Jack, Queen, King and Ace all of the same suit',
        cards: [cards['10D'], cards.JD, cards.QD, cards.KD, cards.AD],
    },
    'Straight Flush': {
        description: 'Five cards all of the same suit in a sequential order',
        cards: [
            cards['3C'],
            cards['4C'],
            cards['5C'],
            cards['6C'],
            cards['7C'],
        ],
    },
    'Four of a Kind': {
        description: 'Four cards all of the same rank',
        cards: [
            cards['3C'],
            cards['3S'],
            cards['3D'],
            cards['3H'],
            cards['10D'],
        ],
    },
    'Full House': {
        description:
            'Three cards of the same rank along with 2 cards of the same rank. In other words - a Three of a Kind and a Pair',
        cards: [
            cards['3C'],
            cards['3S'],
            cards['3D'],
            cards['JD'],
            cards['JC'],
        ],
    },
    Flush: {
        description:
            'Five cards all of the same suit but not in a sequential order',
        cards: [
            cards['3D'],
            cards['5D'],
            cards['8D'],
            cards['QD'],
            cards['AD'],
        ],
    },
    Straight: {
        description: 'Five cards in sequential order but not in the same suit',
        cards: [
            cards['3D'],
            cards['4C'],
            cards['5D'],
            cards['6S'],
            cards['7H'],
        ],
    },
    'Three of a Kind': {
        description: 'Three cards of the same rank',
        cards: [
            cards['3S'],
            cards['3D'],
            cards['3H'],
            cards['7C'],
            cards['JD'],
        ],
    },
    'Two Pairs': {
        description:
            'Two cards of the same rank along with two cards of a different rank. In other words - two different Pairs',
        cards: [
            cards['3C'],
            cards['3S'],
            cards['JD'],
            cards['JC'],
            cards['7C'],
        ],
    },
    Pair: {
        description: 'Two cards of the same rank',
        cards: [
            cards['3C'],
            cards['3S'],
            cards['7C'],
            cards['8S'],
            cards['KD'],
        ],
    },
    'High Card': {
        description:
            'The default hand for any player. The card with the highest rank',
        cards: [
            cards['3C'],
            cards['4C'],
            cards['8S'],
            cards['10D'],
            cards['QD'],
        ],
    },
};

export default hands;
