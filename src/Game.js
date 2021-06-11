const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = {};
  }

  start(){
    const cards = prototypeQuestions.map(function(cardInfo){
      let card = new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer);

      return card;
    });


    const deck = new Deck(cards);
    this.currentRound = new Round(deck)
    const round = this.currentRound;

    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;