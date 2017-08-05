# Writing JavaScript Expressions

### !challenge

* type: code-snippet
* language: javascript
* id: cc99437b-3eb8-4fa8-af1c-0f88fc3ae3ed
* title: Dimension Variables, use Comparison Operators, Math Operators, Think Logically

### !question

Choose between `var`, `let` and `const` to create these variables.

- Store the number `20` in `bikes`
- Store the number `50` in `cars`
- Store the number `20` in `vans`
- Store the number `200` in `riders`
- Store the number `30` in `drivers`
- Store the number `5` in `carCapacity`
- Store the number `8` in `vanCapacity`
- Store the number `30` in `carMPG`
- Store the number `20` in `vanMPG`

### !end-question

### !placeholder

// Do we have enough space for all the riders and drivers in cars?
haveRiderCarCapacity = null;

// Do we have enough space for all the riders and drivers in vans?
haveRiderVanCapacity = null;

// Do we have enough space for all the riders if each car has to have one driver?
haveEnoughCarDrivers = null;

// Do we have enough space for all the riders if we used vans instead of cars?
haveEnoughVanDrivers = null;

// If we have to travel 100 miles, will cars use more gas than vans? (assuming we have as many cars or vans and drivers as we would need)
carsMoreThanVans = null;

### !end-placeholder

### !tests

```js
describe('transportation', function() {

    it("has a variable called bikes with 20", function() {
      expect(bikes, "bikes is not the right value").to.eq(20)
    })

    it("has a variable called cars with 50", function() {
      expect(cars, "cars is not the right value").to.eq(50)
    })

    it("has a variable called vans with 20", function() {
      expect(vans, "vans is not the right value").to.eq(20)
    })

    it("has a variable called riders with 200", function() {
      expect(riders, "riders is not the right value").to.eq(200)
    })

    it("has a variable called drivers with 30", function() {
      expect(drivers, "drivers is not the right value").to.eq(30)
    })

    it("has a variable called carCapacity with 5", function() {
      expect(carCapacity, "carCapacity is not the right value").to.eq(5)
    })

    it("has a variable called vanCapacity with 8", function() {
      expect(vanCapacity, "vanCapacity is not the right value").to.eq(8)
    })

    it("has a variable called vanMPG with 20", function() {
      expect(vanMPG, "vanMPG is not the right value").to.eq(20)
    })

    it("has a variable called carMPG with 30", function() {
      expect(carMPG, "carMPG is not the right value").to.eq(30)
    })

    it("uses comparison operators to determine if there is enough space for all the riders and drivers in cars", () => {
      expect(haveRiderCarCapacity).to.eq(true);
    })

    it("uses comparison operators to determine if there is enough space for all the riders and drivers in vans", () => {
      expect(haveRiderVanCapacity).to.eq(false);
    })

    it("uses comparison operators to determine if there is enough space for all the riders if each car has to have one driver", () => {
      expect(haveEnoughCarDrivers).to.eq(false);
    })

    it("uses comparison operators to determine if there is enough space for all the riders if each if we used vans instead of cars", () => {
      expect(haveEnoughVanDrivers).to.eq(false);
    })

    it("uses comparison operators to determine if cars will use more gas than vans", () => {
      // 50 cars * (100miles / 30mpg) (50 cars because enough drivers to drive all the cars means more people, which means more cars)
      // 29 vans * (100miles / 30mpg) (29 vans because the original 230 people can fit with less than 30 drivers, so no extra drivers)
      expect(carsMoreThanVans).to.eq(true);
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 64b5ec6e-ae0b-406c-98aa-879da639422a
* title: Create a variable

### !question

Choose between `var`, `let` and `const` to create a variable that will not change, called `MAX_CONNECTIONS`, assign it the number `5`.

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
* title: Create a Variable

### !question

Choose between `var`, `let` and `const` to create a variable called `i` for the purpose of while counting loop iterations, set it to `0`. Use a `while` loop to increment it to 50.

### !end-question

### !placeholder

// Write JS code here...

### !end-placeholder

### !tests

```js
describe('i', function() {

  it("i should start at 0", function() {
    expect(true).to.eq(true)
  })

  it("should be 50 at the end", function() {
    expect(i, "Default value is incorrect").to.eq(50)
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
* title: Create a Variable, String Concatenation, Arrays

### !question

Choose between `var`, `let` and `const` to create a variable called `coolBears`, which we'll update several times in a loop.

By the end, the string should read "paddington is a pretty cool bear, smokey bear is a pretty cool bear, etc", with every bear represented, proclaiming it's coolness.

### !end-question

### !placeholder
const bears = ['paddington', 'smokey', 'yogi', 'teddy', 'black', 'brown', 'polar', 'panda']
// create coolBears here


for (let i = 0; i<bears.length; i++) {
  coolBears += bears[i];
}

### !end-placeholder

### !tests

```js
describe('totalBears', function() {

    it("has a variable called coolBears with all the bears, letting them know how cool they are", function() {
      expect(coolBears, "Default value is incorrect").to.eq(['paddington', 'smokey', 'yogi', 'teddy', 'black', 'brown', 'polar', 'panda'].join(" is a pretty cool bear, ") + " is a pretty cool bear")
    })

})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 5ccf27ee-dc12-4fe0-9271-386fded7b068
* title: String Concatenation and Loops

### !question

Using a single numerical variable in a loop, choose between `var`, `let` and `const`, for the variables below, then `console.log` this classic song:
```
On the 1st day of Christmas my true love gave to me, a partridge in a pear tree.
On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree.
On the 3rd day of Christmas my true love gave to me, three french hens, two turtle doves and a partridge in a pear tree.
On the 4th day of Christmas my true love gave to me, four calling birds, three french hens, two turtle doves and a partridge in a pear tree.
On the 5th day of Christmas my true love gave to me, five golden rings! four calling birds, three french hens, two turtle doves and a partridge in a pear tree.
```

### !end-question

### !placeholder

 day = 0;

 endings = ["st", "nd", "rd", "th", "th"]

 dayOfXmas = "day of Christmas my true love gave to me,";
 songLines = [
  "a partridge in a pear tree",
  "two turtle doves and",
  "three french hens",
  "four calling birds",
  "five golden rings"
]


### !end-placeholder

### !setup
var sinon = require('sinon')

function christmasSong() {
### !end-setup

### !tests

```js
}

describe('Christmas Song', function() {

  let spy

  beforeEach(() => {
    console.log('Setting up beforeEach...');
    spy = sinon.spy(console, "log")
  });

  it("Sings the song",function () {
    christmasSong()

    // grab all the calls, and the first argument that console.log was called with
    let logs = spy.getCalls().map((call) => call.args[0])

    expect(logs[0]).to.match(/[oO]n the 1st day of Christmas my true love gave to me, a partridge in a pear tree./);
    expect(logs[1]).to.match(/[oO]n the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree./);
    expect(logs[2]).to.match(/[oO]n the 3rd day of Christmas my true love gave to me, three french hens, two turtle doves and a partridge in a pear tree./);
    expect(logs[3]).to.match(/[oO]n the 4th day of Christmas my true love gave to me, four calling birds, three french hens, two turtle doves and a partridge in a pear tree./);
    expect(logs[4]).to.match(/[oO]n the 5th day of Christmas my true love gave to me, five golden rings, four calling birds, three french hens, two turtle doves and a partridge in a pear tree./);
  })

});
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge
