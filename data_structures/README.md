# Let's Practice: Accessing Complex Data Structures

Below are many situations where you might need to manipulate nested objects and arrays. Accessing deeply nested objects and arrays is very common in Web Development, because data is often carried in a format called **JSON**: JavaScript Object Notation. Because of this, you'll often have to access objects within arrays within other objects, et cetera.

## Challenge 1: Array Access

### !challenge

* type: code-snippet
* language: javascript
* id: 3b5ccc12-9f00-4b2d-b987-b0509611d0e5
* title: Array Access

### !question

**Using the following array:**

```
var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];
```

Write create a variable that outputs the following:

* `"The Hobbit"` in a variable called `hobbit`

* `"The Universe in a Nutshell"` in a variable called `universe`

### !end-question

### !placeholder

var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];

var hobbit = null;
var universe = null;

### !end-placeholder

### !tests

```js
describe('array access', function() {

    it("has a hobbit variable", function() {
      expect(hobbit, "value is incorrect").to.eq("The Hobbit")
    });

    it("has a universe variable", function() {
      expect(universe, "value is incorrect").to.eq("The Universe in a Nutshell")
    });

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 849d92b9-85db-4367-bda8-b048855ce7c7
* title: Loop Over an Array

### !question


Given the following array:
```javascript
var songs = ["Call Me Maybe", "Pacabel's Cannon in D", "Smells Like Teen Spirit"]
```

Write a function called `printSongs` with a loop that `console.log`s the following:  

```
"Call Me Maybe"
"Pacabel's Cannon in D"
"Smells Like Teen Spirit"
```

### !end-question

### !placeholder

var songs = ["Call Me Maybe", "Pacabel's Cannon in D", "Smells Like Teen Spirit"];

function printSongs() {
  //your code here
}

### !end-placeholder

### !tests

```js
var sinon = require('sinon');

