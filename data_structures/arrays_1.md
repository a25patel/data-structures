# Simple Array Access

In the next few challenges, we're going to practice accessing Arrays by index, as well as looping over Arrays. These are the first two key skills you need in order to work with Arrays.

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
* id: 6b63139a-599f-422a-b363-ad5fca45cfd4
* title: Processing Arrays with Numbers

### !question

* Define a function named sum that takes in one argument.
  * `arr` (array of numbers)
* Return the sum of all of the numbers in the array.
  * For example, given `[1, 2, 3, 4]`, then return `10`. If the array is empty, return `0`.

* Define a function named product that takes in one argument.    
  * `arr` (array of numbers)
* Return the product of all of the numbers in the array.
  * For example, given `[1, 2, 3, 4]`, then return `24`. If the array is empty, return `1`.

* Define a function named filterPassingGrades that takes in one argument.
  * grades (array of numbers)
* Return a new array with any grade less than 70 filtered out.
  * For example, given [88, 67, 70, 92, 53], then return [88, 70, 92].

### !end-question

### !placeholder

function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
   sum += arr[i];
  }
  return sum;
}

function product(arr) {
  // YOUR CODE HERE
}

function filterPassingGrades(arr) {
  // YOUR CODE HERE
}

### !end-placeholder

### !tests
describe('sum', function() {
  it('adds a bunch of numbers', function() {
    expect(sum([])).to.eq(0);
    expect(sum([1, 2, 3, 4])).to.eq(10);
    expect(sum([1, -1, 2, -3])).to.eq(-1);
  });
});

describe('product', function() {
  it('multiplies bunch of numbers', function() {
    expect(product([])).to.eq(1);
    expect(product([1, 2, 3, 4])).to.eq(24);
    expect(product([1, 2, 3, 4, 0])).to.eq(0);
  });
});
describe('filterPassingGrades', function() {
  it('filters all passing grades', function() {
    expect(filterPassingGrades([])).to.deep.eq([]);
    expect(filterPassingGrades([100, 45, 90, 60])).to.deep.eq([100, 90]);
    expect(filterPassingGrades([100, 45, 70])).to.deep.eq([100, 70]);
    expect(filterPassingGrades([0, 45, 40])).to.deep.eq([]);
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 4718db22-4ea5-4040-a344-c38977f7f868
* title: Processing Arrays with Strings

### !question

* Define a function named `concatenate` that takes in one argument.
  * `arr` (array of strings)
* Return the concatenation of all the strings in the array.
 * For example, given `['hello', 'my', 'name', 'is', 'ken']`, then return `'hellomynameisken'`. If the
array is empty, return `''`.


* Define a function named `repeat` that takes in two arguments.
  * `str` (string)
  * `times` (number)
* Return a new string containing times copies of the input `str`.
  * For example, given `'hi'` and `4`, then return `'hihihihi'`.


* Define a function named `replace` that takes in three arguments.
  * `arr` (array of numbers)
  * `from` (number)
  * `to` (number)
* Return a new array of numbers where all `from` elements are replaced with `to`.
  * For example, given `[1, 3, 2, 1, 3]`, `1`, and `4`, then return `[4, 3, 2, 4, 3]`.

### !end-question

### !placeholder
function concatenate(arr) {

}

function repeat(str, times) {

}

function replace(str, times) {

}

### !end-placeholder

### !tests

describe('concatenate', function() {
  it('concatenates an array of strings', function() {
    expect(concatenate([])).to.eq('');
    expect(concatenate(['Hello', 'world', 'Seattle'])).to.eq('HelloworldSeattle');
  });
});

describe('repeat', function() {
  it('repeats a string multiple times', function() {
    expect(repeat('hi', 4)).to.eq('hihihihi');
    expect(repeat('ken', 3)).to.eq('kenkenken');
    expect(repeat('hello', 1)).to.eq('hello');
  });
});

describe('replace', function() {
  it('replaces values in an array with another', function() {
    expect(replace([1, 3, 2, 1, 3], 1, 4)).to.deep.eq([4, 3, 2, 4, 3]);
    expect(replace([], 1, 4)).to.deep.eq([]);
    expect(replace([1, 3, 2, 1, 3], 4, 1)).to.deep.eq([1, 3, 2, 1, 3]);
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge
