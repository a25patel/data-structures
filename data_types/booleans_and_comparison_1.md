# Booleans and Comparison - Level 1

These exercises will give you a chance to practice and check your skills in:

Storing and Manipulating Data
- Data Types
- Data Operations
  - Comparison

Problem Solving with JavaScript
- Programming Techniques
  - Control Flow / Logical Expressions & Operators
  - Functions

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

function isStrictlyEqual() {
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
