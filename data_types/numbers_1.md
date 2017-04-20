# Numbers in JavaScript - Level 1

These exercises will give you a chance to practice and check your skills in:

Storing and Manipulating Data
  - Data Types
    - Numbers
  - Data Operations
    - Comparison
    - Math
    - Conversion

Problem Solving with JavaScript
- Programming Techniques
  - Control Flow / Logical Expressions & Operators
  - Functions
- Language Implementation
  - Data Types & Primitives

### !challenge

* type: code-snippet
* language: javascript
* id: 46956410-0657-43f2-bdc1-6d943d408b4d
* title: Create Numbers and Compare Them

### !question

## Ageism

Create 5 variables, named `alice`, `bob`, `carol`, `dave`, `eve`.

Each variable should represent an age.

Give each character ages as Numbers such that:
* Alice is older than Bob
* Bob is twice as old as Carol
* Alice is three times as old as Carol
* Dave is younger than Alice but older than Eve
* Eve is older than Carol and older than Bob

### !end-question

### !placeholder



### !end-placeholder

### !tests

```js
describe('Characters with Ages', function() {

  it("Alice is older than Bob", function() {
    expect(alice > bob, "Alice is not older than Bob").to.eq(true)
  })

  it("Bob is twice as old as Carol", function() {
    expect(bob == carol*2, "Bob is not twice as old as Carol").to.eq(true)
  })

  it("Alice is three times as old as Carol", function() {
    expect(alice == carol*3, "Alice is not three times as old as Carol").to.eq(true)
  })

  it("Dave is younger than Alice but older than Eve", function() {
    expect(dave < alice, "Dave is not younger than Alice").to.eq(true)
    expect(dave > eve, "Dave is not older than Eve").to.eq(true)
  })

  it("Eve is older than Carol and older than Bob", function() {
    expect(eve > carol, "Eve is not older than Carol").to.eq(true)
    expect(eve > bob, "Eve is not older than Bob").to.eq(true)
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
* id: 18b6bc49-5313-4076-9866-0fafd1771c6a
* title: Calculate with Integers

### !question

* Example: Define a function named `sum` that takes two arguments:
  * It takes two arguments: a (number), b (number)
  * Return the sum of these two arguments


* Define a function named `product`
  * It takes two arguments: a (number), b (number)
  * Return the product of these two arguments


Define a function named `sumAndProduct` that takes three arguments:
* It takes two arguments: x (number) , y (number), z (number)
* Return the sum of the first two arguments multiplied by the third argument.
  * For example, given 1, 2, and 5, then return 15.

Tips:

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping


### !end-question

### !placeholder

function sum(a, b) {
  return a + b;
}

function product(a, b) {
  // YOUR CODE HERE
}

function sumAndProduct(x, y, z) {

}

### !end-placeholder

### !tests

```js
describe('sum', function() {

  it("returns the sum of two arguments", function() {
    expect(sum(1,2), "Return value is incorrect").to.eq(3);
    expect(sum(11,22), "Return value is incorrect").to.eq(33);
  })

})

describe('product', function() {

  it("returns the product of two arguments", function() {
    expect(product(1,2), "Return value is incorrect").to.eq(2);
    expect(product(11,22), "Return value is incorrect").to.eq(242);
  })

})

