const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function(){
  it('should be a function', function(){
    const game = new Game();

    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function(){
    const game = new Game();

    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of current round', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
   const card2 = new Card(14, 'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?',
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    const game = new Game(round);

    expect(game.currentRound).to.deep.equal({});
  });
});