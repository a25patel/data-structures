# JavaScript Objects Level 1

This set of challenges deals with Objects as Hash Maps, and simple Object access. 

### !challenge
* type: code-snippet
* language: javascript
* id: bf3c16cc-3c80-4c07-b3ab-c35417ca0bf5
* title: JS letterMap

### !question
## Letter Map

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

- If you pass `"Yo"` it should return `{Y: 0, o: 1}`
- If you pass `"Hello"` it should return `{H: 0, e: 1, l: 3, o: 4}`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('letterMap', function() {

  it("returns an empty object when given an empty string", function() {
    expect(letterMap(""), "Default value is incorrect").to.deep.eq({})
  })

  it("returns an object that maps letters to their _last_ position in the string", function() {
    expect(letterMap("up")).to.deep.eq({u: 0, p: 1})
    expect(letterMap("Hello")).to.deep.eq({H: 0, e: 1, l: 3, o: 4})
    expect(letterMap("aaa")).to.deep.eq({a: 2})
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
* id: f62fbd78-0e83-4f7e-a40a-0ac4d825bc9f
* title: JS evenOdd

### !question
## Even Odd

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

- If you pass `1,4` it should return `{"1": "odd", "2": "even", "3": "odd", "4": "even"}`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('evenOdd', function() {

  it("returns an empty object when passed 0s", function() {
    expect(evenOdd(0,0)).to.deep.eq({})
  })

  it("returns an object with all of the numbers between those numbers (inclusive), and whether they are even or odd", function() {
    expect(evenOdd(0,1)).to.deep.eq({0: "even", 1: "odd"})
    expect(evenOdd(11,15)).to.deep.eq({11: "odd", 12: "even", 13: "odd", 14: "even", 15: "odd"})
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
* id: 6336b08d-895b-47b8-a134-174de446431e
* title: JS flipArray

### !question
## Flip Array

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

- If you pass it `["quick", "brown", "fox"]` then it should return `{ "quick": 0, "brown": 1, "fox": 2 }`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('flipArray', function() {

  it("returns an empty object when the input is empty", function() {
    expect(flipArray([]), "Default value is incorrect").to.deep.eq({})
  })

  it("turns the of items into an object", function() {
    expect(flipArray(["a", "b", "c"])).to.deep.eq({a: 0, b: 1, c: 2})
    expect(flipArray([10, 20])).to.deep.eq({10: 0, 20: 1})
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
* id: 99d6119e-6b74-4ccd-9ad0-8bc47af34ecd
* title: JS arraysToObject

### !question
## Arrays to Object

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

- If you pass it `[[2014, "Horse"], [2015, "Sheep"]]` then it should return `{ 2014: "Horse", 2015: "Sheep" }`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('arraysToObject', function() {
  it("returns an empty object when the input is empty", function() {
    expect(arraysToObject([]), "Default value is incorrect").to.deep.eq({})
  })

  it("turns the array of arrays into an object", function() {
    expect(arraysToObject([["name", "Sue"], ["age", "24"]])).to.deep.eq({name: "Sue", age: "24"})
    expect(arraysToObject([["height", 24], ["weight", 22]])).to.deep.eq({height: 24, weight: 22})
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
* id: ce77734c-1a74-4b64-9db4-4484b98c01d4
* title: JS growingKeys

### !question
## Growing Keys

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

- If you pass `2,"d"` it should return `{"d": true, "dd": true}`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('growingKeys', function() {

  it("returns an empty object when passed 0", function() {
    expect(growingKeys(0, "a")).to.deep.eq({})
  })

  it("returns an object with as many keys specified, with the keys growing by one each time", function() {
    expect(growingKeys(1,"a")).to.deep.eq({"a": true})
    expect(growingKeys(2,"b")).to.deep.eq({"b": true, "bb": true})
    expect(growingKeys(3,"c")).to.deep.eq({"c": true, "cc": true, "ccc": true})
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
* id: e31ffba7-267c-4a64-8e28-ba2aa13c8d02
* title: JS pairs

### !question
## Pairs

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

- If you pass `{name: "Will", age: 24}` it should return `["name - will", "age - 24"]`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('pairs', function() {

  it("returns an empty array when passed an empty object", function() {
    expect(pairs({})).to.deep.eq([])
  })

  it("returns an object where the keys have '-signed' appended", function() {
    expect(pairs({a: "b", c: "d"})).to.deep.eq(["a - b", "c - d"])
    expect(pairs({hey: "there"})).to.deep.eq(["hey - there"])
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
* id: a0f31806-fffd-482d-aad8-4f69672300ad
* title: JS sumValues

### !question
## Sum Values

Write a function named sumValues that takes an object and returns the sum of the values

Example:

- If you pass `{a: 1, b: 2}` it should return `3`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('sumValues', function() {

  it("returns 0 when passed an empty object", function() {
    expect(sumValues({})).to.deep.eq(0)
  })

  it("returns the sum of the values", function() {
    expect(sumValues({a: 1, c: 5})).to.deep.eq(6)
    expect(sumValues({foo: 12, bar: 5, baz: 3})).to.deep.eq(20)
  })

  it("does not use Object.values", function() {
    expect(sumValues.toString()).to.not.match(/Object\.values/)
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
* id: 80f28529-4ca0-4710-b717-6bf3f5c73288
* title: JS biggestProperty

### !question
## Biggest Property

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

- If you pass `{1999: 4036, 2000: 7654}` it should return `'2000'`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('biggestProperty', function() {

  it("returns undefined when passed an empty object", function() {
    expect(biggestProperty({})).to.deep.eq(undefined)
  })

  it("returns the name of the property that has the highest value", function() {
    expect(biggestProperty({a: 1, c: 5})).to.deep.eq("c")
    expect(biggestProperty({acme: 3, foo: 12, bar: 5, baz: 3})).to.deep.eq("foo")
  })

  it("does not use Math.max or Object.keys", function() {
    expect(biggestProperty.toString()).to.not.match(/Object\.keys|Math\.max/)
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
* id: 9cd7fd65-e62b-4495-b7fc-c2c2e88ce215
* title: JS containsValue

### !question
## Contains Value

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

- If you pass `{1999: 4036, 2000: 7654}` and `4036`, it should return `true`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('containsValue', function() {

  it("returns false when passed an empty object", function() {
    expect(containsValue({}, 2)).to.deep.eq(false)
  })

  it("returns true if the object has the value", function() {
    expect(containsValue({a: 1, c: 5}, 5)).to.deep.eq(true)
    expect(containsValue({acme: 3, foo: 12, bar: 5, baz: 3}, 12)).to.deep.eq(true)
  })

  it("returns false if the object does not have the value", function() {
    expect(containsValue({a: 1, c: 5}, 7)).to.deep.eq(false)
    expect(containsValue({acme: 3, foo: 12, bar: 5, baz: 3}, 45)).to.deep.eq(false)
  })

  it("does not use .includes", function() {
    expect(containsValue.toString()).to.not.match(/\.includes/)
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
* id: 41165ff6-2135-449f-807c-4bbc8d659842
* title: JS keyForValue

### !question
## Key for Value

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

- If you pass `{1999: 4036, 2000: 7654}` and `4036`, it should return `'1999'`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('keyForValue', function() {

  it("returns undefined when passed an empty object", function() {
    expect(keyForValue({}, 12)).to.deep.eq(undefined)
  })

  it("returns the name of the property that has the matching value", function() {
    expect(keyForValue({a: 1, c: 5}, 5)).to.deep.eq("c")
    expect(keyForValue({foo: 12, bar: 5, baz: 3}, 12)).to.deep.eq("foo")
  })

})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge
