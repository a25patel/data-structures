# Interacting with Numbers

This set of challenges centers around numbers. We'll explore how Numbers work in JavaScript with a series of challenges. The further you go in a set of challenges, the harder the question, so **if you hit a question you can't answer, move on to the next section**.

# Integers

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

In this question, you have a set of constraints you need the numbers to adhere to, but in order to achieve the final result you might need to use some comparison statements to test whether the numbers you input actually work. In the final answer you submit, _our_ code will check _your_ code to make sure the numbers come out properly, so writing yourself an if statement to check each constraint will help you figure out the answer faster.

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

# Floating-Point Numbers

### !challenge

* type: code-snippet
* language: javascript
* id: 1ff36743-4a1f-40ec-9469-d9f683ab7967
* title: Calculate Averages and Weighted Averages with Floating Point Numbers

### !question

* Define a function named averageMovieReview that takes three arguments
  * user1, user2, user3 (number between 0 and 5)
* Return the average of the three arguments
  * For example, given 2, 2, and 5, then return 3.


* Define a function named weightedAverageMovieReview that takes three arguments
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
    expect(averageMovieReview(2, 2, 5).to.eq(3);
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
      expect(toFahrenheit(31), "Default value is incorrect").to.eq(88)
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
* id: guid-goes-here
* title: short friendly title

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
