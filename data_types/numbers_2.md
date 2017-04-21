# Numbers in JavaScript - Level 2

These exercises will give you a chance to practice and check your skills in:

Storing and Manipulating Data
  - Data Types
    - Numbers
  - Data Operations
    - Comparison
    - Math

Problem Solving with JavaScript
- Programming Techniques
  - Control Flow / Logical Expressions & Operators
  - Functions
- Language Implementation
  - Data Types & Primitives

Solving Computational Problems
- Algorithms
  - Mathematical Algorithms


### !challenge

* type: code-snippet
* language: javascript
* id: 6c36d298-4ea1-42fa-98c6-b56475857f7a
* title: Rounding off Floating Point Numbers

### !question

* Define a function named `roundUp` that takes one argument
  * decimal (number)
* Return the argument rounded up to the nearest integer

* Define a function named `toFahrenheit` that takes one argument
  * celsius (number)
* Return the argument converted to Fahrenheit rounded to the nearest integer
* Use Google to find the formula

Tips:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

### !end-question

### !placeholder

function roundUp(decimal) {

}

function toFahrenheit(celsius) {

}


### !end-placeholder

### !tests

```js
describe('roundUp', function() {

    it("rounds up to the nearest integer", function() {
      expect(roundUp(2.1), "Return value is incorrect").to.eq(3)
      expect(roundUp(4.7), "Return value is incorrect").to.eq(5)
      expect(roundUp(6.0), "Return value is incorrect").to.eq(6)
    })

})

describe('toFahrenheit', function() {

    it("converts from Celsius to Fahrenheit", function() {
      expect(toFahrenheit(30), "Default value is incorrect").to.eq(86)
      expect(toFahrenheit(31), "Default value is incorrect").to.eq(87.8)
      expect(toFahrenheit(-5), "Default value is incorrect").to.eq(23)
    })

})
```
### !end-tests

### !explanation

The Math.ceil() and Math.floor() methods round up or down to the nearest integer. The Math object is where many of the more advanced math operations are located.

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: ca53cdc4-85a9-44e9-a1d9-258ae6e72c8a
* title: Calculate Areas

### !question

* Define a function named `areaOfCircle` that takes one argument
  * radius (number)
* Return the area of a circle using that argument. Use Google to find the
formula.

* Define a function named `areaOfRing` that takes two arguments
  * outerRadius (number)
  * innerRadius (number)
* Return the area of a circular ring using these arguments. Use Google to find
the formula.

Tips:

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

### !end-question

### !placeholder

function areaOfCircle(radius) {

}

function areaOfRing(innerRadius,outerRadius) {

}

### !end-placeholder

### !tests

describe('areaOfCircle', function() {
  it('calculates the area of a circle', function() {
    expect(areaOfCircle(10)).to.be.closeTo(314.1592653589793, 0.01);
    expect(areaOfCircle(20)).to.be.closeTo(1256.6370614359173, 0.01);
  });
});

describe('areaOfRing', function() {
  it('calculates the the area of a circular ring', function() {
    expect(areaOfRing(10, 5)).to.be.closeTo(235.61944901923448, 0.01);
    expect(areaOfRing(20, 17)).to.be.closeTo(348.716784548467, 0.01);
  });
});


### !end-tests

### !explanation

🤔 Try checking your work with a calculator. Note that the least significant digits may be different- 🕵 can you find out why this is?

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 53bb777e-7712-4eaa-9ca4-b60501b124d7
* title: Multiple Dependent Calculations

### !question

* Define a function named `calculateTaxRate` that takes two arguments
  * `salary` (number from 1 to 74,900)
  * `status` (string that's either 'single' or 'joint')

* If the `status` is anything other than `'single'` or `'joint'`
  * Return a string that says `'Better call an accountant'`
* If the `salary` is greater than `74,900`
  * Return a string that says `'Better call an accountant'`
* Otherwise
  * Return the correct tax rate _as a string_ using the table from http://www.efile.com/tax-service/tax-calculator/tax-brackets/


### !end-question

### !placeholder


### !end-placeholder

### !tests

describe('calculateTaxRate', function() {
  it('returns a warning if the status is incorrect', function() {
    expect(calculateTaxRate(100, 'separate')).to.eq('Better call an accountant');
    expect(calculateTaxRate(100, 'head of household')).to.eq(Better call an accountant');
  });

  it('returns a warning if the amount is over 74,900', function() {
    expect(calculateTaxRate(74901, 'single')).to.eq('Better call an accountant');
    expect(calculateTaxRate(100000, 'joint')).to.eq('Better call an accountant');
  });

  it('returns the correct tax rate for a single filer', function() {
    expect(calculateTaxRate(1, 'single')).to.eq('10%');
    expect(calculateTaxRate(100, 'single')).to.eq('10%');
    expect(calculateTaxRate(9225, 'single')).to.eq('10%');
    expect(calculateTaxRate(9276, 'single')).to.eq('15%');
    expect(calculateTaxRate(15000, 'single')).to.eq('15%');
    expect(calculateTaxRate(37450, 'single')).to.eq('15%');
  });

  it('returns the correct tax rate for a joint filer', function() {
    expect(calculateTaxRate(1, 'joint')).to.eq('10%');
    expect(calculateTaxRate(100, 'joint')).to.eq('10%');
    expect(calculateTaxRate(18450, 'joint')).to.eq('10%');
    expect(calculateTaxRate(18551, 'joint')).to.eq('15%');
    expect(calculateTaxRate(25000, 'joint')).to.eq('15%');
    expect(calculateTaxRate(74900, 'joint')).to.eq('15%');
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 7b08f243-767e-4bd6-95c3-a627156c2a9e
* title: Operate on Numbers with Loops

### !question

## Swamp Things

Your task in this challenge is to determine how populations of swamp creatures change over time.

You are given several variables representing populations of different creatures in a swamp.

* Birds eat 2 fish a day
* Snakes eat 1 bird a week
* Crocs eat 20 fish, 1 snake, and 1 bird a week

If a creature goes without food for a time period it would normally get food in, remove it from the population (it starves 😨)

* Fish reproduce once a month, for every 2 fish there are 100 new fish
* Birds reproduce once a month, for every 2 birds there are 5 new birds
* Crocs reproduce once a year (in June), for every 2 crocs there are 5 new crocs
* Snakes reproduce twice a year (in March and in September), for every 2 snakes there are 10 new snakes


Your task is to find out the following information:
* How many fish are there at the _end of_ March, and September? Create a variable for this, call it `marchFish` and `septFish`
* How many snakes are there next January? Create a variable for this, call it `snakesAt1Year`
* Bonus: Will birds go extinct in the next 500 years? If so, how many months will it take? Create a variable called `birdExtinction`, set it to `null` if it won't ever happen.

You can assume the following things:
* There are 4 weeks in every month (to keep things simple)
* There are 28 days a month (4 * 7)
* There 12 months in a year
* Every reproduction event happens on the first day of a week or month, all at once
* Creatures eat before they reproduce

Tips:
* Start by looking at the problem, what do you need to know, and what information do you have?
* Iterate towards a solution. Start by solving smaller problems that make up the larger problem.
* If you find yourself repeating the same operations over and over, try using a loop!
* Don't forget about the `%` operator and the `+=` operator

### !end-question

### !placeholder
// 1st week January populations (don't modify these, just create new variables if you need them)
const birds = 700;
const fish = 11700;
const crocs = 50;
const snakes = 100;



### !end-placeholder

### !tests

```js
describe('The Swamp', function() {


  let birdExtinctionAnswer = null;
  let marchFishAnswer, septFishAnswer, snakesAt1YearAnswer
  before(function() {

    // solution
    const birds = 700;
    const fish = 11700;
    const crocs = 50;
    const snakes = 100;

    let currentBirdPopulation = birds;
    let currentFishPopulation = fish;
    let currentCrocsPopulation = crocs;
    let currentSnakesPopulation = snakes;


    for (let month = 1; month < 500; month++) {
      //eat
      currentBirdPopulation -= (currentSnakesPopulation * 4) + (currentCrocsPopulation * 4);
      currentFishPopulation -= ((currentBirdPopulation * 2) * 28) + (currentCrocsPopulation * 20);
      currentSnakesPopulation -= (currentCrocsPopulation * 4);

      //reproduce
      currentBirdPopulation += (currentBirdPopulation / 2) * 5;
      currentFishPopulation += (currentFishPopulation / 2) * 100;
      if (month % 3 === 0 && month % 6 !== 0) { // march and august, not june and december
        currentSnakesPopulation += (currentSnakesPopulation / 2) * 10;
      }
      if (month % 6 === 0 && month % 12 !== 0) { // only in June, not in December
        currentCrocsPopulation += (currentCrocsPopulation / 2) * 5;
      }

      if (currentBirdPopulation <= 0) {
        birdExtinctionAnswer = month;
      }
      if (month === 3) {
        marchFishAnswer = currentFishPopulation;
      }
      if (month === 9) {
        septFishAnswer = currentFishPopulation;
      }
      if (month === 12) {
        snakesAt1YearAnswer = currentSnakesPopulation;
      }
    }
  })


  it("March & September Fish Population ", function() {
    expect(marchFish, "March Fish is wrong").to.eq(marchFishAnswer);
    expect(septFish, "Sept Fish is wrong").to.eq(septFishAnswer);
  })

  it("Snake Population at 1 Year", function() {
    expect(snakesAt1Year, "Snakes at Year 1 is wrong").to.eq(snakesAt1YearAnswer);

  })

  it("Bird Extinction", function() {
    expect(birdExtinction, "Bird Extinction Date").to.eq(birdExtinctionAnswer);
  })

})
```

### !end-tests

### !end-challenge
