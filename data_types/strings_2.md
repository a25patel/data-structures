# Strings in JavaScript - Level 2

These exercises will give you a chance to practice and check your skills in:

Storing and Manipulating Data
  - Data Types
    - Strings
  - Data Operations
    - String Manipulation
    - Normalizing Data

Problem Solving with JavaScript
- Programming Techniques
  - Control Flow / Logical Expressions & Operators
  - Functions
- Language Implementation
  - Data Types & Primitives

### !challenge

* type: code-snippet
* language: javascript
* id: b3f76607-e103-4411-b32d-59adebf9817c
* title: Comparing String Lengths

### !question

* Define a function named `longestOfThree` which takes three arguments
  * `value1` (string)
  * `value2` (string)
  * `value3` (string)
* Return the longest argument by length

Tips:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

### !end-question

### !placeholder

### !end-placeholder

### !tests

describe('longestOfThree', function() {
  it('returns the longest argument by length', function() {
    expect(longestOfThree('eight', 'two', 'five')).to.eq('eight');
    expect(longestOfThree('zero', 'seven', 'four')).to.eq('seven');
    expect(longestOfThree('nine', 'six', 'three')).to.eq('three');
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 51e2d83b-afc4-417b-a7c7-b4135295a54f
* title: Chopping up Strings

### !question

* Define a function named `stopAt` that takes two arguments
  * `source` (string)
  * `stop` (string)
* Return the `source` all the way up to the position where `stop` begins.
* For example, given `'how now brown cow'` and `'brown'`, then return `'how now'`.


Tips:
* This will require a combination of 3 different steps
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

### !end-question

### !placeholder

### !end-placeholder

### !tests

describe('stopAt', function() {
  it('returns the first argument up to the last argument', function() {
    expect(stopAt('check this out now', 'out')).to.eq('check this');
    expect(stopAt('turn on the TV', 'the')).to.eq('turn on');
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: e4ec9ee0-e71c-4aaa-ad2f-207837032241
* title: Normalizing Data

### !question

* Define a function named `leftPad5` that takes one argument
  * `word` (string)
* If the argument's length is less than `5`
  * Return the argument but prefixed with spaces until it's 5 characters long
* If the argument's length is 5 or more characters
  * Return the argument

### !end-question

### !placeholder

### !end-placeholder

### !tests

describe('leftPad5', function() {
  it('returns the argument with padded by spaces if its length is less than 5', function() {
    expect(leftPad5('a')).to.eq('    a');
    expect(leftPad5('go')).to.eq('   go');
    expect(leftPad5('dog')).to.eq('  dog');
    expect(leftPad5('tree')).to.eq(' tree');
  });

  it('returns the argument if its length is 5 or more characters', function() {
    expect(leftPad5('socks')).to.eq('socks');
    expect(leftPad5('drawer')).to.eq('drawer');
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 4dcf8014-990b-4934-8d06-dc01ddf3294c
* title: Handle Multiple Independent Cases

### !question

* Define a function named `toRoman` that takes one argument
  * `arabic` (number)
* If the argument is less than 1
  * Return `null`
* If the argument is greater than 10
  * Return `null`
* Otherwise
  * Return the argument converted to a roman numeral string

Tips:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement

### !end-question

### !placeholder

### !end-placeholder

### !tests

describe('toRoman', function() {
  it('returns null if the number is less than 1', function() {
    expect(toRoman(0)).to.eq(null);
    expect(toRoman(-1)).to.eq(null);
  });

  it('returns null if the number is greater than 10', function() {
    expect(toRoman(11)).to.eq(null);
    expect(toRoman(12)).to.eq(null);
  });

  it('converts the number to a roman numeral string', function() {
    expect(toRoman(1)).to.eq('I');
    expect(toRoman(2)).to.eq('II');
    expect(toRoman(3)).to.eq('III');
    expect(toRoman(4)).to.eq('IV');
    expect(toRoman(5)).to.eq('V');
    expect(toRoman(6)).to.eq('VI');
    expect(toRoman(7)).to.eq('VII');
    expect(toRoman(8)).to.eq('VIII');
    expect(toRoman(9)).to.eq('IX');
    expect(toRoman(10)).to.eq('X');
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge
