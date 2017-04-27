# Strings as Data Structures - Level 1

In this exercise, we'll be doing more String Manipulation. For these exercises however, we're going to be thinking of Strings as a Data Structure. Looping over Strings, as well as using their built-in methods will be our main goal.

### !challenge
* type: code-snippet
* language: javascript
* id: 52dcc01b-3e6d-41de-bcc0-155670049a6b
* title: JS doubleLetters

### !question
## Double Letters
Write function named doubleLetters that will take a string and double every letter in the string

Example:

- if you pass it `"abc"` then it should return `"aabbcc"`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('doubleLetters', function() {

  it("returns an empty string when the input is empty", function() {
    expect(doubleLetters(""), "Default value is incorrect").to.eq("")
  })

  it("doubles every letter in the given string", function() {
    expect(doubleLetters("abc")).to.eq("aabbcc")
    expect(doubleLetters("xyzpdq")).to.eq("xxyyzzppddqq")
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
* id: 6f100d88-f184-4f53-8ae1-9d7a341a0d80
* title: JS reverseString

### !question
## Reverse String
Write function named `reverseString` that will reverse a string without calling the built-in `.split` or `.reverse` methods.

Example:

- If you pass it `"hello"` then it should return `"olleh"`
### !end-question

### !placeholder
function reverseString () {

}
### !end-placeholder

### !tests
```js
describe('reverseString', function() {

  it("returns an empty string when the input is empty", function() {
    expect(reverseString(""), "Default value is incorrect").to.deep.eq("")
  })

  it("returns the string reversed", function() {
    expect(reverseString("Sue")).to.deep.eq("euS")
    expect(reverseString("Steve")).to.deep.eq("evetS")
  })

  it("does not call the builtin `.reverse` method", function() {
    expect(reverseString.toString()).to.not.match(/\.split|\.reverse/)
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
* id: c3e953fe-6306-4940-a687-7a293e69480b
* title: JS repeats

### !question
## Repeats
Write a function named `repeats` that returns true if the first half of the string equals the last half, and false if not

Example:

- If you pass it `"haha"` then it should return `true` because `"ha"` (the first half) equals `"ha"` (the second half)
- If you pass it `"yay"` then it should return `false` because it's odd
- If you pass it `"heehaw"` then it should return `false` because `"hee"` doesn't equal `"haw"`
### !end-question

### !placeholder
function repeats() {

}
### !end-placeholder

### !tests
```js
describe('repeats', function() {

  it("returns true when given an empty string (which seems strange, but go with it :)", function() {
    expect(repeats(""), "Default value is incorrect").to.deep.eq(true)
  })

  it("returns true when the second half of the string equals the first", function() {
    expect(repeats("bahbah")).to.deep.eq(true)
    expect(repeats("nananananananana")).to.deep.eq(true)
  })

  it("returns false when the second half of the string does not equal the first", function() {
    expect(repeats("bahba")).to.deep.eq(false)
    expect(repeats("nananananann")).to.deep.eq(false)
  })

  it("does not use .repeat", function() {
    expect(repeats.toString()).to.not.match(/\.repeat/)
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
* id: 478e1e01-2882-4377-bbdb-be6bfa461c54
* title: JS everyOther

### !question
## Every Other
Write a function named `everyOther` that returns every other character in the string

Example:

- If you pass it `"abcdef"` then it should return `"ace"` because those represent every other letter
### !end-question

### !placeholder
function everyOther () {

}
### !end-placeholder

### !tests
```js
describe('everyOther', function() {

  it("returns an empty string when given an empty string", function() {
    expect(everyOther(""), "Default value is incorrect").to.deep.eq("")
  })

  it("returns a string with every other letter", function() {
    expect(everyOther("a")).to.deep.eq("a")
    expect(everyOther("ab")).to.deep.eq("a")
    expect(everyOther("abc")).to.deep.eq("ac")
    expect(everyOther("abc")).to.deep.eq("ac")
    expect(everyOther("abcd")).to.deep.eq("ac")
    expect(everyOther("abcde")).to.deep.eq("ace")
    expect(everyOther("Hello there")).to.deep.eq("Hlotee")
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
* id: 2a6d9050-4efc-41c6-b2ac-688449c76ed2
* title: JS allEqual

### !question
## All Equal

Write a function named `allEqual` that returns true if every character in the string is the same

Example:

- If you pass `"aaa"` it should return `true`
- If you pass `"aba"` it should return `false`
### !end-question

### !placeholder
function allEqual() {

}
### !end-placeholder

### !tests
```js
describe('allEqual', function() {

  it("returns true when given an empty string", function() {
    expect(allEqual(""), "Default value is incorrect").to.deep.eq(true)
  })

  it("returns true when all letters are equal", function() {
    expect(allEqual("aaa")).to.deep.eq(true)
    expect(allEqual("bbbbb")).to.deep.eq(true)
  })

  it("returns false when all letters are not equal", function() {
    expect(allEqual("ab")).to.deep.eq(false)
    expect(allEqual("abbbbbbb")).to.deep.eq(false)
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
* id: c8d4ec7b-2f46-45a9-8e30-f51a04f3c73f
* title: JS sumLetters

### !question
## Sum Letters

Write a function named `sumLetters` that returns the sum of every character in the string

Example:

- If you pass `"45"` it should return `9`
- If you pass `"246"` it should return `10`
### !end-question

### !placeholder
function sumLetters() {

}
### !end-placeholder

### !tests
```js
describe('sumLetters', function() {

  it("returns 0 when given an empty string", function() {
    expect(sumLetters(""), "Default value is incorrect").to.deep.eq(0)
  })

  it("returns the sum of the numbers contained in the string", function() {
    expect(sumLetters("111")).to.deep.eq(3)
    expect(sumLetters("2233")).to.deep.eq(10)
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
* id: f8f84d3e-f2ec-4cff-8c18-8527b952c7ad
* title: JS countVowels

### !question
## Count Vowels

Write a function named `countVowels` that returns the number of vowels in a string, excluding "y"

Example:

- If you pass `"you"` it should return `2`
### !end-question

### !placeholder
function countVowels() {

}
### !end-placeholder

### !tests
```js
describe('countVowels', function() {

  it("returns 0 when given an empty string", function() {
    expect(countVowels(""), "Default value is incorrect").to.deep.eq(0)
  })

  it("returns the count of the vowels in a string (not counting 'y')", function() {
    expect(countVowels("aeiouy")).to.deep.eq(5)
    expect(countVowels("Hello")).to.deep.eq(2)
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
* id: 8a388533-915c-4b0b-ba41-27f9762d514c
* title: JS split

### !question
## Split

Write a function named `split` that takes a string and returns an array of the letters

Example:

- If you pass `"you"` it should return `["y", "o", "u"]`

NOTE: do not use the builtin `split` method
### !end-question

### !placeholder
function split() {

}
### !end-placeholder

### !tests
```js
describe('split', function() {

  it("returns an empty array when given an empty string", function() {
    expect(split(""), "Default value is incorrect").to.deep.eq([])
  })

  it("returns an array containing the characters of the string", function() {
    expect(split("Hello")).to.deep.eq(["H", "e", "l", "l", "o"])
    expect(split("hi")).to.deep.eq(["h", "i"])
  })

  it("does not use the builtin split method", function() {
    expect(split.toString()).to.not.match(/\.split/)
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
* id: a30a5eb5-a1e6-4f8c-896a-ccaa238f7d69
* title: JS leftPad

### !question
## Left Pad

Write a function called `leftPad` that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

- If you pass `"a", 3, "*"` it should return `"**a"` - that is, a string of length 3, padded on the left by the `"*"` character
### !end-question

### !placeholder
function leftPad() {

}
### !end-placeholder

### !tests
```js
describe('leftPad', function() {

  it("returns the original string when it's longer than the padding", function() {
    expect(leftPad("Hello", 0, "-")).to.deep.eq("Hello")
    expect(leftPad("Hello", 1, "-")).to.deep.eq("Hello")
    expect(leftPad("Hello", 2, "-")).to.deep.eq("Hello")
    expect(leftPad("Hello", 3, "-")).to.deep.eq("Hello")
    expect(leftPad("Hello", 4, "-")).to.deep.eq("Hello")
    expect(leftPad("Hello", 5, "-")).to.deep.eq("Hello")
  })

  it("returns a string of the specified length padded by the specified character", function() {
    expect(leftPad("Hello", 6, "-")).to.deep.eq("-Hello")
    expect(leftPad("Hello", 7, "-")).to.deep.eq("--Hello")
    expect(leftPad("Hello", 8, "-")).to.deep.eq("---Hello")
    expect(leftPad("a", 4, "^")).to.deep.eq("^^^a")
    expect(leftPad("bb", 5, " ")).to.deep.eq("   bb")
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
* id: 8e4630c3-369e-4451-a818-3482a0afb8fd
* title: JS createString

### !question
## Create String

Write a function named `createString` that takes a number and a letter and creates a string of that many letters

Example:

- If you pass `"a", 3` it should return `"aaa"`
- If you pass `"b", 3` it should return `"bb"`
### !end-question

### !placeholder
function createString() {
  
}
### !end-placeholder

### !tests
```js
describe('createString', function() {

  it("returns an empty string when given 0 or a negative number", function() {
    expect(createString(0, "r")).to.deep.eq("")
    expect(createString(-1, "r")).to.deep.eq("")
  })

  it("returns a string of spaces of the specified length when given a positive number", function() {
    expect(createString(1, "r")).to.deep.eq("r")
    expect(createString(3, "w")).to.deep.eq("www")
  })

})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge
