const chai = require('chai')
const expect = chai.expect;
var assert = require("chai").assert;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function(){
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should have a player guess and card object', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
     ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnGuess).to.equal('pug');
    expect(turn.returnCard).to.equal(card);
  });

  it('should evaluate a guess', function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
     ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    assert.equal(turn.evaluateGuess(), false);
  });

  it('should evaluate a guess', function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
     ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    assert.equal(turn.evaluateGuess(), true);
  });

  it('should return feedback if the evaluated guess is true', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
     ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    assert.equal(turn.giveFeedback(), 'correct!')
  });

  it('should return feedback if the evaluated guess is false', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal',
     ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    assert.equal(turn.giveFeedback(), 'incorrect!')
  });
})