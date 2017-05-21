# Booleans and Comparison - Level 1

These exercises will give you a chance to check your data comparison skills, as well as your flex your logic muscles!

### !challenge

* type: code-snippet
* language: javascript
* id: e40921d7-16b3-4b7c-9536-2802f6d39ed3
* title: A Difference in Equality

### !question

* Define a function named `isLooselyEqual` that takes two arguments
  * value1 (anything)
  * value2 (anything)
* If the two arguments are both equal regardless of type
  * Return true
* Otherwise
  * Return false

* Define a function named `isStrictlyEqual` that takes two arguments
  * value1 (anything)
  * value2 (anything)
* If the two arguments are both equal and have the same type
  * Return true
* Otherwise
  * Return false



Tips:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using
* https://dorey.github.io/JavaScript-Equality-Table/

### !end-question

### !placeholder

function isLooselyEqual() {
  // your code here
}

### !end-placeholder

### !tests

```js
describe('isStrictlyEqual', function() {
  it('returns true if the values and types are equal', function() {
    expect(isStrictlyEqual(-1, -1)).to.eq(true);
    expect(isStrictlyEqual('foo', 'foo')).to.eq(true);
    expect(isStrictlyEqual(null, null)).to.eq(true);
    expect(isStrictlyEqual(undefined, undefined)).to.eq(true);
    expect(isStrictlyEqual(true, true)).to.eq(true);
    expect(isStrictlyEqual(false, false)).to.eq(true);
  });

  it('returns false if the values are equal but types are not', function() {
    expect(isStrictlyEqual(-1, '-1')).to.eq(false);
    expect(isStrictlyEqual(true, 'true')).to.eq(false);
    expect(isStrictlyEqual(undefined, 'undefined')).to.eq(false);
  });

  it('returns false if the values are not equal', function() {
    expect(isStrictlyEqual(1, 2)).to.eq(false);
    expect(isStrictlyEqual(true, false)).to.eq(false);
  });
});

describe('isLooselyEqual', function() {
  it('returns true if the values are equal even if the types are not', function() {
    expect(isLooselyEqual(-1, '-1')).to.eq(true);
    expect(isLooselyEqual(false, 0)).to.eq(true);
  });

  it('returns false if the values are not equal', function() {
    expect(isLooselyEqual(1, '2')).to.eq(false);
    expect(isLooselyEqual('true', false)).to.eq(false);
  });
});
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge


### !challenge

* type: code-snippet
* language: javascript
* id: 08560ffc-7085-4a71-a837-895e6c113743
* title: Checking Types

### !question

* Define a function named `superPicky` that takes one argument
  * value (anything)
* If the argument is a string,
  * Return 'Thanks! Got it.'
* Otherwise
  * Return 'I wanted a string, but all I got was a stinking TYPE'

Tips:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

### !end-question

### !placeholder

function superPicky () {

}

### !end-placeholder

### !tests

```js
describe('superPicky', function() {
  it("returns 'Thanks! Got it.' if given a string", function() {
    expect(superPicky('hello')).to.eq('Thanks! Got it.');
    expect(superPicky('there')).to.eq('Thanks! Got it.');
  });

  it('returns an error message if given anything other than a string', function() {
    expect(superPicky(1)).to.eq('I wanted a string, but all I got was a stinking number');
    expect(superPicky(Math.random())).to.eq('I wanted a string, but all I got was a stinking number');
    expect(superPicky(true)).to.eq('I wanted a string, but all I got was a stinking boolean');
    expect(superPicky(false)).to.eq('I wanted a string, but all I got was a stinking boolean');
    expect(superPicky(function() {})).to.eq('I wanted a string, but all I got was a stinking function');
    expect(superPicky({})).to.eq('I wanted a string, but all I got was a stinking object');
    expect(superPicky([])).to.eq('I wanted a string, but all I got was a stinking object');
  });
});
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 0610294e-3d25-4bbd-af76-36b080275633
* title: Booleans and Comparison: Bakery

### !question

Using comparison operators, we're going to create several boolean values, and store them in variables.

We have to figure out if we can bake enough cakes before the party!

First, figure out if we have enough slices now. Use a comparison operator to figure out if there are enough. Assign the result to the enoughSlicesNow variable.
Next, figure out how many slices we'll need, if any. Assign the result to the slicesNeeded variable.
Figure out how many cakes can be baked, using the formula (bakers * cake time) * hours left. Assign the result to the cakesWeCanBake variable.
Now, figure out if you'll have extra slices, using comparison operators. Assign the total number of slices to the finalSliceCount variable, then check if it is greater than the number of attendees and put the result in the extraSlices variable.

### !end-question

### !placeholder

// Leave these alone
const cakes = 5;
const slicesPerCake = 6;
const attendees = 60;
const bakers = 3;
const cakeBakingTime = 1;
const hoursLeftUntilParty = 5;

//Add comparison operators to the variables below:
var enoughSlicesNow;

var slicesNeeded;

var cakesWeCanBake;

var finalSliceCount;

var extraSlices;

### !end-placeholder

### !tests

```js
describe('Bakery', function() {

    it("cakesWeCanBake should have a number of cakes that are bakeable in the number of hours left", function() {
      expect(cakesWeCanBake, "Remember to use (bakers * cake time) * number of hours left").to.equal(15);
    })

    it("finalSliceCount has the final number of slices", function() {
      expect(finalSliceCount, "Figure out how many total slices we'll have if we baked all the cakes we can, and added the amount of cakes we already have").to.equal(120)
    })

    it("extraSlices indicates whether or not we'll have extra slices at the end", function() {
      expect(extraSlices).to.equal(true);
    })

    it("enoughSlicesNow tells us whether we have enough slices - make sure to multiply the number of cakes by the number of slices, and see if it is less than the number of attendees", function() {
      expect(enoughSlicesNow).to.equal(false);
    })

    it("slicesNeeded tells us how many slices we need beyond the number we already have", function() {
      expect(slicesNeeded).to.equal(30);
    })

})
```
### !end-tests


### !end-challenge