describe('Loop over an array', function() {
    before(function () {
      this.cStub = sinon.stub(console, "log");
      printSongs();
    });
    after(function () {
      this.cStub.restore();
    });

    it("Prints out the entire array", function() {
      expect(console.log.getCall(0).args[0], "First call is incorrect").to.eq("Call Me Maybe")
      expect(console.log.getCall(1).args[0], "Second call is incorrect").to.eq("Pacabel's Cannon in D")
      expect(console.log.getCall(2).args[0], "Third call is incorrect").to.eq("Smells Like Teen Spirit")
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: e926b047-f7fc-4f83-b5ea-75ed9be1217c
* title: Zip Two Arrays

### !question


Write a function called `carsAndRiders` loop that `console.log`s the following:  

```
"Kelly drives a Chevy Tahoe"
"Steve drives a Ford Fiesta"
"Georgio drives a Toyota Yaris"
"Fabio drives a Honda Fit"
```

Given the following arrays:

### !end-question

### !placeholder

var cars = ["Chevy Tahoe", "Ford Fiesta", "Toyota Yaris", "Honda Fit"];

var riders = ["Kelly", "Steve", "Georgio", "Fabio"];

function carsAndRiders(cars, riders) {

}

### !end-placeholder

### !tests

```js
var sinon = require('sinon');
describe('Zip Arrays', function() {
  before(function () {
    this.cStub = sinon.stub(console, "log");
    carsAndRiders(cars, riders);
  });
  after(function () {
    this.cStub.restore();
  });

  it("Prints out the arrays together", function() {
    expect(console.log.getCall(0).args[0], "First call is incorrect").to.eq("Kelly drives a Chevy Tahoe")
    expect(console.log.getCall(1).args[0], "Second call is incorrect").to.eq("Steve drives a Ford Fiesta")
    expect(console.log.getCall(2).args[0], "Third call is incorrect").to.eq("Georgio drives a Toyota Yaris")
    expect(console.log.getCall(3).args[0], "Fourth call is incorrect").to.eq("Fabio drives a Honda Fit")
  })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: de0a4b25-8e5d-4419-a12d-3e0d29e89c81
* title: Nested Arrays

### !question

## Challenge 2: Nested Arrays

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

### !challenge

* type: code-snippet
* language: javascript
* id: 5aa0341d-0a64-4f3f-9b51-0875a032286d
* title: Validate Data and Access an Object

### !question

## Challenge 3: Object Access

Below you have three users. Write a function that validates the users have all of the data they're supposed to have:

1. The email address contains an "@" symbol.
2. The phone number is valid (###-###-####).
3. The user has a first and last name (has at least two names).
3. The user has an address that starts with a number, then has a street name made up of 1 or more words, then a comma, then a city made up of 1 or more words

If any of those aren't valid, return `false`.

```javascript
var user = {
	name : "Jenny Appleseed",
	phone : "555-656-2323",
	email: "j.appleseed@appleseedanddaughters.com",
	address : "123 Main street, anytown USA"
}

var user2 = {
	name : "Kerri Appleseed",
	phone : "555-456-3344",
	email: "k.appleseedappleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

var user3 = {
	name : "Sally Appleseed",
	phone : "555-34-663",
	email: "s.appleseed@appleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

var user4 = {
	name : "Appleseed",
	phone : "555-344-6635",
	email: "s.appleseed@appleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

```

### !end-question

### !placeholder

function validateUser() {

}

### !end-placeholder

### !tests

```js

var user = {
	name : "Jenny Appleseed",
	phone : "555-656-2323",
	email: "j.appleseed@appleseedanddaughters.com",
	address : "123 Main street, anytown USA"
}

var user2 = {
	name : "Kerri Appleseed",
	phone : "555-456-3344",
	email: "k.appleseedappleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

var user3 = {
	name : "Sally Appleseed",
	phone : "555-34-663",
	email: "s.appleseed@appleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

var user4 = {
	name : "Appleseed",
	phone : "555-34-663",
	email: "s.appleseed@appleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

describe('validateUser', function() {

    it("returns true when given a valid user", function() {
      expect(validateUser(user), "Didn't return true for a valid user").to.eq(true)
    })

    it("returns false when given a user with an invalid email address", function() {
      expect(validateUser(user2), "email address was incorrect").to.eq(false)
    })

    it("returns false when given a user with an invalid phone number", function() {
      expect(validateUser(user3), "Phone number was incorrect").to.eq(false)
    })

    it("returns false when given a user with an invalid name", function() {
      expect(validateUser(user4), "name was incorrect").to.eq(false)
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 49a73097-5c3e-4b90-a4b0-5da79c146ef0
* title: Use Objects as Hash Maps to quickly check for a value, use `delete`

### !question

# Challenge 4: Objects as Hash Maps

The following objects represent hands in "go fish". The keys are cards that are present in the card. Write a function that looks in the hands for the existence of a card. Remember, in Go Fish, one player says to the other- "Got any 3s?" and the player has to give up any threes, regardless of suit. The function should return false if the is not present, and return true *and delete the property from the card* if it is found (representing the loss of the card.)

```javascript
var fish_hand1 = {
	"K_spades" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"3_spades" : true,
	"3_clubs" : true
}

var fish_hand2 = {
	"K_spades" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"3_spades" : true,
	"3_clubs" : true
}

var fish_hand3 = {
	"K_spades" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"3_spades" : true,
	"3_clubs" : true
}
```

### !end-question

### !placeholder

function goFish(card, hand) {

}

### !end-placeholder

### !tests

```js

var fish_hand = {
	"K_hearts" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"4_spades" : true,
	"3_clubs" : true
}

describe('goFish', function() {

    it("returns true and removes the card from the hand when given a 4 and when given a hand with 4 present", function() {
      expect(goFish("4", fish_hand)).to.eq(true)
      expect(fish_hand["4_spades"]).to.be.undefined;
    })

    it("returns false when given a 5 and when given a hand with 5 present", function() {
      expect(goFish("5", fish_hand)).to.eq(false)
    })

    it("returns true and removes the card from the hand when given a K and when given a hand with K present", function() {
      expect(goFish("K", fish_hand)).to.eq(true)
      expect(fish_hand["K_hearts"]).to.be.undefined;
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 765a2bfe-f02a-4b9a-9d39-023900bae8a6
* title: Nested Object Access

### !question

## Challenge 5: Nested Object Access
Given the following object:

```javascript

var library = {
	city: "San Francisco",
	name: "SF Public",
	bestBook: {
			title: "JavaScript for Dummies",
			company: {
				name: "BookCo",
				employees: {
					writers: [
						{
							firstName: "Bob",
							lastName: "Marley",
						},
            {
              firstName: "Jerry",
              lastName: "Garcia"
            }
					],
					publisher: {
						firstName: "Bob",
						lastName: "Weir"
					}
				}
			}
		}
	}

```

Inside of the `statementPractice` function, write statements that `console.log`s the following:

 1. The city of the library

 2. The name of the library

 3. The bestBook in the library

 4. The title of the bestBook in the library

 5. The name of the company of the bestBook in the library

 6. The first name of the publisher of the company of the bestBook in the library

 7. The last name of the second writer of the bestBook in the library

### !end-question

### !placeholder

var library = {
	city: "San Francisco",
	name: "SF Public",
	bestBook: {
			title: "JavaScript for Dummies",
			company: {
				name: "BookCo",
				employees: {
					writers: [
						{
							firstName: "Bob",
							lastName: "Marley",
						},
            {
              firstName: "Jerry",
              lastName: "Garcia"
            }
					],
					publisher: {
						firstName: "Bob",
						lastName: "Weir"
					}
				}
			}
		}
	}

function statementPractice(library) {

}


### !end-placeholder

### !tests

```js
var sinon = require('sinon');
describe('Nested Object Access', function() {

  before(function () {
    this.cStub = sinon.stub(console, "log");
    statementPractice(library);
  });
  after(function () {
    this.cStub.restore();
  });

  it("Logs the city of the library", function() {
    expect(console.log.getCall(0).args[0], "First call is incorrect").to.eq("San Francisco");
  })

  it("Logs the name of the library", function() {
    expect(console.log.getCall(1).args[0], "Second call is incorrect").to.eq("SF Public");
  })

  it("Logs the bestBook in the library", function() {
    expect(console.log.getCall(2).args[0], "Third call is incorrect").to.deep.eq({
  			title: "JavaScript for Dummies",
  			company: {
  				name: "BookCo",
  				employees: {
  					writers: [
  						{
  							firstName: "Bob",
  							lastName: "Marley",
  						},
              {
                firstName: "Jerry",
                lastName: "Garcia"
              }
  					],
  					publisher: {
  						firstName: "Bob",
  						lastName: "Weir"
  					}
  				}
  			}
  		});
  })

  it("Logs title of the bestBook in the library", function() {
    expect(console.log.getCall(3).args[0], "Fourth call is incorrect").to.eq("JavaScript for Dummies");
  })

  it("Logs the name of the company of the bestBook in the library", function() {
    expect(console.log.getCall(4).args[0], "Fifth call is incorrect").to.eq("BookCo");
  })

  it("Logs the first name of the publisher of the company of the bestBook in the library", function() {
    expect(console.log.getCall(5).args[0], "Sixth call is incorrect").to.eq("Bob");
  })

  it("Logs the second writer's last name of the bestBook in the library", function() {
    expect(console.log.getCall(6).args[0], "Seventh call is incorrect").to.eq("Garcia");
  })

})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* language: javascript
* id: 6e060852-3864-4804-87a9-a98d09bbd48c
* title: Data Structures:Arrays, Data Structures:Objects, Abstract Data Modeling

### !question

## Challenge 6: Arrays in Objects

Below is a Model of a recipe:

```javascript
var cremeBrulee = {
	ingredients: [
		"eggs",
		"heavy cream",
		"vanilla pods"
	],
	cookware: [
		"mixing bowl",
		"whisk",
		"ramekins",
		"oven",
		"measuring cups"
	]
}
```

Write statements that do the following:

 1. Write a function called `getIngredients(recipe)`. Return our Crème Brûlée's ingredients like so:
 ```javascript
"Ingredients: eggs, heavy cream, vanilla pods"
 ```

 2. Write a function called `getCookwares(recipe)`. Return our Crème Brûlée's cookwares like so:
 ```javascript
"Cookware Required: mixing bowl, whisk, ramekins, oven, measuring cups"
 ```

 3. Write a function called `getFirstIngredient(recipe)`. Return the first item in our Crème Brûlée's ingredients like so:
 ```javascript
 "Start with: eggs"
 ```

 4. Write a function called `getNthCookware(recipe, n)`. Return the cookware item at the index of `n` in our Crème Brûlée's cookwares like so:

 ```javascript
 getNthCookware(cremeBrulee, 3)
 > "ramekins"
 ```

 5. Write a function called `addIngredient(recipe, ingredient)`. Adds an ingredient to our object like so: adding sugar to our Crème Brûlée's ingredients:
 ```javascript
 addIngredient(cremeBrulee, "sugar")
 [ "eggs", "heavy cream", "vanilla pods", "sugar"]
 ```

 6. Write a function called `editIngredient` . It should change the ingredient at the index specified to the string in the third argument.
 Change "eggs" in our Crème Brûlée's ingredients to "egg yolks":
 ```javascript
 editIngredient(cremeBrulee, 0, "Egg Yolks")
 [ "egg yolks", "heavy cream", "vanilla pods", "sugar"]
 ```

### Bonus:
*(the nefarious rival chef!)*   

Make a function called `spoiled(recipe)` that takes in a recipe like the `cremeBrulee` object, and adds 'rotten' in front of all of the ingredients.

### !end-question

### !placeholder

var cremeBrulee = {
	ingredients: [
		"eggs",
		"heavy cream",
		"vanilla pods"
	],
	cookware: [
		"mixing bowl",
		"whisk",
		"oven",
    "ramekins",
		"measuring cups"
	]
}




### !end-placeholder

### !tests

```js
var sinon = require('sinon');
describe('Arrays in Objects', function() {

  before(function () {
    this.cStub = sinon.stub(console, "log");
  });
  after(function () {
    this.cStub.restore();
  });

  it("getIngredients Outputs the recipe's ingredients", function() {
    expect(getIngredients(cremeBrulee), "getIngredients is incorrect").to.eq("Ingredients: eggs, heavy cream, vanilla pods");
  })

  it("getCookwares Outputs the recipe's cookware", function() {
    expect(getCookwares(cremeBrulee), "getCookwares is incorrect").to.eq("Cookware Required: mixing bowl, whisk, ramekins, oven, measuring cups");
  })

  it("getFirstIngredient Outputs the recipe's first ingredient", function() {
    expect(getFirstIngredient(cremeBrulee), "getFirstIngredient is incorrect").to.eq("Start with: eggs");
  })

  it("getNthCookwareOutputs the recipe's cookware part", function() {
    expect(getNthCookware(cremeBrulee, 3), "getNthCookware is incorrect").to.eq("ramekins");
  })

  spoiled(cremeBrulee)
  //rivalChef logic
  if (cremeBrulee.ingredients[0] == "rotten egg yolks") {
    it("the nefarious chef has struck!", function() {
      expect(cremeBrulee.ingredients[0], "rotten ingredients check").to.eq("rotten egg yolks");
    })

    it("has sugar in the ingredients of the the Creme Brulee", function() {
      expect(cremeBrulee.ingredients[3], "rotten ingredients check").to.eq("rotten sugar");
    })

    it("has sugar in the ingredients of the the Creme Brulee", function() {
      expect(cremeBrulee.ingredients[0], "rotten ingredients check").to.eq("rotten egg yolks");
    })
  } else {
    it("addIngredient adds sugar in the ingredients of the the Creme Brulee", function() {
      addIngredient(cremeBrulee, "sugar")
      expect(cremeBrulee.ingredients[3], "addIngredient is incorrect").to.eq("sugar");
    })

    it("editIngredient sugar in the ingredients of the the Creme Brulee", function() {
      editIngredient(cremeBrulee, 0, "egg yolks")
      expect(cremeBrulee.ingredients[0], "editIngredient is incorrect").to.eq("egg yolks");
    })
  }



})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: abb4c678-865f-4633-8854-ad8120a4f74d
* title: Object References

### !question

## Challenge 7: Objects in Arrays in Objects

Write a function that does the following:

1. `findFriends(chatroom)` Adds a new property to each user called `friends` that is an array of every user in the chatroom except the user that the post belongs to.  *Do not re-write it manually!*

2. Write a function called `renderChat` that outputs a chatroom like so:

```
userName: message text
userName: message text
```

3. Write a function called `getUserLog` that displays all of the chats by a single user, given the chatrooms to search.

### !end-question

### !placeholder
// users
var tammy = {
 name: "Tammy",
 awayStatus: "Off to school"
}

var tom = {
 name: "Tom",
 awayStatus: "Learning JavaScript brb in 6 months lol"
}

var zorro = {
 name: "Zorro",
 awayStatus: "Let's crush it"
}

var jorge = {
 name: "Jorge",
 awayStatus: "sleeping "
}

var victoria = {
 name: "Victoria",
 awayStatus: "what is this box for"
}

var bobo = {
 name: "Bobo",
 awayStatus: "lunch || coding"
}

// array of chat messages
var general = [
 { user: tammy, message: "I did it!" },
 { user: tom, message: "seriously?!" },
 { user: zorro, message: "stack overflow fails again" },
 { user: jorge, message: "good warmup today" },
 { user: victoria, message: "yay!" },
 { user: bobo, message: "Picking up some subway for lunch" }
]

var random = [
 { user: tom, message: "machop is the best pokemon because" },
 { user: zorro, message: "look at this cat you guys" },
 { user: bobo, message: "I miss the 90s" },
 { user: jorge, message: "sometimes im wistful lol" },
 { user: tammy, message: "omg gifs" },
 { user: tammy, message: "moar gifs" },
 { user: tammy, message: "all of the gifs" },
 { user: victoria, message: "im gonna go home, i got that flu that's going around" }
]

function findFriends(chatroom) {

}

function getUserLog(user, arrayOfChatrooms) {

}

function renderChat(chatroom) {

}

### !end-placeholder

### !tests

```js

describe('stuff', function() {

    it("Users have Friends", function() {
      findFriends(general);
      expect(bobo.friends).to.deep.include.members([zorro, jorge, tom, tammy]);
      expect(zorro.friends).to.deep.include.members([bobo, jorge, tom, tammy]);
      expect(jorge.friends).to.deep.include.members([bobo, zorro, tom, tammy]);
      expect(tom.friends).to.deep.include.members([bobo, zorro, jorge, tammy]);
      expect(tammy.friends).to.deep.include.members([bobo, zorro, jorge, tom]);
    })

    it("renderChat renders the chatroom", function() {

      expect(renderChat(random), "chatroom rendered incorrectly").to.eq(`Tom: machop is the best pokemon because
Zorro: look at this cat you guys
Bobo: I miss the 90s
Jorge: sometimes im wistful lol
Tammy: omg gifs
Tammy: moar gifs
Tammy: all of the gifs
Victoria: im gonna go home, i got that flu that's going around`);

    })

    it("getUserLog logs all the posts from all chatrooms", function() {
      expect(getUserLog(tammy, [general, random]), "Default value is incorrect").to.deep.include.members([
        { user: tammy, message: "omg gifs" },
        { user: tammy, message: "moar gifs" },
        { user: tammy, message: "all of the gifs" },
        { user: tammy, message: "I did it!" }
      ])
    })

})
```
### !end-tests

### !end-challenge
