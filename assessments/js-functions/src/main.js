//** Success Criteria - Write Functions with 0, 1, and 2+ parameters

//* Challenge - Write a function called `question0` that:
// - Has no parameters
// - Logs the phrase 'Hello JavaScript' exactly

//* Challenge - Write a function called `question2` that:
// - Has a single parameter
// - Logs the phrase 'Inputted value: [value]' but instead of [value] contains
//   the inputted value

//* Challenge - Write a function called `question3` that:
// - Has two parameters
// - Returns both arguments added together

//* Challenge - Write a function called `question6` that:
// - Has no parameters, but can accept any number of parameters
// - Returns all arguments, converted to strings and concatenated

//** Success Criteria - Invoke Functions as Expressions

//* Challenge - Write a function called `question7` that:
// - Has no parameters, but can accept any number of parameters
// - uses the results of your question3 function and the question6 function to log out:
// "You input [n] arguments, and together they make the string: [str]",
// Instead of [n], put the number of arguments that were passed into the function
// Instead of [str], put the result of the `question6` function.

//* Challenge - Write a function called `question8` that:
// - Takes in a string
// - Returns that string with the first two letters removed (eg, "Hannah" -> "nnah")
// Write another function called `question9` that:
// - Takes in a string
// - Uses the question8 function to return the name game ("Hannah" -> "Hannah Hannah fo fannah, me my mo mannah, Hannah!")

//** Success Criteria - Write and Invoke Functions to control the flow of a program
//* Challenge - Given the following code, refactor it to two functions, and one variable to store students.

var student1 = {
  name: "Davey",
  quizGrades : [90, 85, 75, 85, 70, 68, 75, 59, 80, 80]
}

var student2 = {
  name: "Suzie",
  quizGrades : [90, 85, 90, 85, 60, 90, 75, 90, 80, 99]
}

var student3 = {
  name: "Casey",
  quizGrades : [60, 65, 75, 45, 30, 68, 75, 59, 45, 60]
}

var student4 = {
  name: "Alex",
  quizGrades : [90, 45, 75, 65, 45, 68, 45, 59, 58, 30]
}

var average = 0;
for (var i=0; i<student1.quizGrades; i++) {
  average += student1.quizGrades[i];
}
student1.courseAverage = average / student1.quizGrades;

average = 0;
for (var i=0; i<student2.quizGrades; i++) {
  average += student2.quizGrades[i];
}
student2.courseAverage = average / student2.quizGrades;

average = 0;
for (var i=0; i<student3.quizGrades; i++) {
  average += student3.quizGrades[i];
}
student3.courseAverage = average / student3.quizGrades;

average = 0;
for (var i=0; i<student4.quizGrades; i++) {
  average += student4.quizGrades[i];
}
student4.courseAverage = average / student4.quizGrades;

//* Challenge - Write a function called `postOffice` that takes in any object, formatted like the example object below.
// - The function should take two parameters, both of which are objects, the first being a package and the second being customs fees information.
// The first object will have a weight and a destination string
// The second object's keys will always correspond with the country code in the destination string.
// - The function should call one of two functions, depending on whether or not the letter is to be sent internationally
// Write a function called `domestic`, which calculates the price depending on the weight of the package (@ .39 dollars a pound).
// Write a function called `international`, which calculates the price depending on weight (@ .45 dollars a pound) + customs fees, from the given customs object.
// Return the total cost of shipping from the postOffice function.

var examplePackage = {
  weight: 3,
  destination: "Illinois, KS, USA"
}

var examplePackage2 = {
  weight: 2.5,
  destination: "Mumbai, MH, IN"
}

var customs = {
  "USA": 0,
  "IN": 3.5,
  "CA": .3,
  "MX": 5
}

//* Challenge - Modify the function below so that the switch statement is encased in a
// separate function. Additionally, remove the `days` assignment and add it
// as the first parameter so that the days of the week can by dynamically
// inputted. The `for` loop should remain in the `question5` function.

function question5 (weekendActivity) {
  var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

  for (var i = 0; i < days.length; i++) {
    switch (days[i]) {
      case 'Sat' || 'Sun':
      console.log('Hooray! I can\'t wait to ' + weekendActivity)
      break;
      default:
      console.log('Better get back to work!')
    }
  }

  return weekendActivity
}

//* Challenge - Write a function called `question4` that:
// - Has no parameters
// - Calls the function `question2` with the String 'functions in functions'

//** Success Criteria - Use Functions to mutate state of Objects & Arrays
//*

//** Success Criteria - Write Higher Order Functions

//** Success Criteria - Use Anonymous Functions with Higher Order Functions





// Leave the code below alone, the tests won't work without it.
module.exports = {
  question0,
  question1,
  question2,
  question3,
  question4,
  question5
}
