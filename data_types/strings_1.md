# Strings in JavaScript - Level 1

These exercises will give you a chance to practice and check your skills in:

Storing and Manipulating Data
  - Data Types
    - Strings
  - Data Operations
    - String Manipulation

Problem Solving with JavaScript
- Programming Techniques
  - Control Flow / Logical Expressions & Operators
  - Functions
- Language Implementation
  - Data Types & Primitives

### !challenge

* type: code-snippet
* language: javascript
* id: 0bca3b8a-5c4b-4a03-b591-e5e40d28017e
* title: String Concatenation OR Use a Template String

### !question

* Define a function named `greet` that takes 2 arguments
  * firstName (string)
  * lastName (string)
* Return a string in the format 'Hello, Kelly Rippa!' using these arguments
* 🌟 Bonus: Use a template string to do this!

Bonus:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings

### !end-question

### !placeholder

function greet(firstName, lastName) {

}

### !end-placeholder

### !tests

```js
describe('greet', function() {

  it('greets a person by their full name', function() {
    expect(greet('Bart', 'Simpson'), 'Hello, Bart Simpson!');
    expect(greet('Mona', 'Lisa'), 'Hello, Mona Lisa!');
  });

  if (greet.toString().indexOf("${") !== -1) {  
    it("Bonus: uses a template string!", function() {
      expect(greet.toString().indexOf("`")).to.not.eq(-1);
      expect(greet.toString().indexOf("${")).to.not.eq(-1);
    });
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
* id: f623dd1e-576e-469c-bb58-f6880ba8a8c1
* title: String Concatenation OR Use a Template String

### !question

* Define a function named `toSentence` that takes four arguments
  * word1 (string)
  * word2 (string)
  * word3 (string)
  * oxfordComma (boolean)
* If `oxfordComma` is true,
  * Return a string in the format "word1, word2, and word3."
* If `oxfordComma` is false,
  * Return a string in the format "word1, word2 and word3."

Tips:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators

### !end-question

### !placeholder

function toSentence(word1, word2, word3, oxfordComma) {

}

### !end-placeholder

### !tests

describe('toSentence', function() {
  it('converts the words to a sentence with an oxford comma', function() {
    expect(toSentence('Red', 'Green', 'Blue', true)).to.eq('Red, Green, and Blue.');
    expect(toSentence('Apples', 'Oranges', 'Bananas', true)).to.eq('Apples, Oranges, and Bananas.');
  });

  it('converts the words to a sentence with no oxford comma', function() {
    expect(toSentence('Red', 'Green', 'Blue', false)).to.eq('Red, Green and Blue.');
    expect(toSentence('Apples', 'Oranges', 'Bananas', false)).to.eq('Apples, Oranges and Bananas.');
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: ff76c5f6-40bc-4f05-b75b-dfd6500cd6c8
* title: String Manipulation

### !question

* Define a function named `capitalize` that takes one argument
  * message (string)
* Return the argument with the first letter capitalized.
  * For example, given `'oh, you'`, then return `'Oh, you'`.

* Define a function named `shout` that takes one argument
  * `message` (string)
* Return the same argument but all in uppercase letters. For example, given
  * `'Shut the front door'`, then return `'SHUT THE FRONT DOOR'`

* Define a function named `whisper` that takes one argument
  * `message` (string)
* Return the same argument but all in lowercase letters and prefixed by
 `'shhh... '`.
  * For example, given `'GOLF TIME'`, then return `"shhh... golf time"`

Tips:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

### !end-question

### !placeholder


### !end-placeholder

### !tests


describe('capitalize', function() {
  it('returns the message with the first letter capitalized', function() {
    expect(capitalize('secret bitcoin mine')).to.eq('Secret bitcoin mine');
    expect(capitalize('british football')).to.eq('British football');
  });
});

describe('shout', function() {
  it('converts the argument to uppercase letter', function() {
    expect(shout('whoo hoo')).to.eq('WHOO HOO');
    expect(shout('sOmeTHing')).to.eq('SOMETHING');
  });
});

describe('whisper', function() {
  it("converts the argument to lowercase letters prefixed by 'shhh...'", function() {
    expect(whisper('bAnanA peEl')).to.eq('shhh... banana peel');
    expect(whisper('Tracy Morgan')).to.eq('shhh... tracy morgan');
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 5dfc636b-6a41-4ef6-b00f-e8b8fc3d647a
* title: Filter Strings

### !question

* Define a function named `isVowel` that takes one argument
  * `letter` (string)
* If the `letter` is a vowel
  * Return `true`
* Otherwise
  * Return `false`
* Treat `'y'` as a consonant.

### !end-question

### !placeholder

function isVowel() {

}

### !end-placeholder

### !tests

describe('isVowel', function() {
  it('returns true if the letter is a vowel', function() {
    expect(isVowel('a')).to.eq(true);
    expect(isVowel('e')).to.eq(true);
    expect(isVowel('i')).to.eq(true);
    expect(isVowel('o')).to.eq(true);
    expect(isVowel('u')).to.eq(true);
  });

  it('returns false if the letter is not a vowel', function() {
    expect(isVowel('z')).to.eq(false);
    expect(isVowel('b')).to.eq(false);
    expect(isVowel('d')).to.eq(false);
    expect(isVowel('y')).to.eq(false);
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 5c8fdb71-ad0f-4989-89ec-2e1e4d292b6f
* title: Handling Multiple Dependent Cases

### !question

* Define a function named `iceCreamPosition` that takes two arguments
  * `pieTemperature` (string)
  * `iceCreamFlavor` (string)
* If `iceCreamFlavor` is `'cardamom'`
  * Return `'not at all'`
* Otherwise
  * If `pieTemperature` is `'cold'`
    * Return `'on top'`
  * If `pieTemperature` is `'warm'`
    * Return `'on the side'`
  * Otherwise
    * Return `'up to you'`

### !end-question

### !placeholder

function iceCreamPosition () {
  
}

### !end-placeholder

### !tests

describe('iceCreamPosition', function() {
  it('returns "not at all" if the ice cream flavor is cardamom', function() {
    expect(iceCreamPosition('warm', 'cardamom')).to.eq('not at all');
    expect(iceCreamPosition('cold', 'cardamom')).to.eq('not at all');
  });

  it('returns "on the side" if the pie temperature is warm', function() {
    expect(iceCreamPosition('warm', 'vanilla')).to.eq('on the side');
    expect(iceCreamPosition('warm', 'chocolate')).to.eq('on the side');
  });

  it('returns "on top" if the pie temperature is cold', function() {
    expect(iceCreamPosition('cold', 'vanilla')).to.eq('on top');
    expect(iceCreamPosition('cold', 'chocolate')).to.eq('on top');
  });

  it('returns "up to you" if the pie temperature is neither warm or cold', function() {
    expect(iceCreamPosition('luke warm', 'vanilla')).to.eq('up to you');
    expect(iceCreamPosition('ice cold', 'chocolate')).to.eq('up to you');
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge
