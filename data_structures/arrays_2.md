# Arrays level 2

This set of challenges deals with nested arrays, and techniques for looping over multiple arrays.

### !challenge

* type: code-snippet
* language: javascript
* id: de0a4b25-8e5d-4419-a12d-3e0d29e89c81
* title: Nested Arrays

### !question

Given the following array of arrays:

```javascript
var trilogies = [
	["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
	["The Empire Strikes Back","Return of the Jedi","A New Hope"],
	["Back to the Future", "Back to the Future II", "Back to the Future III"],
	["The Hunger Games", "Catching Fire", "Mockingjay"],
	["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
	["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
	["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe","Life, the Universe and Everything","So Long, and Thanks for All the Fish","Mostly Harmless","And Another Thing..."]
]

```

Write several functions:

* `allMovies`: Write a loop that `console.log`s all movies
* `firstMovies`: Write a loop that `console.log`s only the first movie in the trilogy
* `lastMovies`: Write a loop that `console.log`s only the last movie in the trilogy
* `oddMovies`: Write a loop that `console.log`s only odd-numbered movies (the first, and third, etc)

### !end-question

### !placeholder

var trilogies = [
	["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
	["The Empire Strikes Back","Return of the Jedi","A New Hope"],
	["Back to the Future", "Back to the Future II", "Back to the Future III"],
	["The Hunger Games", "Catching Fire", "Mockingjay"],
	["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
	["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
	["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe","Life, the Universe and Everything","So Long, and Thanks for All the Fish","Mostly Harmless","And Another Thing..."]
];

function allMovies() {

}

function firstMovies() {

}

function lastMovies() {

}

function oddMovies() {

}


### !end-placeholder

### !tests

```js
var sinon = require('sinon');

let consoleCount = 0;
describe('Movies Functions: ', function() {

  before(function () {
    this.cStub = sinon.stub(console, "log");
    allMovies();
    firstMovies();
    lastMovies();
    oddMovies();
  });
  after(function () {
    this.cStub.restore();
  });

  it("allMovies logs out all movies", function() {
    for (var i = 0; i < trilogies.length; i++) {
      for (var m = 0; m < trilogies[i].length; m++) {
        expect(console.log.getCall(consoleCount).args[0], `${consoleCount}th call is incorrect`).to.eq(trilogies[i][m])
        consoleCount++;
      }
    }
  })


  it("firstMovies logs out the only the first movie in the trilogy", function() {
    for (var i = 0; i < trilogies.length; i++) {
      expect(console.log.getCall(consoleCount).args[0], `${consoleCount}th call is incorrect`).to.eq(trilogies[i][0])
      consoleCount++;
    }
  })

  it("lastMovies logs out only the last movie in the trilogy", function() {
    for (var i = 0; i < trilogies.length; i++) {
      expect(console.log.getCall(consoleCount).args[0], `${consoleCount}th call is incorrect`).to.eq(trilogies[i][trilogies[i].length-1])
      consoleCount++;
    }
  })

  it("oddMovies logs out only the odd-numbered movies", function() {
    for (var i = 0; i < trilogies.length; i++) {
      for (var m = 0; m < trilogies[i].length; m++) {
        if (m % 2 !== 0) {
          expect(console.log.getCall(consoleCount).args[0], `${consoleCount}th call is incorrect`).to.eq(trilogies[i][m])
          consoleCount++;
        }
      }
    }
  })
})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 1ef02d8c-850f-48ab-a6dd-0b936648c68a
* title: Processing Arrays in Arrays

### !question

* Define a function named `flatten` that takes in one argument.
  * `arr` (array of arrays)
* Return a new array that combines all of elements of each inner array. For example, given `[[1], [2, 3], [4]]`, then return `[1, 2, 3, 4]`.

Tips:
* You only need to flatten one level deep.
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat


### !end-question

### !placeholder

function flatten(input) {

}

### !end-placeholder

### !tests

describe('flatten', function() {
  it('flattens an array of arrays', function() {
    expect(flatten([])).to.deep.eq([]);
    expect(flatten([[1], [2], [3], [4]])).to.deep.eq([1, 2, 3, 4]);
    expect(flatten([[1], [2, 3], [4]])).to.deep.eq([1, 2, 3, 4]);
    expect(flatten([[1], [2], [3, [[4]]]])).to.deep.eq([1, 2, 3, [[4]]]);
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: a4c9bec4-62f3-4c6f-8385-ca16e7247e93
* title: Deck of Cards

### !question

## Deck of Cards
Write a function called `createDeck` that creates a deck of cards, which takes two inputs:
* `suits` - an array of strings containing the card suits
* `faces` - an array of strings and numbers containing the card faces

* Using two for loops, loop through the input arrays.
* Create a string using the two elements that represents the cards, like this: "Ace of Spades"
* Push that element into the deck

Your deck by the end should look something like this:
```js
var deck = ["Ace of Hearts", "2 of Hearts" ...etc ];
```

It's not critical that you order them properly, because once you have a dynamically created array of cards...

#### Bonus

Shuffle your deck! Move cards around until there aren't three cards of the same suit in a row. Check out splice(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) for this.


### !end-question

### !placeholder

var suits = ["Hearts", "Diamonds", "Spades", "Clovers"];
var faces = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "Kings"]

function createDeck(suits, faces) {
// return a complete deck of cards
}

### !end-placeholder

### !tests

var allCards = [];
var suits = ["Hearts", "Diamonds", "Spades", "Clovers"];
var faces = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "Kings", "Joker"];
describe("createDeck", function() {
	before(function() {
		for(var suit=0; suit < suits.length; suit++) {
		    for(var face=0; face < faces.length-1; face++) {
		        allCards.push(faces[face] + " of " + suits[suit]);
		    }
		}
	})
	it("dynamically creates a deck of cards from suits and faces", function() {
    var deck = createDeck(suits, faces);
		for (var i=0; i<allCards.length; i++) {
      expect(deck.indexOf(allCards[i])).to.not.equal(-1);
	  }
	})
})

### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 62647411-bf9a-40ff-8a62-cc683719536b
* title: Nested Array Access + Algorithm Challenge

### !question

## Bonus Nested Arrays Challenge: Algorithms

If you can't get this one, move on, but give it a shot!

The following array of arrays represent tic tac toe boards. Write an algorithm inside of a function called `determineWinner` that determines the winner for any of these:

```javascript
var gameBoard1 = [
	["x", "o", "x"],
	["x", "o", "o"],
	["x", "x", "o"]
] // winner "x"

var gameBoard2 = [
	["o", "o", "x"],
	["x", "o", "x"],
	["x", "x", "o"]
] // winner "x"

var gameBoard3 = [
	["x", "x", "x"],
	["o", "x", "o"],
	["o", "x", "o"]
] // winner "x"
```

Return the winner's character: `"x"` or `"o"`.

This problem is best approached in stages, checking for horizontal, then vertical, then diagonal win conditions. Finally, once you've written all of them, check over your code and try to generalize the problem, clean up your code until there are the fewer lines of code, and make sure there isn't any repeated code (Don't Repeat Yourself).

### !end-question

### !placeholder

var gameBoard1 = [
	["x", "o", "x"],
	["x", "o", "o"],
	["x", "x", "o"]
] // winner "x"

var gameBoard2 = [
	["x", "o", "o"],
	["x", "x", "o"],
	["o", "x", "x"]
] // winner "o"

var gameBoard3 = [
	["x", "x", "x"],
	["o", "x", "o"],
	["o", "x", "o"]
] // winner "x"

function determineWinner(board) {
  if (false) {
    return "x"
  }
  if (true) {
    return "o"
  }
}

### !end-placeholder

### !tests

```js

var verticalWin = [
	["x", "o", "o"],
	["x", "x", "o"],
	["o", "x", "o"]
] // winner "o"

var horizontalWin = [
	["x", "o", "x"],
	["o", "x", "o"],
	["o", "o", "o"]
] // winner "o"

var diagonalWin = [
	["x", "x", "o"],
	["x", "o", "x"],
	["o", "x", "o"]
] // winner "o"

describe('determineWinner', function() {

  it("returns x or o when a winner is found horizontally", function() {
    expect(determineWinner(gameBoard3), "gameBoard3's winner is x").to.eq("x")
    expect(determineWinner(horizontalWin), "Another test case for horizontal winner detection failed").to.eq("o")
  })

  it("returns x or o when a winner is found vertically", function() {
    expect(determineWinner(gameBoard1), "gameBoard1's winner is x").to.eq("x")
    expect(determineWinner(verticalWin), "Another test case for vertical winner detection failed").to.eq("o")
  })


  it("returns x or o when a winner is found diagonally", function() {
    expect(determineWinner(gameBoard2), "gameBoard2's winner is x").to.eq("x")
    expect(determineWinner(diagonalWin), "Another test case for diagonal winner detection failed").to.eq("o")
  })

})
```
### !end-tests

### !end-challenge
