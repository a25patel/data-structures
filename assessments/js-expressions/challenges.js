// Standard - W0002 - Write and Evaluate JavaScript Expressions

//#Success Criteria - Dimension Variables with `var`, `let`, `const`

//##Challenge 1
// Create a variable called bikes, store the number 20 in bikes

//##Challenge 2
// Create a variable that will not change, called MAX_CONNECTIONS

//##Challenge 3
// Create a variable called i for the purpose of counting loop iterations, that we won't use again after the loop (don't write the loop)

//##Challenge 4
// Create a variable called totalBears, which we'll update any time we create a new bear.


//#Success Criteria - Perform Math operations with binary operators
//##Challenge 1
// Your local swamp has wildlife population estimates. We want to know several pieces of information.
// Some information about the local ecosystem:
// Birds and Crocs eat fish. Birds eat 1 fish a day, while crocs eat 5.
// Snakes eat Birds, 1 a day.
// If a creature does not eat for a day, it dies.
// For every 2 fish, 10 fish are born every 7 days.
// For every 2 birds, 5 birds are born every 7 days.
// For every 2 snakes, 2 snakes are born every 7 days.
// Crocs take a long time to reproduce so their population remains stable.

var quadrant1Birds = 500;
var quadrant2Birds = 300;
var quadrant3Birds = 600;
var quadrant4Birds = 800;

var quadrant1Fish = 1700;
var quadrant2Fish = 1600;
var quadrant3Fish = 2200;
var quadrant4Fish = 1900;

var quadrant1Crocs = 50;
var quadrant2Crocs = 100;
var quadrant3Crocs = 100;
var quadrant4Crocs = 75;

var quadrant1Snakes = 100;
var quadrant2Snakes = 300;
var quadrant3Snakes = 300;
var quadrant4Snakes = 200;

// How many fish a day does it take to feed each quadrant on the first day? The 8th?
var quadrant1FishDay1 = undefined;
var quadrant2FishDay1 = undefined;
var quadrant3FishDay1 = undefined;
var quadrant4FishDay1 = undefined;

var quadrant1FishDay8 = undefined;
var quadrant2FishDay8 = undefined;
var quadrant3FishDay8 = undefined;
var quadrant4FishDay8 = undefined;
// How many birds are left after 2 weeks in each quadrant?
var quadrant1BirdsRemaining = undefined;
var quadrant2BirdsRemaining = undefined;
var quadrant3BirdsRemaining = undefined;
var quadrant4BirdsRemaining = undefined;
// How many birds are eaten in a day across the whole swamp for the first 4 weeks?
var dailyBirdLossWeek1 = undefined;
var dailyBirdLossWeek2 = undefined;
var dailyBirdLossWeek3 = undefined;
var dailyBirdLossWeek4 = undefined;
// How many birds are there in the whole swamp after 6 weeks?
var week6BirdPopulation = undefined;
// How many fish are there after 10 weeks?
var week10FishPopulation = undefined;
// How many snakes are left after 20 weeks?
var week20SnakePopulation = undefined;
// Will we ever run out of fish? If so, put the number of days it will take. Put -1 if the fish should last forever.
var fishPopulationCrash = undefined;
// Will we ever run out of snakes? If so, put the number of days it will take. Put -1 if the snakes should last forever.
var snakePopulationCrash = undefined;

//#Success Criteria - Prefix / Postfix notation for integers
//##Challenge 1
// Replace the string with the count variable - increment it before logging it using Prefix notation
var x = 30;
var count = 0;

while (count < x) {
  console.log("Your answer here")
}

//##Challenge 2
// Replace the string with the count variable - increment it after logging it using Postfix notation
var x = 30;
var count = 0;

while (count < x) {
  console.log("Your answer here")
}

//#Success Criteria - Perform String Concatenation

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
