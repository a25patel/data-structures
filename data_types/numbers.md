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
describe('Characters ', function() {

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
const birds = 500;
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
    expect(marchFish, "March Fish is wrong").to.be(marchFish);
    expect(septFish, "Sept Fish is wrong").to.be(septFish);
  })

  it("Snake Population at 1 Year", function() {
    expect(snakesAt1Year, "Snakes at Year 1 is wrong").to.be(snakesAt1YearAnswer);

  })

  it("Bird Extinction", function() {
    expect(birdExtinction, "March Fish is wrong").to.be(birdExtinctionAnswer);
  })

})
```

### !end-tests

### !end-challenge


# Floating-Point Numbers



# Validating Numbers



# Numbers to Strings and Back Again



# Dealing with Large Numbers
