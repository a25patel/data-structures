# Writing JavaScript Expressions

### !challenge

* type: code-snippet
* language: javascript
* id: cc99437b-3eb8-4fa8-af1c-0f88fc3ae3ed
* title: Dimension Variables with `var`, `let`, `const`

### !question

Create a variable called `bikes`, store the number 20 in bikes

### !end-question

### !placeholder

// Write JS code here...

### !end-placeholder

### !tests

```js
describe('bikes', function() {

    it("has a variable called bikes with 20", function() {
      expect(bikes, "bikes is not the right variable").to.eq(20)
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 64b5ec6e-ae0b-406c-98aa-879da639422a
* title: Create a Constant

### !question

Create a variable that will not change, called `MAX_CONNECTIONS`, assign it the number `5`.

### !end-question

### !placeholder

// Write JS code here...

### !end-placeholder

### !tests

```js
describe('MAX_CONNECTIONS', function() {

    it("should have a variable called MAX_CONNECTIONS", function() {
      expect(MAX_CONNECTIONS, "Default value is incorrect").to.eq(5)
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 44c80fcc-1448-404e-bea6-9148ab0e2134
* title: Create a Variable for iterations

### !question

Create a variable called `i` for the purpose of while counting loop iterations, that we won't use again after the loop (don't write the loop). Set it to `0`.

### !end-question

### !placeholder

// Write JS code here...

### !end-placeholder

### !tests

```js
describe('i', function() {

    it("should be i", function() {
      expect(i, "Default value is incorrect").to.eq(0)
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
* id: ff8f56ea-d05c-407f-a864-f3c741309dae
* title: Create a variable

### !question

Create a variable called `totalBears`, which we'll update any time we create a new bear. Set it to `3`.

### !end-question

### !placeholder

// Write JS code here...

### !end-placeholder

### !tests

```js
describe('totalBears', function() {

    it("has a variable called totalBears", function() {
      expect(totalBears, "Default value is incorrect").to.eq(3)
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
* id: 5ccf27ee-dc12-4fe0-9271-386fded7b068
* title: String Concatenation

### !question

Using a single numerical variable in a loop, `console.log` this classic song:
```
On the 1st day of Christmas my true love gave to me, a partridge in a pear tree.
On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree.
On the 3rd day of Christmas my true love gave to me, three french hens, two turtle doves and a partridge in a pear tree.
On the 4rd day of Christmas my true love gave to me, four calling birds, three french hens, two turtle doves and a partridge in a pear tree.
On the 5rd day of Christmas my true love gave to me, five golden rings! four calling birds, three french hens, two turtle doves and a partridge in a pear tree.
```

### !end-question

### !placeholder

let day = 0;

let endings = ["st", "nd", "rd", "th", "th"]

let dayOfXmas = "day of Christmas my true love gave to me,";
let songLines = [
  "a partridge in a pear tree",
  "two turtle doves and",
  "three french hens",
  "four calling birds",
  "five golden rings"
]


### !end-placeholder

### !tests

```js

require('mocha-sinon')
function stubFn () { this.sinon.stub(console, 'log') }

describe('Christmas Song', function() {

  beforeEach(stubFn);

  it("",function () {
    expect(console.log.getCall(0).args[0]).to.match(/[oO]n the 1st day of Christmas my true love gave to me, a partridge in a pear tree./);
    expect(console.log.getCall(1).args[0]).to.match(/[oO]n the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree./);
    expect(console.log.getCall(2).args[0]).to.match(/[oO]n the 3rd day of Christmas my true love gave to me, three french hens, two turtle doves and a partridge in a pear tree./);
    expect(console.log.getCall(3).args[0]).to.match(/[oO]n the 4th day of Christmas my true love gave to me, four calling birds, three french hens, two turtle doves and a partridge in a pear tree./);
    expect(console.log.getCall(4).args[0]).to.match(/[oO]n the 5th day of Christmas my true love gave to me, five golden rings! four calling birds, three french hens, two turtle doves and a partridge in a pear tree./);
  })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge
