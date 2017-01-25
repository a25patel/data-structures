'use strict';
var expect = require('chai').expect;

var jsdom = require("jsdom");
var fs = require("fs");
var encryptor = require('simple-encryptor')("Galvanize-Encryption-Key");

var challenges = fs.readFileSync("./challenges.js", "utf-8");
var challengeAnswers = fs.readFileSync("./challenge.answers.js", "utf-8");

describe("Standard - W0002 - Write and Evaluate JavaScript Expressions", function() {

  let env, answerEnv;
  before((done) => {
    jsdom.env("",{
      src: [challengeAnswers],
      done: function(err, window) {
        answerEnv = window;
        done();
      }
    });
  })
  before((done) => {
    jsdom.env("",{
      src: [challenges],
      done: function(err, window) {
        env = window;
        done();
      }
    });
  })
  //#Success Criteria - Dimension Variables with `var`, `let`, `const`

  //##Challenge 1
  // Create a variable called bikes, store the number 20 in bikes
  it("has a variable called bikes with 20", () => {
    expect(env.bikes).to.eq(20);
  })

  //##Challenge 2
  // Create a variable that will not change, called MAX_CONNECTIONS
  it("has a variable called MAX_CONNECTIONS, declared with const", () => {
    expect(challenges).to.contain("const MAX_CONNECTIONS");
  })
  //##Challenge 3
  // Create a variable called i for the purpose of counting loop iterations, that we won't use again after the loop (don't write the loop)
  it("has a variable called i, declared with let", () => {
    expect(challenges).to.contain("let i");
  })
  //##Challenge 4
  // Create a variable called totalBears, which we'll update any time we create a new bear.
  it("has a variable called totalBears, declared with var", () => {
    expect(challenges).to.contain("var totalBears");
  })

  //#Success Criteria - Perform Math operations with binary operators, Evaluate a statement using language Operator Precedence rules
  //##Challenge 1
  // Your local swamp has wildlife population estimates. We want to know several pieces of information.
  // Some information about the local ecosystem:
  // Birds and Crocs eat fish. Birds eat 1 fish a day, while crocs eat 5.
  // Snakes eat Birds, 1 a day.
  // If a creature does not eat for a day, it dies.
  // For every 2 fish that exist on the last day of the week, 10 fish are born.
  // For every 2 birds that exist on the last day of the week, 5 birds are born.
  // For every 2 snakes that exist on the last day of the week, 2 snakes are born.
  // Crocs take a long time to reproduce so their population remains stable.

  var quadrant1Birds = 500;
  var quadrant2Birds = 300;
  var quadrant3Birds = 600;
  var quadrant4Birds = 800;

  var quadrant1Fish = 11700;
  var quadrant2Fish = 21600;
  var quadrant3Fish = 12200;
  var quadrant4Fish = 11900;

  var quadrant1Crocs = 50;
  var quadrant2Crocs = 100;
  var quadrant3Crocs = 100;
  var quadrant4Crocs = 75;

  var quadrant1Snakes = 100;
  var quadrant2Snakes = 300;
  var quadrant3Snakes = 300;
  var quadrant4Snakes = 200;

  // How many fish a day does it take to feed each quadrant on the first day?
  it("has a variable called quadrantXFishDay1, which has the correct values for each", () => {
    expect(env.quadrant1FishDay1).to.eq(answerEnv.quadrant1FishDay1);
    expect(env.quadrant2FishDay1).to.eq(answerEnv.quadrant2FishDay1);
    expect(env.quadrant3FishDay1).to.eq(answerEnv.quadrant3FishDay1);
    expect(env.quadrant4FishDay1).to.eq(answerEnv.quadrant4FishDay1);
  })
  //How many fish does it take to feed each quadrant on the 8th day?
  it("has a variable called quadrantXFishDay8, which has the correct values for each", () => {
    expect(env.quadrant1FishDay8).to.eq(answerEnv.quadrant1FishDay8);
    expect(env.quadrant2FishDay8).to.eq(answerEnv.quadrant2FishDay8);
    expect(env.quadrant3FishDay8).to.eq(answerEnv.quadrant3FishDay8);
    expect(env.quadrant4FishDay8).to.eq(answerEnv.quadrant4FishDay8);
  })

  // How many birds are eaten in a day across the whole swamp for the first 4 weeks?
  it("has a variable called dailyBirdLossWeekX, which has the correct values for each", () => {
    expect(env.dailyBirdLossWeek1).to.eq(answerEnv.dailyBirdLossWeek1);
    expect(env.dailyBirdLossWeek2).to.eq(answerEnv.dailyBirdLossWeek2);
    expect(env.dailyBirdLossWeek3).to.eq(answerEnv.dailyBirdLossWeek3);
    expect(env.dailyBirdLossWeek4).to.eq(answerEnv.dailyBirdLossWeek4);
  })
  // How many birds are there in the whole swamp after 6 weeks?
  it("has a variable called week6BirdPopulation, which has the correct value", () => {
    expect(env.week6BirdPopulation).to.eq(answerEnv.week6BirdPopulation);
  })

  //#Success Criteria - Prefix / Postfix notation for integers
  //##Challenge 1
  // Replace the string with the count variable - increment it before logging it using Prefix notation
  it("uses prefix notation in a loop", () => {
    expect(challenges).to.contain("++count");
  })

  //##Challenge 2
  // Replace the string with the count variable - increment it after logging it using Postfix notation
  it("uses prefix notation in a loop", () => {
    expect(challenges).to.contain("count++");
  })
})


//#Success Criteria - Perform String Concatenation
//##Challenge 1
//Given the following variables, create statements that say:

// Variables
var bean = "pinto";

//These variables should contain a complete song
var theBeanSong = "My dog (replace with variable) loves to roam, the other day he left his home. He came back all nice and clean where or where has (replace with variable) been?";
// should read: My dog pinto loves to roam, the other day he left his home. He came back all nice and clean where or where has pinto been?
var theBeanChorus = "(replace with variable) been (replace with variable) been, where or where has (replace with variable) been.";
// should read: pinto been, pinto been, where oh where has pinto been?


//##Challenge 2
//Using a single numerical variable and prefix notation, make this classic song:
// On the 1st day of Christmas my true love gave to me, a partridge in a pear tree.
// On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree.
// On the 3rd day of Christmas my true love gave to me, three french hens, two turtle doves and a partridge in a pear tree.
// On the 4rd day of Christmas my true love gave to me, four calling birds, three french hens, two turtle doves and a partridge in a pear tree.
// On the 5rd day of Christmas my true love gave to me, five golden rings! four calling birds, three french hens, two turtle doves and a partridge in a pear tree.

var day = 0;

var st = "st";
var nd = "nd";
var rd = "rd";
var th = "th";

var dayOfXmas = "day of Christmas my true love gave to me,"
var one = "a partridge in a pear tree"
var two = "two turtle doves and"
var three = "three french hens"
var four = "four calling birds"
var five = "five golden rings"

var day1 = "";
var day2 = "";
var day3 = "";
var day4 = "";
var day5 = "";



//#Success Criteria - Use comparison operators
//##Challenge 1
// Given the following variables, create a comparison statement to see if:
var cars = 50;
var vans = 20;
var riders = 200;
var drivers = 30;
var carCapacity = 5;
var vanCapacity = 8;
var carMPG = 30;
var vanMPG = 20;

// Do we have enough space for all the riders and drivers in cars?
var haveRiderCarCapacity = undefined;

// Do we have enough space for all the riders and drivers in vans?
var haveRiderVanCapacity = undefined;

// Do we have enough space for all the riders if each car has to have one driver?
var haveEnoughCarDrivers = undefined;

// Do we have enough space for all the riders if we used vans instead of cars?
var haveEnoughVanDrivers = undefined;

// If we have to travel 100 miles, which will use more gas, cars or vans? (use the actual number of cars and vans that we would need to use to carry all riders)
var carsOrVans = undefined;

//##Challenge 2
// Given the following variables, create comparison statements to see if:
var sallyAge = 10;
var johnAge = sallyAge * 2;
var onokeAge = johnAge / 3;
var carolAge = sallyAge + johnAge;
var chandraAge = johnAge - sallyAge;
var samAge = onokeAge * sallyAge;
var kenAge = chandraAge + onokeAge;
var jimAge = chandraAge % onokeAge * kenAge - 5;

// Who is older, Jim or Ken?
//
// Who is older, Carol or Jim?
//
// Who is older, Onoke or Sally?
//
// Who is older, Chandra or Sam?

//#Success Criteria - Use logical operators
//##Challenge 1
// You have a global variable for each letter of the alphabet (eg, var a,b,c)
// You also have 5 global variables for each letter of the alphabet that have a number after them (eg, var a1, a2, a3, a4, a5)

//Write a test to see if every variable that starts with a is true
var allAs = undefined;
//Write a test to see if every variable that does not have a number after it is true
var allLettersNoNumbers = undefined;
//Write a test to see if any of the vowels that have a 3 after them are true
var allVowels3 = undefined;
//Write a test that checks to see if all of the variables that start with c are true, or if all of the vowels without numbers are true
var allCOrAllVowels = undefined;
//Write a test that checks to see if any of the first five letter variables are true
var anyFirstFive = undefined;
//Write a test that checks if all of the x variables are true or all of the y variables BUT NOT BOTH
var allXXorAllY = undefined;