describe('sumAndProduct', function() {

  it("returns the sum and product of three arguments", function() {
    expect(sumAndProduct(1,2,5), "Return value is incorrect").to.eq(15);
    expect(sumAndProduct(11,22,33), "Return value is incorrect").to.eq(1089);
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
* id: 16446378-3ad2-48b4-961d-73eba848c724
* title: Numbers and Booleans

### !question

* Define a function named `isEven` that takes one argument
  * integer (number)

* If the number is even
  * Return `true`
* Otherwise
  * Return `false`


* Define a function named `isOdd` that takes one argument
  * integer (number)
* If the number is odd
  * Return `true`
* Otherwise
  * Return `false`

Tips:  

* What number will give you a remainder of 0 if the argument is even?
* If you get stuck, try copy-pasting the directions into your code, and replace each line with a line of JavaScript that does what the directions say.

### !end-question

### !placeholder



### !end-placeholder

### !tests

```js
describe('isEven', function() {

    it("returns true when a number is even", function() {
      expect(isEven(4), "Return value is incorrect").to.eq(true)
    })

    it("returns false when a number is odd", function() {
      expect(isEven(5), "Return value is incorrect").to.eq(false)
    })

})

describe('isOdd', function() {

    it("returns true when a number is even", function() {
      expect(isOdd(4), "Return value is incorrect").to.eq(false)
    })

    it("returns false when a number is odd", function() {
      expect(isOdd(5), "Return value is incorrect").to.eq(true)
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
* id: c981bc11-842a-4628-a675-d0578f18f6ba
* title: Calculate using Floating Point Numbers

### !question

* Define a function named `percentage` that takes two arguments
  * numerator (number)
  * denominator (number)
* Return the percentage of the first argument divided by the second as a floating point number. For
example, given `1` and `4`, then return `25.0`.

### !end-question

### !placeholder


### !end-placeholder

### !tests

```js
describe('percentage', function() {

    it("Returns the percentage of the given ratio", function() {
      expect(percentage(1,4), "Return value is incorrect").to.eq(25);
      expect(percentage(2,4), "Return value is incorrect").to.eq(50);
      expect(percentage(1,10), "Return value is incorrect").to.eq(10);
      expect(percentage(1,4), "Type is incorrect").to.be.a('number');
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
* id: 1ff36743-4a1f-40ec-9469-d9f683ab7967
* title: Calculate Averages and Weighted Averages with Floating Point Numbers

### !question

* Define a function named `averageMovieReview` that takes three arguments
  * user1, user2, user3 (number between 0 and 5)
* Return the average of the three arguments
  * For example, given 2, 2, and 5, then return 3.


* Define a function named `weightedAverageMovieReview` that takes three arguments
  * user1, user2, user3 (number between 0 and 5)
* Return the weighted average of the three arguments with the following weights
  * User 1's weight is 0.25
  * User 2's weight is 1
  * User 3's weight is 2.2
  * For example, given 2, 2, and 5, with the above weights, then return 4.5


### !end-question

### !placeholder

function averageMovieReview(user1, user2, user3) {

}

function weightedAverageMovieReview(user1, user2, user3) {

}

### !end-placeholder

### !tests

describe('averageMovieReview', function() {
  it('calculates the average movie review', function() {
    expect(averageMovieReview(2, 2, 5)).to.eq(3);
    expect(averageMovieReview(1.5, 2.5, 4.2)).to.eq(2.733333333333333);
    expect(averageMovieReview(5, 5, 5)).to.eq(5);
  });
});

describe('weightedAverageMovieReview', function() {
  it('calculates the weighted average movie review', function() {
    expect(weightedAverageMovieReview(2, 2, 5)).to.eq(4.5);
    expect(weightedAverageMovieReview(1.5, 2.5, 4.2)).to.eq(4.038333333333334);
    expect(weightedAverageMovieReview(5, 5, 5)).to.eq(5.75);
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 61727715-42ea-4857-b54f-67825c71d025
* title: Convert Numbers to Strings

### !question

Define a function `toDollar` that takes one argument
  amount (number)
Return the argument converted to a dollar currency string. For example, given
`10`, then return `'$10.00'`.
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

### !end-question

### !placeholder



### !end-placeholder

### !tests

```js
describe('toDollar', function() {

    it("returns a string formatted as USD when given a number", function() {
      expect(toDollar(10), "Default value is incorrect").to.eq('$10.00')
      expect(toDollar(20), "Default value is incorrect").to.eq('$20.00')
      expect(toDollar(120), "Default value is incorrect").to.eq('$120.00')
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
* id: fb1f6a07-a834-4df4-ab19-1d6a1e503582
* title: Compare Three Numbers

### !question

* Define a function named `largestOfThree` which takes three arguments
  * value1, value2, value3 (numbers)
* Return the largest argument by value

Tips:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

### !end-question

### !placeholder



### !end-placeholder

### !tests

```js
describe('largestOfThree', function() {

    it("returns the largest of three integers", function() {
      expect(largestOfThree(1,2,3), "Default value is incorrect").to.eq(3);
      expect(largestOfThree(4,5,6), "Default value is incorrect").to.eq(6);
      expect(largestOfThree(4,5,5), "Default value is incorrect").to.eq(5);
    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge
