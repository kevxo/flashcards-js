const chai = require('chai');
const expect = chai.expect;
var assert = require('chai').assert;

const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Round = require('../src/Round')

describe('Round', function(){
  it('should be a function', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
   const card2 = new Card(14, 'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?',
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
   const card2 = new Card(14, 'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?',
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round).to.be.an.instanceOf(Round);
  });

  it('should return the deck in the round', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
     ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?',
     ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?',
     ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

     const deck = new Deck([card1, card2, card3]);

     const round = new Round(deck);

     expect(round.deck).to.deep.equal([card1, card2, card3])
  });

  it('should return the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
   const card2 = new Card(14, 'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?',
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    var expected = {
      id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    }
    expect(round.returnCurrentCard()).to.deep.equal(expected)
  });

  it('should return the initial count of turns and incorrect guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
   const card2 = new Card(14, 'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?',
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.turns).to.equal(0)
    expect(round.incorrectGuesses).to.deep.equal([])
  });

  it('should return feedback with turns', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
   const card2 = new Card(14, 'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?',
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.takeTurn('spleen')).to.equal('incorrect!')
    expect(round.turns).to.equal(2)
  });

  it('shoulf return incorrectGuesses and return one current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
   const card2 = new Card(14, 'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?',
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('sea otter')
    round.takeTurn('spleen')

    var expected = {
      id: 12,
      question: 'What is Travis\'s favorite stress reliever?',
      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      correctAnswer: 'playing with bubble wrap'
    }

    expect(round.incorrectGuesses).to.deep.equal([14])
    expect(round.returnCurrentCard()).to.deep.equal(expected)
  });

  it('should calculate the correct guesses and console the percent correct', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
   const card2 = new Card(14, 'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?',
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('sea otter')
    round.takeTurn('spleen')

    expect(round.calculatePercentCorrect()).to.equal(50)
    expect(round.endRound()).to.assert('**Round Over!** You answered 50% of the questions correctly!')
  });
});