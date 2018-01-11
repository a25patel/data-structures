
## Swamp Things

Your task in this challenge is to determine how populations of swamp creatures change over time.

You are given several variables representing populations of different creatures in a swamp.

* Each 🐊 Croc eats 20 fish a month, 1 snake a week and 1 bird a week
* Each 🐍 Snake eats 1 bird a week
* Each 🦆 Bird eats 2 fish a day
* 🐟 Fish are herbivorous and feed on sea grass and algae (which you are not keeping track of)

If there is not enough food to feed a creature, remove it from the population (it starves 😨)

* Fish reproduce once a month, for every 2 fish there are 100 new fish
* Birds reproduce once a month, for every 2 birds there are 5 new birds
* Crocs reproduce once a year (in June), for every 2 crocs there are 5 new crocs
* Snakes reproduce twice a year (in March and in September), for every 2 snakes there are 10 new snakes


Your task is to find out the following information:
* How many fish are there at the _end of_ March, and September? Create a variable for this, call it `marchFish` and `septFish`
* How many snakes are there next January? Create a variable for this, call it `snakesAt1Year`
* Bonus: Will birds go extinct in the next 500 years? If so, how many months will it take? Create a variable called `birdExtinction`, set it to `null` if it won't ever happen.

You can assume the following things:
* January 1st is the start date.
* Time moves along 1 month at a time (to keep things simple)
	* There are 4 weeks in every month
	* There are 28 days a month (4 * 7)
* There 12 months in a year
* Creatures eat before they reproduce
	* Crocs eat first.
		* They Eat Fish first (If there are not enough, some crocs die...)
		* Then they eat Snakes (If there are not enough, some crocs die...)
		* Then they eat Birds (If there are not enough, some crocs die...)
	* Snakes eat second. (If there are not enough birds, some snakes die...)
	* Birds eat last. (If there are not enough fish, some birds die...)
* Every reproduction event happens after the creatures eat on the first day of the month, all at once

Tips:
* Start by looking at the problem, what do you need to know, and what information do you have?
* Iterate towards a solution. Start by solving smaller problems that make up the larger problem.
* If you find yourself repeating the same operations over and over, try using a loop!
* Don't forget about the `%` operator and the `+=` operator

### !end-question

### !placeholder
// Initial populations (don't modify these, just create new variables if you need them)
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
      if(currentCrocsPopulation > 0) {
        let crocsCanBeFed = Math.floor(currentFishPopulation / 20);
        if(crocsCanBeFed < currentCrocsPopulation) {
          currentCrocsPopulation = crocsCanBeFed;
        }
        currentFishPopulation -= (currentCrocsPopulation * 20);

        crocsCanBeFed = Math.floor(currentSnakesPopulation / 4);
        if(crocsCanBeFed < currentCrocsPopulation) {
          currentCrocsPopulation = crocsCanBeFed;
        }

        currentSnakesPopulation -= (currentCrocsPopulation * 4);

        crocsCanBeFed = Math.floor(currentBirdPopulation / 4);
        if(crocsCanBeFed < currentCrocsPopulation) {
          currentCrocsPopulation = crocsCanBeFed;
        }

        currentBirdPopulation -= (currentCrocsPopulation * 4);
      }

      if(currentSnakesPopulation > 0) {
        let snakesCanBeFed = Math.floor(currentBirdPopulation / 4);
        if(snakesCanBeFed < currentSnakesPopulation) {
          currentSnakesPopulation = snakesCanBeFed;
        }
        currentBirdPopulation -= (currentSnakesPopulation * 4);
      }

      if(currentBirdPopulation > 0) {
        let birdsCanBeFed = Math.floor(currentFishPopulation / 56);
        if(birdsCanBeFed < currentBirdPopulation) {
          currentBirdPopulation = birdsCanBeFed;
        }
        currentFishPopulation -= (currentBirdPopulation *56);
      }


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

  if(birdExtinction) {
	  it("Bird Extinction", function() {
	    expect(birdExtinction, "Bird Extinction Date").to.eq(birdExtinctionAnswer);
	  })
  }

})
```

### !end-tests

### !end-challenge
