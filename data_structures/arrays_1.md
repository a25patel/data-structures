# Array Access Level 1

In the next few challenges, we're going to practice accessing Arrays by index, as well as looping over Arrays. These are the first two key skills you need in order to work with Arrays.

## Accessing Arrays

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
* id: ab5c8641-f70c-442a-b044-7a1023a49f7a
* title: Array Push and Pop Practice

### !question

### Pets

* Create an array in the pets variable.
* In the array definition, add 4 types of common household pets.
* Add "crocodiles" to the 5th index, using the push method.
* Add another type of common household pet, using the push method.

### Chores

* Create an array in the chores variable.
* Use the push method to add 3 chores to the chores array.
* Print "finished X", where X is the last chore in the array, using the pop method.

### Alphabet

* Turn the alphabet variable into an array, using the split method. Each letter should have it's own index.
* Print out each vowel as a string, with " and sometimes " in between "u" and "y"
* Using the splice method, remove all the vowels from the array

### Meal Log

* Create a new array for each day of the week (Starting on Sunday), and push it to the mealLog array.
* Add "Oatmeal" in the first position of each array, by accessing the array.
* Add "Sandwich" to each even numbered day, in the second position, by accessing the array.
* Add "Soup" to each odd numbered day, in the second position, by accessing the array.
* Add "Ramen" to each day that ends with y in the third position, by accessing the array.
* Create a new array with the names for the days of the week.
* Print each day from your mealLog array, using the join method, so that it prints each day like so:
  * "Monday: Oatmeal, Soup, Ramen"

### !end-question

### !placeholder

var pets;
var chores;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var mealLog = [];

### !end-placeholder

### !tests


describe('Pets', function() {

    it("Has a crocodile for the 5th index", function() {
      expect(pets[5]).to.eq("crocodiles")
    })
    it("totals 6 elements", function() {
      expect(pets.length).to.eq(6)
    })

})

describe('Chores', function() {

    it("Added 4 chores, then popped one", function() {
      expect(chores.length).to.eq(3)
    })

})

describe('Alphabet', function() {

    it("Has been operated on properly", function() {
      expect(alphabet).toEqual("bcdfghjklmnpqrstvwxz".split(""));
    })

})

describe('Meal Log', function() {

    it("Has every piece of data in the correct position", function() {
      expect(mealLog.length).to.eq(7);
      expect(mealLog[0].length).to.eq(3);
      expect(mealLog[0][1]).to.eq("Sandwich");
      expect(mealLog[1][1]).to.eq("Soup");
      expect(mealLog[0][2]).to.eq("Ramen");
    })

})

### !end-tests

### !explanation

### !end-explanation

### !end-challenge
### !challenge
* type: code-snippet
* language: javascript
* id: 0e92fc58-60d1-4a86-a353-ff3c98e82fed
* title: JS every

### !question
## Every

Write a function named `every` that takes an array and a value and returns true if every element of the array equals the value

Example:

- If you pass `[1,1], 1` it should return `true`
- If you pass `[1,2], 1` it should return `false`
### !end-question

### !placeholder

function every(arr) {

}

### !end-placeholder

### !tests
```js
describe('every', function() {

  it("returns true when passed an empty array", function() {
    expect(every([], "a")).to.deep.eq(true)
  })

  it("returns true when all elements match the given value", function() {
    expect(every([1, 1], 1)).to.deep.eq(true)
    expect(every(["A", "A", "A"], "A")).to.deep.eq(true)
  })

  it("returns false when not all elements match the given value", function() {
    expect(every([1, 2], 1)).to.deep.eq(false)
    expect(every(["A", "B", "A"], "A")).to.deep.eq(false)
  })

  it("does not use .every", function() {
    expect(every.toString()).to.not.match(/\.every/)
  })

})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge

### !challenge
* type: code-snippet
* language: javascript
* id: 209f05ce-7d18-4262-a71b-fca299a4fc00
* title: JS some

### !question
## Some
Write a function named `some` that takes an array and a value and returns true if at least one element of the array equals the value

Example:

- If you pass `[1,2], 1` it should return `true`
- If you pass `[3,2], 1` it should return `false`
### !end-question

### !placeholder

function some() {

}

### !end-placeholder

### !tests
```js
describe('some', function() {

  it("returns false when passed an empty array", function() {
    expect(some([], "a")).to.deep.eq(false)
  })

  it("returns true when at least one element matches the given value", function() {
    expect(some([1, 2], 1)).to.deep.eq(true)
    expect(some(["A", "B", "C"], "B")).to.deep.eq(true)
  })

  it("returns false when no elements match the given value", function() {
    expect(some([1, 2], 3)).to.deep.eq(false)
    expect(some(["A", "B", "A"], "D")).to.deep.eq(false)
  })

  it("does not use .some", function() {
    expect(some.toString()).to.not.match(/\.some/)
  })

})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge
